var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
    // serviceId: {
    //     type: String,
    //     unique: true,
    //     index: true
    // },
    title: String,
    content: String
        // img: String
});

module.exports = mongoose.model('Service', serviceSchema);