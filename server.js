const express = require("express");
const cors = require("cors");
const reportRoutes = require("./routes/reportRoutes");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(reportRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
