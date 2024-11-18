const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/my-account.controller");
const uploadClound = require("../../middlewares/admin/uploadClound.middlewares");

router.get("/", controller.index);

router.get("/edit", controller.edit);

router.patch(
  "/edit",
  upload.single("avatar"),
  uploadClound.upload,
  controller.editUser
);

module.exports = router;
