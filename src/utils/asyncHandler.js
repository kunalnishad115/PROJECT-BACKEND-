const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(res,req,next)).reject((err)=>next(err))
    }

}
export {asyncHandler}