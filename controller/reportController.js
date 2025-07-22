const report_data = (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    if (!data) return res.status(404).send("no data to send");
    // console.log(data);
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send("some server issue");
  }
};

module.exports = { report_data };
