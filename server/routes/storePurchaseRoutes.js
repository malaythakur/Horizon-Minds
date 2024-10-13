const express = require("express");
const storePurchaseRoutes  = require("../controllers/storePurchaseController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.post('/store-purchase', authenticateToken, storePurchaseRoutes.storePurchase);

module.exports = router;