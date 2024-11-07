const Product = require("../../models/product.model");

// [GET] /admin/dashboard
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  }).sort({ position: "desc" });

  products.forEach((item) => {
    item.priceNew = parseFloat(
      ((item.price * (100 - item.discountPercentage)) / 100).toFixed(2)
    );
  });

  res.render("client/pages/products/index.pug", {
    pageTitle: "Trang sản phẩm",
    products: products,
  });
};

// [GET] /admin/:slug
module.exports.detail = async (req, res) => {
  const slug = req.params.slug;
  const product = await Product.findOne({
    status: "active",
    deleted: false,
    slug: slug,
  });
  res.render("client/pages/products/detail.pug", {
    pageTitle: "Chi tiết sản phẩm",
    product: product,
  });
};
