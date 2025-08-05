import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private/Admin
const createPost = asyncHandler(async (req, res) => {
  const { caption } = req.body;
  const imageUrl = req.file.path; // This comes from Multer/Cloudinary

  const post = await Post.create({
    user: req.user._id,
    caption,
    imageUrl
  });

  res.status(201).json(post);
});

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).populate('user', 'name');
  res.json(posts);
});

export { createPost, getPosts };