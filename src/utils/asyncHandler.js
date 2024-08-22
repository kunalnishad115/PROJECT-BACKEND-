const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(res,req,next)).reject((error)=>next(error))
    }

}
export {asyncHandler}