const express = require("express");
const multer = require("multer");
const router = express.Router();
const upload = multer();

const validate = require("../../validates/admin/product-category.validate");
const controller = require("../../controllers/admin/product-category.controller");
const uploadClound = require("../../middlewares/admin/uploadClound.middlewares");

router.get("/", controller.index);

router.get("/create", controller.create);

// middleware
router.post(
  "/create",
  upload.single("thumbnail"),
  uploadClound.upload,
  validate.createPost,
  controller.createPost
);

module.exports = router;
