const productRouters = require("./products.router");
const homeRouters = require("./home.router");
const chatRouters = require("./chat.router");

module.exports = (app) => {
  app.use("/", homeRouters);

  app.use("/products", productRouters);

  app.use("/chat", chatRouters);
};
