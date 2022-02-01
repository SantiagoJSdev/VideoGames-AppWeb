const { Router } = require("express");
const router = Router();
const { getAllGender } = require("../controllers/getAllGender");

router.get("/", getAllGender)

module.exports = router;