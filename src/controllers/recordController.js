const Record = require("../models/Record");

// Create
exports.createRecord = async (req, res) => {
  const record = await Record.create(req.body);
  res.json(record);
};

// Get with filters
exports.getRecords = async (req, res) => {
  const { type, category } = req.query;

  let filter = {};
  if (type) filter.type = type;
  if (category) filter.category = category;

  const records = await Record.find(filter);
  res.json(records);
};

// Update
exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

// Delete
exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};