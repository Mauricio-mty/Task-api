const {z} = require("zod");

const UserSchema = z.object({
    username:z.string(),
    email:z.string().email(),
    password_hash:z.string().min(8,"Password must be at least 8 characters long"),

}  
);

module.exports=UserSchema;