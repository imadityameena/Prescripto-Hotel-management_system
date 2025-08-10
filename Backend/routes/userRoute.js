// FILE: backend/routes/userRoute.js

import express from 'express';
import { loginUser, registerUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment, paymentRazorpay, verifyRazorpay, paymentStripe, verifyStripe } from '../controllers/userController.js';
import upload from '../middlewares/multer.js';
import authUser from '../middlewares/authUser.js';
const userRouter = express.Router();

// (50.4) Setting up JWT authentication and creating user registration route ✅
// Public routes for user registration and login.
userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

// (43.8) All subsequent routes are protected and require a valid user token.
userRouter.get("/get-profile", authUser, getProfile)

// (44.6) Implementing multiple middleware functions for user authentication and data update ✅
// This route uses both the 'upload' middleware for the file and 'authUser' for authentication.
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile)

userRouter.post("/book-appointment", authUser, bookAppointment)
userRouter.get("/appointments", authUser, listAppointment)
userRouter.post("/cancel-appointment", authUser, cancelAppointment)
userRouter.post("/payment-razorpay", authUser, paymentRazorpay)
userRouter.post("/verifyRazorpay", authUser, verifyRazorpay)
userRouter.post("/payment-stripe", authUser, paymentStripe)
userRouter.post("/verifyStripe", authUser, verifyStripe)

export default userRouter;