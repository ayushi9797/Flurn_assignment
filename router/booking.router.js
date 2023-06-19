
const express = require('express');

//!  Importing MOdels 

const { bookingModel } = require('../model/booking.model');
const { seatModel } = require('../model/seat.model');



const app = express();

// ! Making Booking Route
const BookingRouter = express.Router();
BookingRouter.use(express.json());









// ! Get Request Handler 

BookingRouter.post("/booking", async (req, res) => {
    let { name, phone, seats } = req.body
    try {

        let bookedseatdata = []
        for (seat of seats) {
            let temp = await seatModel.find({ id: seat })
            temp = temp[0]
            temp.isBooked = true;

            bookedseatdata.push(temp)
        }
        for (let seat of bookedseatdata) {
            await seatModel.findByIdAndUpdate(seat._id, seat)
        }
        const bookings = new bookingModel(req.body)
        await bookings.save()
        res.status(201).send({ message: `  💰  Here Get your  booking seats `, bookedseatdata })
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `error ☹️ IN getting   the  booking : ${error.message}` });
    }

})


BookingRouter.get("/bookings",async(req,res)=>{
    try {
        let totalbookings = await bookingModel.find({name:req.query.username})

        console.log(req.query);
        res.send(totalbookings)
        
    } catch (error) {
        
    }

})









module.exports = { BookingRouter };