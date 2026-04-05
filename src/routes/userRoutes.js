const router = require("express").Router();
const ctrl = require("../controllers/userController");
const auth = require("../middleware/auth");
const role = require("../middleware/roleMiddleware");

/**
 * @swagger
 * tags:
 *   name: Users
 */

router.post("/register", ctrl.createUser);
router.post("/login", ctrl.loginUser);

// Admin routes
router.get("/", auth, role("admin"), async (req, res) => {
  const User = require("../models/User");
  const users = await User.find().select("-password");
  res.json(users);
});

router.put("/:id", auth, role("admin"), async (req, res) => {
  const User = require("../models/User");
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
  res.json(updated);
});

router.delete("/:id", auth, role("admin"), async (req, res) => {
  const User = require("../models/User");
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;