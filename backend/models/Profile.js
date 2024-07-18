const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true,
        unique: true
    },
    phone : {
        type: Number,
        require: true
    },
    website : {
        type: String
        
    },
    instragram: {
        type: String
    }
});
const Profile = mongoose.model('profile',UserSchema);
module.exports = Profile;