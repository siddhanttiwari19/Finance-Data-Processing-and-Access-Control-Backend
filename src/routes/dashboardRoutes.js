const router = require("express").Router();
const ctrl = require("../controllers/dashboardController");
const auth = require("../middleware/auth");

/**
 * @swagger
 * tags:
 *   name: Dashboard
 */

router.get("/summary", auth, ctrl.getSummary);
router.get("/category", auth, ctrl.categoryTotals);
router.get("/monthly", auth, ctrl.monthlyTrends);

module.exports = router;