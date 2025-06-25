import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  age: Number,
  gender: String,
  interests: [String],
  voicePassword: String, // path to audio file
});

export default mongoose.model('User', userSchema);
