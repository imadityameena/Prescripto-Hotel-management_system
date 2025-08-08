// FILE: backend/config/cloudinary.js

import { v2 as cloudinary } from 'cloudinary';

// (38) Configuring Cloud NY storage with API key and secret key ✅
// This function configures the Cloudinary SDK using credentials stored in environment variables.
const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });
}

export default connectCloudinary;