import mongoose from "mongoose"

export default function DbConnect(){
    try{
        mongoose.connect("mongodb://localhost:27017/shopper");
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Failed to connect to MongoDB", err);
    }
}

