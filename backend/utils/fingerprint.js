import User from '../models/User.js';

export const isDeviceRegistered = async (fingerprint) => {
  const existing = await User.findOne({ deviceFingerprint: fingerprint });
  return !!existing;
};
