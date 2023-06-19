// ! Price Schema

const mongoose = require('mongoose');


const priceSchema = new mongoose.Schema({
    id: String,
    seat_class: String,
    min_price: String,
    normal_price: String,
    max_price: String,
});


const priceModel = mongoose.model('price', priceSchema);


module.exports = { priceModel };