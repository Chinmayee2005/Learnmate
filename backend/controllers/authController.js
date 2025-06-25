import User from '../models/User.js';
import { sendVerificationEmail } from '../utils/sendEmail.js';
import { generateCode } from '../utils/generateCode.js';
import fs from 'fs';

const tempCodes = {}; // email: code (store temporarily)

export const sendCode = async (req, res) => {
  const { email } = req.body;

  const code = generateCode();
  tempCodes[email] = code;

  try {
    await sendVerificationEmail(email, code);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to send code' });
  }
};

export const signup = async (req, res) => {
  const { fullName, email, age, gender, interests, verificationCode } = req.body;

  if (tempCodes[email] !== verificationCode) {
    return res.status(400).json({ success: false, message: 'Invalid verification code' });
  }

  try {
    const voicePath = req.file?.path || '';

    const user = new User({
      fullName,
      email,
      age,
      gender,
      interests,
      voicePassword: voicePath
    });

    await user.save();

    delete tempCodes[email];
    res.json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
};
