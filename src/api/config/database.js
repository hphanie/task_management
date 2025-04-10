const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.error("failed to connect to DB", error);
        process.exit();
    }
};

module.exports = connectDB;