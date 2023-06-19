
const express = require('express');

// ! Importing Booking seatmodel  models
const { bookingModel } = require('../model/booking.model');
const { seatModel } = require('../model/seat.model');



const app = express();

// ! Making Seat Router

const SeatRouter = express.Router();
SeatRouter.use(express.json());


// ! Get Request

// 
SeatRouter.get("/seat", async (req, res) => {
    try {
        let seat = await seatModel.find();
        res.status(201).send({ message: ` 💺 Here Get your all seats `, seat })
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `error ☹️ IN getting   the  Seats : ${error.message}` });
    }

})


// ! Get Seats by Specific id 


SeatRouter.get("/seat/:id", async (req, res) => {
    try {
        let seat = await seatModel.findById(req.params.id);
        res.status(201).send({ message: ` 💺 Here Get your specific seats `, seat })
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `error ☹️ IN getting   the  Seats : ${error.message}` });
    }

})












module.exports = { SeatRouter };