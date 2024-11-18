const dashboardRouters = require("./dashboard.router");
const productRouters = require("./product.router");
const roleRouters = require("./role.router");
const productsCategoryRouters = require("./products-category.router");
const accountsRouters = require("./accounts.router");
const authRouters = require("./auth.router");
const myAccountRouters = require("./my-account.router");
const systemConfig = require("../../config/system");

const authMiddleWare = require("../../middlewares/admin/auth.middleware");

module.exports = (app) => {
  // Tại vì có nhiều phương thức get put post
  app.use(
    systemConfig.prefixAdmin + "/dashboard",
    authMiddleWare.requireAuth,
    dashboardRouters
  );
  app.use(
    systemConfig.prefixAdmin + "/products",
    authMiddleWare.requireAuth,
    productRouters
  );
  app.use(
    systemConfig.prefixAdmin + "/products-category",
    authMiddleWare.requireAuth,
    productsCategoryRouters
  );
  app.use(
    systemConfig.prefixAdmin + "/roles",
    authMiddleWare.requireAuth,
    roleRouters
  );
  app.use(
    systemConfig.prefixAdmin + "/accounts",
    authMiddleWare.requireAuth,
    accountsRouters
  );

  app.use(
    systemConfig.prefixAdmin + "/my-account",
    authMiddleWare.requireAuth,
    myAccountRouters
  );
  app.use(systemConfig.prefixAdmin + "/auth", authRouters);
};
