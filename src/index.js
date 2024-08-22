import dotenv from 'dotenv'
import connectDB from './database/index.js'
dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.error(err)
})