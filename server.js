const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const env = require("dotenv").config();
connectDb();
const app = express();
const contactRoute = require("./routes/contactRoute")

const port = process.env.PORT;
// middleware
app.use(express.json())
app.use("/api/contacts", contactRoute);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
