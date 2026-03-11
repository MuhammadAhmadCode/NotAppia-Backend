const jwt = require("jsonwebtoken")

async function notemiddleware(req,res,next){
    try {
        const token = req.cookies.token

        if(!token){
            return res.status(401).json({message:"Unauthorized!"})
        }
        
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        res.user = decoded
        next()
    } catch (err) {
        console.log(err)
        return res.status(401).json({message:"Unauthorized!"})
    }
}


module.exports = {notemiddleware}