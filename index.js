const express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var path = require("path");
var session = require("express-session");
var flash = require("express-flash");
var methodOverride = require("method-override");
var moment = require("moment");
const http = require("http");
require("dotenv").config();

const router = require("./routers/client/index.router");
const routerAdmin = require("./routers/admin/index.router");

const database = require("./config/database");

const systemConfig = require("./config/system");

database.connect();

const app = express();
const port = process.env.PORT;

// Socket io
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// Biến toàn cục
global._io = io;
// End socket

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

// Flash
app.use(cookieParser("keyboard cat"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash

// TinyMCE
app.use(
  "/tinymce",
  express.static(path.join(__dirname, "node_modules", "tinymce"))
);

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// App Locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.locals.moment = moment;

// Nhúng file tĩnh do backend không show -> phải có lệnh này
app.use(express.static(`${__dirname}/public`));

// Router
router(app);
routerAdmin(app);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
