require("dotenv").config();

var express = require("express");
var app = express()
var { routes } = require("./routes/Book-Routes");

app.use(express.json());
app.use("/api/books", routes); 

const connectTodataBase = require("./dataBase/db");

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log("THE SERVER IS RUNNING");
});

connectTodataBase();
