const { Router } = require("express");
const router = Router();
const { searchGameApi } = require ("../controllers/searchGameApi");

router.get("/", searchGameApi)

module.exports = router;