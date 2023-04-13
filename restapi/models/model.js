const mongoose = require('mongoose');
//CAMBIAR EL NOMBRE DE LA CLASE A PLACEMARK
const dataSchema = new mongoose.Schema({
    latitude: {
        required:true,
        type: Number
    },
    longitude: {
        required:true,
        type: Number
    },
    webId: {
        required: true,
        type: String
    },
    placeId: {
        required: false,//TODO
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)
