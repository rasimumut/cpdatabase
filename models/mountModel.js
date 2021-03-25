const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mounthSchema = new Schema({

    name:{
        type:String,
        required: true,
        trim:true,
        unique:true
    },
    case:{
        type: Number,
        required:true,
        trim:true
    },
    death:{
        type: Number,
        required:true,
        trim:true
    },
    recover:{
        type: Number,
        required:true,
        trim:true
    }

},{collection:'mounth'});
const Mounth = mongoose.model('mounth',mounthSchema);
module.exports = Mounth
