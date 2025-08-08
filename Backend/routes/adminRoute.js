// FILE: backend/routes/adminRoute.js

import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

// (42.2) Creating controller functions for APIs and admin panel design ✅
// (42.3) Adding admin router and endpoint in MERN stack ✅
// The /login route is public.
adminRouter.post("/login", loginAdmin)

// (45.4) Adding Admin Token for Authentication ✅
// All subsequent routes are protected by the authAdmin middleware.
// The 'upload' middleware is used here to handle the image file from the form.
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;