import express from 'express';
import multer from 'multer';
import User from '../models/User.js';
import fs from 'fs';
import crypto from 'crypto';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['audio/wav', 'audio/webm', 'audio/mpeg'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Only audio files are allowed'));
  }
});

function hashAudioFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

router.post('/signin', upload.single('voicePassword'), async (req, res) => {
  const { email } = req.body;
  const newVoicePath = req.file?.path;

  if (!email || !newVoicePath) {
    return res.status(400).json({ success: false, message: 'Email and voice recording required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      fs.unlinkSync(newVoicePath);
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const storedVoicePath = user.voicePassword;
    if (!fs.existsSync(storedVoicePath)) {
      fs.unlinkSync(newVoicePath);
      return res.status(404).json({ success: false, message: 'Stored voice not found' });
    }

    const hash1 = hashAudioFile(storedVoicePath);
    const hash2 = hashAudioFile(newVoicePath);
    fs.unlinkSync(newVoicePath);

    if (hash1 === hash2) {
      return res.status(200).json({ success: true, message: 'Voice verified' });
    } else {
      return res.status(401).json({ success: false, message: 'Voice does not match' });
    }

  } catch (err) {
    console.error('Signin error:', err);
    if (fs.existsSync(newVoicePath)) fs.unlinkSync(newVoicePath);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
