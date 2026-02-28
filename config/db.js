import mongoose from "mongoose";

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`mongodb connected in Port 5000`)
    }catch(error){
        console.log(`Error:${error.message}`)
    }
}
export default connectdb