const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createError = require("http-errors");
const bcrypt = require('bcrypt')

UserSchema = new Schema({
    userName:{
        type:String,
        required: true,
        trim:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        trim:true,
    },



},{collection:'users'})


UserSchema.statics.girisYap = async function (userName,password) {
    const user = await User.findOne({userName:userName});
    if(!user){
        throw createError(400,"Girilen bilgiler hatalı");
    }
    const passwordcheck = await bcrypt.compare(password,user.password)

    if(!passwordcheck){
        throw createError(400,"Girilen bilgiler hatalı");
    }
    return user;
}
const User = mongoose.model('user',UserSchema);
module.exports = User;
