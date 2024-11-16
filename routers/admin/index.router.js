const dashboardRouters = require("./dashboard.router");
const productRouters = require("./product.router");
const roleRouters = require("./role.router");
const productsCategoryRouters = require("./products-category.router");
const accountsRouters = require("./accounts.router");
const authRouters = require("./auth.router");
const systemConfig = require("../../config/system");

module.exports = (app) => {
  // Tại vì có nhiều phương thức get put post
  app.use(systemConfig.prefixAdmin + "/dashboard", dashboardRouters);
  app.use(systemConfig.prefixAdmin + "/products", productRouters);
  app.use(
    systemConfig.prefixAdmin + "/products-category",
    productsCategoryRouters
  );
  app.use(systemConfig.prefixAdmin + "/roles", roleRouters);
  app.use(systemConfig.prefixAdmin + "/accounts", accountsRouters);
  app.use(systemConfig.prefixAdmin + "/auth", authRouters);
};
