// FILE: backend/middleware/authDoctor.js

import jwt from 'jsonwebtoken'

// (69) Creating doctor authentication middleware ✅
// doctor authentication middleware
const authDoctor = async (req, res, next) => {
    const { dtoken } = req.headers
    if (!dtoken) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        
        // (69.1) This is a crucial step. The doctor's ID from the token is added to the request body.
        // This makes it securely available to the controller for fetching doctor-specific data.
        req.body.docId = token_decode.id
        
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor;