const { Router } = require("express");
const router = Router();
const getAllHistory = require("../controllers/historyController");

router.route("/").get(getAllHistory);

module.exports = router;
