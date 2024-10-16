const express = require("express");
const storePurchaseController  = require("../controllers/storePurchaseController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.post('/store-purchase', authenticateToken, storePurchaseController.storePurchase);

module.exports = router;