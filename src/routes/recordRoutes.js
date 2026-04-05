const router = require("express").Router();
const ctrl = require("../controllers/recordController");
const auth = require("../middleware/auth");
const role = require("../middleware/roleMiddleware");

/**
 * @swagger
 * tags:
 *   name: Records
 */

router.post("/", auth, role("admin"), ctrl.createRecord);
router.get("/", auth, role("admin", "analyst"), ctrl.getRecords);
router.put("/:id", auth, role("admin"), ctrl.updateRecord);
router.delete("/:id", auth, role("admin"), ctrl.deleteRecord);

module.exports = router;