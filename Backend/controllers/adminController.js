// FILE: backend/controllers/adminController.js

import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import userModel from "../models/userModel.js";

// (42.1) Creating controller functions for APIs and admin panel design ✅
// (44.1) Creating login functionality for admin ✅
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body

        // (44.2) Generate token based on email and password match ✅
        // Admin login is handled by checking credentials against environment variables.
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// (62.1) Creating API endpoint for admin panel appointments retrieval ✅
// API to get the complete list of all appointments for the admin panel.
const appointmentsAdmin = async (req, res) => {
    try {
        const appointments = await appointmentModel.find({})
        res.json({ success: true, appointments })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// (63.1) Creating admin route to cancel appointments ✅
// API for an admin to cancel any appointment in the system.
const appointmentCancel = async (req, res) => {
    try {
        const { appointmentId } = req.body
        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
        res.json({ success: true, message: 'Appointment Cancelled' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// (42.4) Adding fields for doctor appointment booking form ✅
// API for adding a new Doctor to the database.
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
        const imageFile = req.file

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        // (42.5) Data validation and input checking ✅
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // (42.6) Encrypting and saving passwords using bcrypt package ✅
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        // (42.7) Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        // (42.8) Storing doctor data in the database ✅
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()
        res.json({ success: true, message: 'Doctor Added' })

    } catch (error) {
        // (42.9) Configuring assets and resolving validation errors in project setup ❌
        // A generic catch block is used. For production, more specific error handling (e.g., for duplicate email) would be needed.
        // Hint: Check for existing email before saving: `const exists = await doctorModel.findOne({email}); if(exists){...}`
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// (48.1) Creating API to get all doctors data ✅
// API to get a list of all doctors for the admin panel.
const allDoctors = async (req, res) => {
    try {
        // (48.2) Saving doctor request and retrieving doctor details for admin panel ✅
        // The password field is excluded from the result for security.
        const doctors = await doctorModel.find({}).select('-password')
        res.json({ success: true, doctors })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// (64.1) Set up appointments, patients, and latest appointments in MERN stack ✅
// API to get aggregated data for the admin dashboard.
const adminDashboard = async (req, res) => {
    try {
        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    loginAdmin,
    appointmentsAdmin,
    appointmentCancel,
    addDoctor,
    allDoctors,
    adminDashboard
}