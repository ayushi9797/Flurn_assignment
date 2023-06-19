// !  Booking Schema 

const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    seats: Array,
});


const bookingModel = mongoose.model('bookings', bookingSchema);


module.exports = { bookingModel };