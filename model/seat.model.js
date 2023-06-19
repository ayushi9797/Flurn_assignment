// ! Seat Schema

const mongoose = require('mongoose');


const seatSchema = new mongoose.Schema({
    id: String,
    seat_identifier: String,
    seat_class: String,
    isBooked: Boolean, 
});


const seatModel = mongoose.model('seats', seatSchema);


module.exports = { seatModel };