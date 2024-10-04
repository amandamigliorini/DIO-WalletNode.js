import mongoose, { disconnect } from "mongoose";
import "dotenv/config";

//this function needs to be asynchronous because mongoose.connect will return a promise
//and it is necessay to use await
export async function connectDb(){
    const mongoUrl = (process.env.DATABASE_URI);
//use try because you can't control the database answer, so it is good to handle an error
    try {
        await mongoose.connect(mongoUrl);
        console.log('MongoDB Atlas connected!')
    } catch (err){
        console.log(err.message);
    }
    
}

export async function disconnectDb(){
    await mongoose.disconnect();
}