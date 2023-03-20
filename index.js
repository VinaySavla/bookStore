const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const store = new session.MemoryStore();
const PORT = 3001;

app.use(session({
  secret: "some secret",
  cookie: { maxAge: 60000 },
  saveUninitialized: false,
  store
}))

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: function (origin, callback) {
    return callback(null, true);
  }
}));

const db = require("./models");


//Foreign Keys

// //One to Many
db.OrderStatus.hasMany(db.Orders, { foreignKey: 'OrderId', as: 'orderStatus' });
db.Orders.belongsTo(db.OrderStatus, { foreignKey: 'orderId', as: 'order' });

db.User.hasMany(db.Orders, { foreignKey: 'UserId', as: 'user' });
db.Orders.belongsTo(db.User, { foreignKey: 'UserId', as: 'order' });

db.User.hasMany(db.Cart, { foreignKey: 'UserId', as: 'user' });
db.Cart.belongsTo(db.User, { foreignKey: 'UserId', as: 'cart' });

//Many to Many
Authors.belongsToMany(Books, { through: 'BookAuthor' });
Books.belongsToMany(Authors, { through: 'BookAuthor' });

Publishers.belongsToMany(Books, { through: 'BookPublisher' });
Books.belongsToMany(Publishers, { through: 'BookPublisher' });

Orders.belongsToMany(Books, { through: 'OrderBook' });
Books.belongsToMany(Orders, { through: 'OrderBook' });

Cart.belongsToMany(Books, { through: 'CartBook' });
Books.belongsToMany(Cart, { through: 'CartBook' });

// Routers
const bookStore = require("./routes/bookStore");
app.use("/bookStore", bookStore);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
});
