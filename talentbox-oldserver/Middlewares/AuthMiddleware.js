const User = require("../Models/UserModels");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      "talent-box_secret-key",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) res.json({ status: true,$or: [{ user: user.email }, { user: user.name }] });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};





// const User=require("../Models/UserModels");
// const jwt =require("jsonwebtoken");

// module.exports.checkUser = (req,res,next)=> {
//     const token=req.cookie.jwt
//     if(token){
//         jwt.verify.apply(token,"talent-box_secret-key",async(err,decodedToken)=>{
//             if(err){
//                 res.json({status:false})
//                 next()
//             }else{
//                 const user=await User.findById(decodedToken.id) 
//             if(user)
//             {
//                 res.json({status:true,user:user.email})
//             }
//             else{
//                 res.json({status:false})
//             }
//             next()

//         }
//         });
//     }else{
//         res.join({status:false})
//         next();
//     }

// }