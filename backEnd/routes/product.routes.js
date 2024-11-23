const express = require("express");
const router = express.Router();
const { addDescription } = require("../controllers/product.controller");

router.post("/description", addDescription);

module.exports = router;
