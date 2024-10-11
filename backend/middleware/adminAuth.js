import jwt from 'jwtwebtoken'
const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers
        if (!token) {
            return res.json({success: false, message: "Not authoriZed! Login again "})

        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
         if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWOR) {
            return res.json({success: false, message: "Not authoriZed! Login again "})
         }
         next()
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message })
    }
}

export default adminAuth;