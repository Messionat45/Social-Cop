require("dotenv").config();
const cors = require("cors");
const express = require("express");

const reportRoutes = require("./routes/reportRoutes");
const dbConnect = require("./db");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(reportRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

dbConnect();

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
