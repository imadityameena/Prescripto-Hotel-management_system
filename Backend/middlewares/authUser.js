// FILE: backend/middleware/authUser.js

import jwt from 'jsonwebtoken'

// (43.6) Creating user authentication middleware ✅
// user authentication middleware
const authUser = async (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        
        // (43.7) The user's ID is decoded from the token and attached to the request body.
        // This allows the userController to know who is making the request.
        req.userId = token_decode.id
        
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authUser;