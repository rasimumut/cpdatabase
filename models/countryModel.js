const mongoose = require('mongoose');
const Schema = mongoose.Schema;

countrySchema = new Schema({

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

},{collection:'countries'});
 const Country = mongoose.model('country',countrySchema);
    module.exports = Country
