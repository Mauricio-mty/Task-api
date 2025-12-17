 const validate =
    (schema) => (req, res, next) => {
        try{
            req.body = schema.parse(req.body);
            next();

        }catch(e){
             return res.status(400).json({
                message:"Datos invalidos",
                errors:e.errors
             });   

        }
    };
    module.exports = validate;