import jwt from "jsonwebtoken";

// const adminLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (
//       email === process.env.ADMIN_EMAIL &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       // ✅ sign with object payload
//       const token = jwt.sign(
//         { email },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );
// // console.log("Decoded token:", decoded);

//         return res.json({ success: true, token });
        
//     }

//     return res.json({ success: false, message: "Invalid Credentials" });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default adminLogin;



const adminAuth = async (req, res, next) => {
  try {
    const {token} = req.headers
    if (!token) {
      return res.json({success: false, message: "Not Authorized Login Again"})
    }
      
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized Login Again"})
    }
    next()
  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}

export default adminAuth;