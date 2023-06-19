const express = require("express");
const { connection } = require("./config/db");
const { SeatRouter } = require("./router/seat.router");
const { PriceRouter } = require("./router/price.router");
const { BookingRouter } = require("./router/booking.router");

const app = express();

// ! Importing Routes Seats , price , Booking routes 

app.use("/", SeatRouter);
app.use("/", PriceRouter);
app.use("/", BookingRouter);


app.use(express.json());


// ! Home Router

app.get("/", async (req, res) => {
  try {
    res.send(`<h1>  WElcome to Home Router   </h1>`);

  } catch (error) {
    console.log(error.message);

  }

})





// ! connection to server

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with the  port: ${error.message}` });
  }
});
