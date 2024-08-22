import mongoose from "mongoose";
import { Database_name } from "../constants.js";
const connectDB= async ()=>{
   try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${Database_name}`)
    console.log(` \n MONGODB CONNECTED ${connectionInstance.connection.host}`)
   } catch (error) {
    console.error("ERROR DUE TO MONGODB",error)
    
    process.exit(1);
   }
} 
export default connectDB