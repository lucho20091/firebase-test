const express = require("express");
const router = express.Router();
const test_controller = require("../controllers/test_controller");

router.get("/", test_controller.test_get);

module.exports = router;
