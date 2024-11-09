// [GET] /admin/products-category
module.exports.index = (req, res) => {
  res.render("admin/pages/products-category/index.pug");
};

// [GET] /admin/products-category/create
module.exports.create = (req, res) => {
  res.render("admin/pages/products-category/create.pug");
};
