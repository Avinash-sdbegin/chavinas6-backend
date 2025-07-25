import { asyncHandler } from "../utils/asyncHandler.js";

//asyncHandler ek higher order function jo accept karta hai ek function ko

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    //agr already nhi hai toh 
    //image mangenge ni to avatar compulsory
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res



    /*  ********IMPORTANT***************      
1.   first the user send the data
2.   then we have to take the data from body
2.1,  check if all required fields are available or not 

3.   then in our regsiteration model we have to find the user if present in it then we return  without registering the user
4.   if user not  present we create the user in the database
5.   then we sent the message that user created successfully
*/
   res.status(200).json({
   message: "ok"
    });
});

//pehle ye sab send karke dekhte hai
 
   
export {
    registerUser,/*
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,
    getWatchHistory*/
};