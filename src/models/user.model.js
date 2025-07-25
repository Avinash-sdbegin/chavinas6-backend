import mongoose, {Schema} from "mongoose";
// Importing mongoose and Schema from mongoose
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true//jab searchable banana hai toh true kar do
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)
//pre hook  
userSchema.pre("save", async function (next) {
    //Agr password field ko modify nahi kiya hai toh next function ko call kar do
    if(!this.isModified("password")) return next();
 //jab aapko password filed k modification bheju tabhi aapko 
 //is function ko run karna hai
    //agar password field ko modify nahi kiya hai toh next function ko call kar do
    this.password = await bcrypt.hash(this.password, 10)
    next()
    //password script tab karung ajab password set karna ho
    //ya fir password ko change karna ho

})
//bcrypt 
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

//**********jwt token */
//jwt ek bearer token generate karne ke liye use hota hai
//yeh function user ko access token generate karne ke liye use hota hai
//yeh token jiske bhi paas hai wo ise access kar skta hai
//yeh token user ke details ko bhi contain karta hai
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)