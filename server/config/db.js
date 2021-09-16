const mongoose = require("mongoose");
const config = require("config");
const { connect } = require("../routes/users");
const db = config.get("MONGODB_URI");

const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true 
    }).then(() => {
        console.log("Mongo DB connected...");
    }).catch((err) =>{
        console.error(err);
        process.exit(1);
    })
}

module.exports = connectDB;