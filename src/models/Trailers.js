const {Schema, model} = require('mongoose')

const  TrailerSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,

    },
    date:{
        type: String,
        required: true,

    },
    director:{
        type: String,
        required: true,
    },
    actor:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    link: {
        type: String,
        required: true,
    },
    //apartado de imagen
    filename:{
        type: String,
        required: true,
    },
    path:{
        type: String,
        required: true,
    },  
    originalname: {
        type: String,
        required: true,
    },
    mimetype: {
        type: String,
        required: true,
    },
    size: {
         type: Number,
         required: true,
    },

 
},
{
    timestamps: true,
  })

module.exports = model('Trailerdb', TrailerSchema)