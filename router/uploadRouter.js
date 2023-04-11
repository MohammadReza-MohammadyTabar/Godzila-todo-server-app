const { Router } = require("express");
const router = Router();
const uploadUserImage = require("../controllers/uploadImage");

router.route("/").post(uploadUserImage);

module.exports = router;
