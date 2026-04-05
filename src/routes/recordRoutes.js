const router = require("express").Router();
const ctrl = require("../controllers/recordController");
const auth = require("../middleware/auth");
const role = require("../middleware/roleMiddleware");

/**
 * @swagger
 * tags:
 *   name: Records
 *   description: Financial records APIs
 */

/**
 * @swagger
 * /api/records:
 *   post:
 *     summary: Create a financial record (Admin only)
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               type:
 *                 type: string
 *                 example: income
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Record created
 */
router.post("/", auth, role("admin"), ctrl.createRecord);

/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get all records (Admin & Analyst)
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of records
 */
router.get("/", auth, role("admin", "analyst"), ctrl.getRecords);

/**
 * @swagger
 * /api/records/{id}:
 *   put:
 *     summary: Update record (Admin only)
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record updated
 */
router.put("/:id", auth, role("admin"), ctrl.updateRecord);

/**
 * @swagger
 * /api/records/{id}:
 *   delete:
 *     summary: Delete record (Admin only)
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Record deleted
 */
router.delete("/:id", auth, role("admin"), ctrl.deleteRecord);

module.exports = router;