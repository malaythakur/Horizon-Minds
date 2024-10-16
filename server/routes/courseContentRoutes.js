const express = require("express");
const router = express.Router();
const courseContentController = require("../controllers/courseContentController");
const authenticateToken = require("../middlewares/authenticateToken");
router.get("/:id", authenticateToken, courseContentController.getCourseContent);

module.exports = router;