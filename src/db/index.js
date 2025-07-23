import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

//DB is in another continent

const connectDB = async() => {
    //await lagana padega kyuki database connection asynchronous hai
     try{
        //mangoose return me ek object deta hai jisme connection instance hota hai
        //usko kisi variable me store karna padega
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        //{connectionInstance.connection.host} batata hai ki kaunsa host connect hua hai
        // ye host name console me print karega
     } catch(error) {
         console.log("MONGODB connection error",error);
         process.exit(1);
     }
}

export default connectDB