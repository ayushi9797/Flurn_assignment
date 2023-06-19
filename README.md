# Flurn Assignments

## Backend Service Development

# # Objective

Build a Booking Service which allows you to choose seats and book.

# Nodejs

- Node.js is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code outside of a web browser

# Express

- Express is just a framework, that can help us in creating the server in very easy way

# MongoDB

- MongoDB is a popular open-source NoSQL database program that provides a flexible and scalable approach to storing and retrieving data.

# REQUIREMENTS

- Retrieves a list of all seats
- Retrieves a list of specific seats
- Able to get price
- Able to Retrieves a list of price by specific id
- Able to Retrieves a list of all the booking details

## Setting up mongoDB with Express Nodejs

### To run Mysql with Express Nodejs , follow these steps:->

#### Running node.js locally

- install all dependencies `npm install`

* To run Mysql server with Express Node : `nodemon server`

---

#### Creating Server

- It is not an inbuilt module of node, so we have to install it using `npm`
- Create a node project by `npm init -y` .
- Create a file named `index.js` .
- Initialise a node project and install `nodemon`
- Install `express`
- Install some more dependencies `mongoose,dotenv,express`by npm install.

* To run Mysql server with Express Node

- `nodemon server`

# Tech Stack Used: -

## Backend : -

| Node.js                                                                                                                         | Express.js                                                                                                                      | Mysql                                                                                                                          |     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --- |
| <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/229164589-4e724000-542d-4deb-9e11-cca7739c2b01.png"> | <img width="75px" src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"> |

# Seat Schema

```
 {

 id: String,
 seat_identifier: String,
 seat_class: String,
 isBooked: Boolean,

 }



```

# Price Schema

```
{
    id: String,
    seat_class: String,
    min_price: String,
    normal_price: String,
    max_price: String,

}
```

# Booking Schema

```
{
    name: String,
    phone: String,
    seats: Array,

}

```

# Routes for seat

### Get Router -> Get all seats

- `http://localhost:8080/seat`

### Response of some -> Get all seats

```
{
  "message": " 💺 Here Get your all seats ",
  "seat": [
    {
      "_id": "648ecc153ef0852b5a1f6e09",
      "id": "1",
      "seat_identifier": "654059941-2",
      "seat_class": "H",
      "isBooked": true
    },
    {
      "_id": "648ecc153ef0852b5a1f6e0a",
      "id": "2",
      "seat_identifier": "186150079-3",
      "seat_class": "E",
      "isBooked": true
    },
  ]
}


```

### Get Router -> Get specific seats

- `http://localhost:8080/seat/648ecc153ef0852b5a1f6e09`

### Response Message

```
{
 "message": " 💺 Here Get your specific seats ",
 "seat": {
   "_id": "648ecc153ef0852b5a1f6e09",
   "id": "1",
   "seat_identifier": "654059941-2",
   "seat_class": "H",
   "isBooked": true
 }
}

```
