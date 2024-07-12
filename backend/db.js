const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/myboot"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;