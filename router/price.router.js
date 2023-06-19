
const express = require('express');

//!  Importing MOdels 
const { bookingModel } = require('../model/booking.model');
const { seatModel } = require('../model/seat.model');
const { priceModel } = require('../model/price.model');


const app = express();

// ! Making Price Route
const PriceRouter = express.Router();
PriceRouter.use(express.json());


// ! Get Request Handler for Price Route for specific id

PriceRouter.get("/price/:id", async (req, res) => {
    try {

        let totalSeat = (await seatModel.find({ "seat_class": req.body.seat_class })).length;
        let priceObj = await priceModel.find({ "seat_class": req.body.seat_class })
        priceObj = priceObj[0]
        console.log(priceObj)
        let bookedSeat = (await seatModel.find({ isBooked: true })).length;

        let percentage = Math.round((bookedSeat / totalSeat) * 100);
        let chargedPrice = 0;

        if (percentage < 40) {
            if (priceObj.min_price) chargedPrice = priceObj.min_price;
            else if (priceObj.max_price) chargedPrice = priceObj.max_price;
            else chargedPrice = priceObj.normal_price
        }
        else if (percentage > 40 && percentage < 60) chargedPrice = priceObj.normal_price
        else if (percentage > 60) chargedPrice = priceObj.max_price


        res.status(201).send({ message: `  💰  Here Get your  price `, chargedPrice })
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `error ☹️ IN getting   the  price : ${error.message}` });

    }

})






// ! Get Request Handler for Price Route 


PriceRouter.get("/price", async (req, res) => {
    try {
        let price = await priceModel.find()
        console.log(price)
        res.status(201).send({ message: ` 💰  Here Get your all price `, price })
    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `error ☹️ IN getting   the  price : ${error.message}` });

    }

})



















module.exports = { PriceRouter };