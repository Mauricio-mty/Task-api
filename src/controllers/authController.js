const User = require("../service/UserService");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

exports.login=async(req,res)=>{
   //console.log(req.body);

   const data = await User.getUserByEmail(req.body.email);
    console.log(data);
   try {
    const data = await User.getUserByEmail(req.body.email);
    console.log(data);
     
   const valid = await bcrypt.compare(req.body.password_hash,data.password_hash);
   if(!valid) return res.status(401).json({message:"Authentication failed"});
    const token = jwt.sign(
               {id:data.id,email:data.email},
               process.env.JWT_SECRET,
               {expiresIn:'1h'}
           );
           res.status(200).json({message:"Authentication successful",token})
   } catch (error) {
    res.status(500).json({error:"Internal server error",m:error.message});
   }

}