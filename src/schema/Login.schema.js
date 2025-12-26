const {z} = require("zod");

const LoginSchema = z.object({
    email:z.string()
        .trim()
        .email("Invalid email format")
        .min(1,"Email is required")
        .toLowerCase(),
    password_hash:z.string()
         .min(1,"Password is required")
         .max(25,"Password must be at most 25 characters long")       
});