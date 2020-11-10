const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    contactNumber:
    {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    verified:
    {
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model('users',userSchema);