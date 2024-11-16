const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();
const controller = require("../../controllers/admin/accounts.controller");
const uploadClound = require("../../middlewares/admin/uploadClound.middlewares");

router.get("/", controller.index);

router.get("/create", controller.create);

// middleware
router.post(
  "/create",
  upload.single("avatar"),
  uploadClound.upload,
  controller.createAccount
);

module.exports = router;
