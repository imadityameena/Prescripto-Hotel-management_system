// FILE: backend/server.js

import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// (36.2) Setting up and running a simple Express app ✅
// app config
const app = express()
const port = process.env.PORT || 4000

// (37.2) Establishing connection with MongoDB Atlas database ✅
connectDB()
// (38) Configuring Cloud NY storage with API key and secret key ✅
connectCloudinary()

// middlewares
app.use(express.json()) // for parsing request body
app.use(cors()) // to allow requests from frontend

// (39.3) Adding admin router and endpoint in MERN stack ✅
// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)


app.get("/", (req, res) => {
    res.send("API Working")
});

// (36.3) Setting up and running a simple Express app ✅
app.listen(port, () => console.log(`Server started on PORT:${port}`))