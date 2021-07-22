const express = require("express");
const refreshToken = require("../controllers/refresh-tokens");
const router = express.Router();

router.post("/", refreshToken.create);
router.get("/", refreshToken.getToken);

module.exports = router;
