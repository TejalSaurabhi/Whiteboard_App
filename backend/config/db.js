const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/whiteboard";
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
