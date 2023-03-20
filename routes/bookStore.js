const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Orders } = require("../models");
const { Books } = require("../models");
const { User } = require("../models");
const axios = require('axios');



//Get All Books
router.get("/allBooks", async (req, res) => {
  const BookData = await Books.findAll({
    include: {
      all: true,
      nested: true
    },
  });
  res.json(BookData);
});

// Gets Book with ID
router.get("/getBook/:id", async (req, res) => {
  const BookId = req.params.id;
  const BookData = await Books.findAll({
    where: {
      BookId: BookId,
    },
    include: {
      all: true,
      nested: true
    },
  });
  res.json(BookData);
});

// add Book to Shopping Cart
router.post("/cartBook", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await User.create(bodyData);
  res.json(createResponse);
});

//remove Book from Cart
router.post("/cartBook", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await User.destroy(bodyData);
  res.json(createResponse);
});

// Creates a new user on database
router.post("/userData", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await User.create(bodyData);
  res.json(createResponse);
});

//Update User
router.put("/userData/:id", async (req, res) => {
  const bodyData = req.body;
  const UserId = req.params.id;
  const userData = await User.update(bodyData, {
    where: {
      UserId: UserId,
    },
  });
  res.json(userData);
});

// Gets user data by phone number
router.get("/userData/:MobileNumber", async (req, res) => {
  const MobileNumber = req.params.MobileNumber;
  const userData = await User.findAll({
    where: {
      MobileNumber: MobileNumber,
    },
    include: {
      model: Appointments,
      as: "appointment",
    },
  });
  res.json({ users: userData });
});


// Creates a new Book on database
router.post("/addBook", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await Books.create(bodyData);
  res.json(createResponse);
});

router.put("/updateBook/:id", async (req, res) => {
  const bodyData = req.body;
  const BookId = req.params.id;
  const BookData = await Books.update(bodyData, {
    where: {
      BookId: BookId,
    },
  });
  res.json(BookData);
});



//get Book with ISBN Number
router.get("/getBookISBN/:ISBN", async (req, res) => {
  const ISBN = req.params.ISBN;
  const BookData = await Books.findAll({
    where: {
      ISBN: ISBN,
    },
    include: {
      all: true,
      nested: true
    },
  });
  res.json(BookData);
});



//Orders
// Creates a new user on database
router.post("/createOrder", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await Orders.create(bodyData);
  res.json(createResponse);
});

//get Order by OrderId
router.get("/getOrder/:id", async (req, res) => {
  const OrderId = req.params.id;
  const orderData = await Orders.findAll({
    where: {
      OrderId: OrderId,
    },
    include: {
      all: true,
      nested: true
    },
  });
  res.json(orderData);
});

//get all orders of User
router.get("/userOrders/:uid", async (req, res) => {
  const UserId = req.params.uid;
  const orderData = await Orders.findAll({
    where: {
      UserId: UserId,
    },
    include: {
      all: true,
      nested: true
    },
  });
  res.json(orderData);
});

//Reviews
router.post("/review", async (req, res) => {
  const bodyData = req.body;
  const createResponse = await Reviews.create(bodyData);
  res.json(createResponse);
});

router.get("/review/:id", async (req, res) => {
  const Id = req.params.id;
  const reviewData = await Reviews.findAll({
    where: {
      Id: Id,
    },
    include: [
      {
        model: User,
        as: "user",
      },
      {
        model: Professional,
        as: "professional",
      },
    ],
  });
  res.json({ Reviews: reviewData });
});

router.get("/getProReview/:id", async (req, res) => {
  const Id = req.params.id;
  const reviewData = await Reviews.findAll({
    where: {
      ProfessionalId: Id,
    },
    include: [
      {
        model: User,
        as: "user",
      },
      {
        model: Professional,
        as: "professional",
      },
    ],
  });
  res.json({ Reviews: reviewData });
});

//End Review

//Login
router.post('/userLogin', async (req, res, next) => {
  const user = await User.findOne({ where: { Email: req.body.Email } });
  if (user) {
    password = req.body.Password;
    dbpass = user.Password
    if (password == dbpass) {
      res.status(200).json({ user });
    } else {
      res.status(400).json({ error: "Password Incorrect" });
    }
  } else {
    res.status(404).json({ error: "User does not exist" });
  }
});


module.exports = router;
