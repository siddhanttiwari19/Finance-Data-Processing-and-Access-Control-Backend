const router = require("express").Router();
const ctrl = require("../controllers/dashboardController");
const auth = require("../middleware/auth");
const role = require("../middleware/roleMiddleware"); // ✅ ADD THIS

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard analytics APIs
 */

/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get overall financial summary
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary data (income, expense, balance)
 */
router.get(
  "/summary",
  auth,
  role("admin", "analyst", "viewer"), // ✅ ALL ROLES
  ctrl.getSummary
);

/**
 * @swagger
 * /api/dashboard/category:
 *   get:
 *     summary: Get category-wise totals
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Category-wise totals
 */
router.get(
  "/category",
  auth,
  role("admin", "analyst"), // ❌ viewer not allowed
  ctrl.categoryTotals
);

/**
 * @swagger
 * /api/dashboard/monthly:
 *   get:
 *     summary: Get monthly trends
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly income/expense trends
 */
router.get(
  "/monthly",
  auth,
  role("admin", "analyst"), // ❌ viewer not allowed
  ctrl.monthlyTrends
);

module.exports = router;