const mongoose = require('mongoose');
const Schema = mongoose.Schema;


countrySchema = new Schema({

    code:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    name:{
        type:String,
        required: true,
        trim:true,
        unique:true
    },
    caseSum:{
      type: Number,
      required:true,
      trim:true
    },
    value:[
        {
            name:{
                type: String,
                required: true,
                trim: true
            },
            date:{
                type: Date,
                required:true,
                unique: true
            },
            case: {
                type: Number,
                required: true,
                trim: true
            },
            death: {
                type: Number,
                required: true,
                trim: true
            },
            recover: {
                type: Number,
                required: true,
                trim: true
            }
        }
        ]

},{collection:'countries'});
 const Country = mongoose.model('country',countrySchema);
    module.exports = Country
