require("dotenv").config();

const express = require("express");
const cors = require("cors")
const app = express()
const { routes } = require("./routes/Book-Routes");
const ProductRoute = require("./routes/Products-Routes")
app.use(express.json());
app.use(cors())
app.use("/api/books", routes); 
app.use("/api/products",ProductRoute)
const connectTodataBase = require("./dataBase/db");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("THE SERVER IS RUNNING");
});

connectTodataBase();
