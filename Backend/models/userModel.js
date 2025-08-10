// FILE: backend/models/userModel.js

import mongoose from "mongoose";

// (41.1) Creating user model in MERN stack project. ✅
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    // --- FIX: The long, corrupted string that was here has been replaced ---
    // --- with this short, valid string for a placeholder image. ---
    image: { type: String, default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' },
    
    phone: { type: String, default: '000000000' },
    address: { type: Object, default: { line1: '', line2: '' } },
    gender: { type: String, default: 'Not Selected' },
    dob: { type: String, default: 'Not Selected' },
    password: { type: String, required: true },
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;