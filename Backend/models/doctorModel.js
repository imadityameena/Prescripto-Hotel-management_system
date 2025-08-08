// FILE: backend/models/doctorModel.js

import mongoose from "mongoose";

// (39.1) Creating Doctor Model in MERN Stack ✅
// (40.1) Creation of doctor model and schema in MERN stack project. ✅
const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    // (40.2) This 'slots_booked' object is crucial for managing the doctor's schedule.
    slots_booked: { type: Object, default: {} },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
}, { minimize: false }) // (40.3) 'minimize: false' ensures empty objects (like slots_booked) are saved.

const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
export default doctorModel;