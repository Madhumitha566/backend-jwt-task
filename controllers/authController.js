import User from '../models/User.js'
import jwt from "jsonwebtoken"

export const registerUser=async (req,res,next)=>{
    const {username,email,password}=req.body
    try{
        const userExists= await User.findOne({email})
        if(userExists) return res.status(400).json({message:"User Already Exsits"})
        await User.create({username,email,password})
        res.status(201).json({message:"User registered successfully"})
    }catch(error){
        next(error)
}
}

export const loginUser=async(req,res,next)=>{
    const {email,password}=req.body
    try{
        const user= await User.findOne({email})
        if(user&&(await user.comparePassword(password))){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'30d'})
            return res.json({token})
           
        }else{
           res.status(400).json({message:'Invaild email or password'}) 
        }
     }catch(error){
         next(error)
        }
}
export const getuserProfile = async (req, res, next) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Not authorized, user data missing" });
        }

        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json(user);
        
    } catch (error) {
        next(error);
    }
}