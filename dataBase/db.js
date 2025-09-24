var mongoose = require("mongoose")
async function connectTodataBase(){
    try{
        await mongoose.connect(process.env.MODEL_URL)
        console.log("connected to the dataBase");
        
    }catch{
        console.log("error occured");
        
    }
}
module.exports = connectTodataBase