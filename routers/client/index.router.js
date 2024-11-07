const productRouters = require("./products.router");
const homeRouters = require("./home.router");

module.exports = (app) => {
  app.use("/", homeRouters);

  app.use("/products", productRouters);
};
