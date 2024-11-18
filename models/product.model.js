var slug = require("mongoose-slug-updater");
const mongoose = require("mongoose");
mongoose.plugin(slug);

const productSchema = new mongoose.Schema(
  {
    title: String, //Sản phẩm 1
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    slug: {
      type: String,
      slug: "title",
      unique: true,
    }, //San pham 1
    createdBy: {
      account_id: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    // deletedAt: Date,
    deletedBy: {
      account_id: String,
      deletedAt: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
