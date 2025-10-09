const mongoose = require("mongoose");

async function connectTodataBase() {
    try {
        await mongoose.connect(process.env.MODEL_URL);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error occurred while connecting to the database:", error.message);
    }
}

module.exports = connectTodataBase;
