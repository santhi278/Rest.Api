require("dotenv").config();

var express = require("express");
var cors = require("cors")
var app = express()
var { routes } = require("./routes/Book-Routes");
var ProductRoute = require("./routes/Products-Routes")
app.use(express.json());
app.use(cors())
app.use("/api/books", routes); 
app.use("/api/products",ProductRoute)
const connectTodataBase = require("./dataBase/db");

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log("THE SERVER IS RUNNING");
});

connectTodataBase();
