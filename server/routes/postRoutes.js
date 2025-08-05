import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import { createPost, getPosts } from '../controllers/postController.js';
import upload from '../middleware/uploadMiddleware.js'; // This is the multer logic we created

router.route('/')
  .get(getPosts)
  .post(protect, admin, upload.single('image'), createPost); // Admin-only upload route

export default router;