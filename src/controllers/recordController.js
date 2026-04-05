const Record = require("../models/Record");

// CREATE
exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    user: req.user._id,
  });
  res.status(201).json(record);
};

// GET ALL WITH FILTER
exports.getRecords = async (req, res) => {
  const { type, category, startDate, endDate } = req.query;

  let filter = { user: req.user._id };

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  const records = await Record.find(filter);
  res.json(records);
};

// UPDATE
exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(record);
};

// DELETE
exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Record deleted" });
};