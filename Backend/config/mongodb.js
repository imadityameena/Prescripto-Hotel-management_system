// FILE: backend/config/mongodb.js

import mongoose from "mongoose";

const connectDB = async () => {

    // (37.1) Setting up database user and connection string ✅
    // (37.2) Establishing connection with MongoDB Atlas database ✅
    // This connects to the database using the URI from environment variables and logs a confirmation message.
    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)

}

export default connectDB;