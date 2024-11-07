const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var methodOverride = require("method-override");
require("dotenv").config();

const router = require("./routers/client/index.router");
const routerAdmin = require("./routers/admin/index.router");

const database = require("./config/database");

const systemConfig = require("./config/system");

database.connect();

const app = express();
const port = process.env.PORT;

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

// Flash
app.use(cookieParser("keyboard cat"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Nhúng file tĩnh do backend không show -> phải có lệnh này
app.use(express.static(`${__dirname}/public`));

// Router
router(app);
routerAdmin(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
