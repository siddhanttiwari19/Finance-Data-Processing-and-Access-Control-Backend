const Record = require("../models/Record");

// Summary
exports.getSummary = async (req, res) => {
  const records = await Record.find();

  let income = 0, expense = 0;

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

// Category wise
exports.categoryTotals = async (req, res) => {
  const data = await Record.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    }
  ]);

  res.json(data);
};

// Monthly trends
exports.monthlyTrends = async (req, res) => {
  const data = await Record.aggregate([
    {
      $group: {
        _id: { $month: "$date" },
        total: { $sum: "$amount" }
      }
    }
  ]);

  res.json(data);
};