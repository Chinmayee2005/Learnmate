import express from 'express';
import multer from 'multer';
import { sendCode, signup } from '../controllers/authController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.post('/send-code', sendCode);
router.post('/signup', upload.single('voicePassword'), signup);

export default router;
