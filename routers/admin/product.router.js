const express = require("express");
const multer = require("multer");

const router = express.Router();
// const storageMulter = require("../../helpers/storageMulter");

const upload = multer();

const validate = require("../../validates/admin/product.validate");
const controller = require("../../controllers/admin/product.controller");

const uploadClound = require("../../middlewares/admin/uploadClound.middlewares");

router.get("/", controller.index);

router.patch("/change-status/:status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.get("/create", controller.create);

// middleware
router.post(
  "/create",
  upload.single("thumbnail"),
  uploadClound.upload,
  validate.createPost,
  controller.createPost
);

router.delete("/delete/:id", controller.deleteItem);

router.get("/edit/:id", controller.edit);

router.patch("/edit/:id", controller.editPatch);

router.get("/detail/:id", controller.detail);

module.exports = router;
