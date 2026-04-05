const Record = require("../models/Record");

// SUMMARY
exports.getSummary = async (req, res) => {
  const records = await Record.find({ user: req.user._id });

  let income = 0;
  let expense = 0;

  records.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
  });
};

// CATEGORY TOTALS
exports.categoryTotals = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { user: req.user._id } },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);

  res.json(data);
};

// MONTHLY TRENDS
exports.monthlyTrends = async (req, res) => {
  const data = await Record.aggregate([
    { $match: { user: req.user._id } },
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$amount" },
      },
    },
  ]);

  res.json(data);
};