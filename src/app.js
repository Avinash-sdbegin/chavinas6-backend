import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,//yaha pe CORS_ORIGIN ko .rakha jata hai

    credentials: true
}))

app.use(express.json({limit: "16kb"}))//16kb is the maximum size of the request body that we are allowing
app.use(express.urlencoded({extended: true, limit: "16kb"}))//urlencoded is used to parse the data from the form submission
//extended: true means we are allowing nested objects in the request body
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

/*
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"
*/
//routes declaration
//app.get k thorugh kam ho raha tha kyuki router sath me tha

//app.use("/api/v1/healthcheck", healthcheckRouter)//api used kar rahe 1 ka healthcheck k
app.use("/api/v1/users", userRouter)
/* 
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)
*/
// http://localhost:8000/api/v1/users/register
export default app
