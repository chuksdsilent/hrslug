const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require('cors');
app.use(express.json({ extended: false }));
const {readdirSync} = require("fs");


app.use(cors());
app.get('/', (req, res) =>
    res.json({ msg: 'all Messages'})
)

connectDB()

app.use("/api/register", require('./routes/users'));
app.use("/api/auth", require('./routes/auth'));
app.use("/api/product", require('./routes/Products'));
app.use("/api/customers", require('./routes/Customers'));
app.use("/api/suppliers", require('./routes/Suppliers'));



const port = process.env.PORT || 5200;

app.listen(port, "127.0.0.1" ||  "192.168.201.33", () => console.log(`Server started at ${port}`));