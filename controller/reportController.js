const mongoose = require("mongoose");
const complaint = require("../models/reportModel");
const report_data = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);

    const complaintData = {
      incidentDescription: data.incidentDescription,
      incidentPlace: data.incidentPlace,
      victimName: data.victimName,
      victimEmail: data.victimEmail.toLowerCase(),
      victimPhoneNo: data.victimPhoneNo,
      incidentDate: data.incidentDate,
      imageProoof: data.imageProoof,
      incidentSeverity: data.incidentSeverity,
    };

    if (!data) return res.status(404).send("no data to send");

    const dbData = await complaint.create(complaintData);
    console.log(dbData);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("some server issue");
  }
};

module.exports = { report_data };
