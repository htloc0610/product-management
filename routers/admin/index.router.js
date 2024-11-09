const dashboardRouters = require("./dashboard.router");
const productRouters = require("./product.router");
const productsCategoryRouters = require("./products-category.router");
const systemConfig = require("../../config/system");

module.exports = (app) => {
  // Tại vì có nhiều phương thức get put post
  app.use(systemConfig.prefixAdmin + "/dashboard", dashboardRouters);
  app.use(systemConfig.prefixAdmin + "/products", productRouters);
  app.use(
    systemConfig.prefixAdmin + "/products-category",
    productsCategoryRouters
  );
};
