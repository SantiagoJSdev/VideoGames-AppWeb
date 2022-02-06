const { Router } = require("express");
const router = Router();
const { getAllPlatform } = require ("../controllers/getAllPlatform");

router.get("/", getAllPlatform)

module.exports = router;