import jwt from 'jsonwebtoken'

//admin authentication middleware

const authAdmin = (req, res, next) => {
  try {
    const {atoken} = req.headers
    if(!atoken) {
       return res.json({success: false, message: "Not Auhtorized, Login again"})
    }
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)

    if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_EMAIL_PASSWORD) {
      return res.json({success: false, message: "Not Authorized, Login again"})
    }

    next()
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Authentication failed"})
    
  }
}