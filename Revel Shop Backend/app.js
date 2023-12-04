const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/productRoute");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });
app.use(express.json());
app.use("/api", router);

// connection to mongoose
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB successfully Connected to Database"));

const port = 3000;

app.listen(port, () => console.log("App is listening to port 3000"));
