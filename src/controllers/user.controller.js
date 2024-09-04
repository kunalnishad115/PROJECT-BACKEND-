import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
// import {uploadOnCloudinary}  from "../utils/cloudinary.js"
import {uploadOnCloudinary}  from "../utils/cloudinary..js"
import { ApiResponse } from "../utils/ApiResponse.js"
const registerUser=asyncHandler(async(req,res) => {
const {fullName,email,userName,password}=req.body
console.log("email",email);
 if(
    [fullName,email,userName,password].some((field)=>
    field?.trim()==="")
 ){
    throw new ApiError(400,"Please fill all the fields")
 }
   
 const existedUser=User.findOne({
    $or:[{userName},{email}]
 })
 if(existedUser){
    throw new ApiError(400,"User already exists")
 }
 const avatarLocalPath=req.files?.avatar[0]?.path;
 const coverImageLocalPath=req.files?.coverImage[0]?.path;
 if(!avatarLocalPath){
    throw new ApiError(400,"Please upload an avatar")
 }

 const avatar=await uploadOnCloudinary(avatarLocalPath)
 const coverImage=await  uploadOnCloudinary(coverImageLocalPath)
if(!avatar){
    throw new ApiError(400,"Avatar upload failed")
}
const user =await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage.url || "",
    email,
    password,
    userName:userName.toLowerCase()
})
   const createdUser= await User.findById(user._id).select(
    "-password -refreshToken" 
   )

   if(!createdUser){
    throw new ApiError(500,"User not found")
   }
return res.status(201).json(
new ApiResponse(200,createdUser,"User Registered Successfully")
)
})
export {registerUser}