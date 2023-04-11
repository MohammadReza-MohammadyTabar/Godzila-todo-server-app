const { Router } = require("express");
const router = Router();
const {
  getAllLanguages,
  addLanguage,
} = require("../controllers/languageController");

router.route("/").get(getAllLanguages).post(addLanguage);

module.exports = router;
