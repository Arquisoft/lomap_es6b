const mongoose = require('mongoose');
//CAMBIAR EL NOMBRE DE LA CLASE A PLACEMARK
const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    latitude: {
        required:true,
        type: Number
    },
    logitude: {
        required:true,
        type: Number
    },
    category: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)
