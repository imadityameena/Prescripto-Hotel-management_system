// FILE: backend/middleware/authAdmin.js

import jwt from "jsonwebtoken";

// (45.1) Implementing admin authentication middleware ✅
// (45.2) Adding token verification and authentication middleware for doctor appointment booking system using MERN stack. ✅
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        if (!atoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        
        // (45.3) This stateless verification method is unique to the single-admin setup.
        // It checks if the decoded token's content exactly matches the admin credentials.
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }
        
        next() // If valid, proceed to the controller function.
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;