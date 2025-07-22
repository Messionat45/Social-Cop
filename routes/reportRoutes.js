const express = require("express");
const { report_data } = require("../controller/reportController");
const router = express.Router();
router.post("/report", report_data);

module.exports = router;
