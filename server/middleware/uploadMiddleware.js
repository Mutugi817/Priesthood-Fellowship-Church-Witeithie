const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path');
const fs = require('fs');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let storage;

if (process.env.NODE_ENV === 'production') {
  // Use Cloudinary storage in production
  storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'mern-app-images',
      allowed_formats: ['jpg', 'png', 'jpeg'],
    },
  });
} else {
  // Use local disk storage in development
  const uploadPath = path.join(__dirname, '..', process.env.UPLOAD_PATH);
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
  }
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
}

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload only images.'), false);
    }
  },
});

module.exports = upload;