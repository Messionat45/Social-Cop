const mongoose = require("mongoose");

const complaintSchemna = new mongoose.Schema(
  {
    incidentDescription: {
      type: String,
      required: true,
    },
    incidentPlace: {
      type: String,
      required: true,
    },
    victimName: {
      type: String,
      required: true,
    },
    victimEmail: {
      type: String,
      required: true,
      match: /.+\@.+\..+/, // basic email format validation
    },
    victimPhoneNo: {
      type: String,
      required: true,
    },
    incidentDate: {
      type: Date,
      default: Date.now,
    },
    imageProoof: {
      type: String,
      default: "",
    },
    incidentSeverity: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },

    complaintStatus: {
      type: String,
      enum: [
        "pending",
        "under review",
        "accepted",
        "rejected",
        "in progress",
        "resolved",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

const complaint = mongoose.model("complaint", complaintSchemna);

module.exports = complaint;
