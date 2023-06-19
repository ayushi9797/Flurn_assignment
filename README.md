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

| Node.js                                                                                                                         | Express.js                                                                                                                      | Mysql                                                                                                                          | CRUD                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| <img width="70px" src="https://user-images.githubusercontent.com/112753481/229047696-de3bf177-16a0-4161-a140-dd89e4fe7b22.png"> | <img width="75px" src="https://user-images.githubusercontent.com/112753481/229164589-4e724000-542d-4deb-9e11-cca7739c2b01.png"> | <img width="75px" src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"> | <img width="75px" src="https://miro.medium.com/v2/resize:fit:1400/1*2eBdh0vLZjUyCDF6x1EqvQ.png"> |

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

## Price Router

### Get Request -> Retrieved all prices

- `http://localhost:8080/price`

### Response Message

```
{
  "message": " 💰  Here Get your all price ",
  "price": [
    {
      "_id": "648ed11abd71e10874108e2d",
      "id": "1",
      "seat_class": "A",
      "normal_price": "$397.61",
      "max_price": "$547.20"
    },
    {
      "_id": "648ed11abd71e10874108e2e",
      "id": "2",
      "seat_class": "B",
      "min_price": "$183.44",
      "normal_price": "$441.65",
      "max_price": "$766.96"
    },
    {
      "_id": "648ed11abd71e10874108e2f",
      "id": "3",
      "seat_class": "C",
      "min_price": "$158.47",
      "normal_price": "$449.40",
      "max_price": "$678.55"
    },
  ]
}
```

#### Note :->

● Less than 40% of seats booked - use the min_price, if min_price is not
available, use normal_price
● 40% - 60% of seats booked - use the normal_price, if normal_price not
available, use max_price
● More than 60% of seats booked - use the max_price, if max_price is not
available, use normal_price

## Route

`http://localhost:8080/price/648ecc153ef0852b5a1f6e0b`

```
{
  "_id": "648ecc153ef0852b5a1f6e0b",
  "id": "3",
  "seat_identifier": "554266047-9",
  "seat_class": "G",
  "isBooked": true
}

```

## Response Status

```
{
  "message": "  💰  Here Get your  price ",
  "chargedPrice": "$296.21"
}
```

## Booking Routes

- `http://localhost:8080/booking`

```
{
    "name": "String",
    "phone" : "String",
    "seats" : [10,90,50,60]
}


```

## Response Status -> all booking seats

```
[
  {
    "_id": "648ecc153ef0852b5a1f6e0a",
    "id": "2",
    "seat_identifier": "186150079-3",
    "seat_class": "E",
    "isBooked": true
  },
  {
    "_id": "648ecc153ef0852b5a1f6e0b",
    "id": "3",
    "seat_identifier": "554266047-9",
    "seat_class": "G",
    "isBooked": true
  },
  {
    "_id": "648ecc153ef0852b5a1f6e0d",
    "id": "5",
    "seat_identifier": "113273476-2",
    "seat_class": "G",
    "isBooked": true
  },
  {
    "_id": "648ecc153ef0852b5a1f6e0e",
    "id": "6",
    "seat_identifier": "006890170-4",
    "seat_class": "B",
    "isBooked": true
  }
]
```

## GET Route

- `http://localhost:8080/bookings?username=String`

```
{


  "seat_class": "H",
  "isBooked": true
}

```

## Response Status

```
[
  {
    "_id": "64900996c941be4f2e17e580",
    "name": "String",
    "phone": "String",
    "seats": [
      2,
      3,
      5,
      6
    ],
    "__v": 0
  },
  {
    "_id": "64900a20ea78dabad54b9f56",
    "name": "String",
    "phone": "String",
    "seats": [
      2,
      3,
      5,
      6
    ],
    "__v": 0
  },
  {
    "_id": "64900bc070b1e8266234534e",
    "name": "String",
    "phone": "String",
    "seats": [
      2,
      3,
      5,
      6
    ],
    "__v": 0
  },
  {
    "_id": "64902b843263208a8ccd3efb",
    "name": "String",
    "phone": "String",
    "seats": [
      2,
      3,
      5,
      6
    ],
    "__v": 0
  },
  {
    "_id": "64905c067c17eb090f800d0a",
    "name": "String",
    "phone": "String",
    "seats": [
      10,
      90,
      50,
      60
    ],
    "__v": 0
  }
]

```

## All router

# All routes

| METHOD | ENDPOINT                  | DESCRIPTION                                                 | STATUS CODE |
| ------ | ------------------------- | ----------------------------------------------------------- | ----------- |
| Get    | /seat                     | This endpoint should allow users to Get all the seats.      | 200         |
|        |                           |
| GET    | /seat/:id                 | This endpoint should return a list of seat with specific id | 200         |
| Get    | /price/:id                | This endpoint should allow to get price by specific id      | 200         |
| Get    | /price                    | This endpoint should allow to get all the price             | 200         |
| POST   | /booking                  | This endpoint should allow to get all booking details.      | 200         |
| GET    | /bookings?username=String | Return all bookings created by the user. T                  | 200         |
