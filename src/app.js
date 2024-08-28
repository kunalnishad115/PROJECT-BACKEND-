import  express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import {middleware} from './middlewares/multer.middleware.js'
// import {app} from  './app.js'


// const express = require('');
// const cookieParser = require('');
// require module




const app=express()
app.use(cors({
origin: process.env.CORS_ORIGIN,
credentials: true
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static('public'));
app.use(cookieParser());

//routes import
import  userRouter from './routes/user.routes.js'
//routes declare
app.use("/api/v1/users", userRouter)

export {app}
