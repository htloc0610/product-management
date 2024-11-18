const Accounts = require("../../models/account.model");
const systemConfig = require("../../config/system");
const md5 = require("md5");
const { use } = require("../../routers/admin/dashboard.router");

// [GET] /admin/auth/login
module.exports.index = async (req, res) => {
  if (req.cookies.token) {
    res.redirect(`${systemConfig.prefixAdmin}/dashboard`);
  } else {
    res.render("admin/pages/auth/login.pug");
  }
};

// [POST] /admin/auth/login
module.exports.loginPost = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await Accounts.findOne({
    email: email,
    deleted: false,
  });

  if (!user) {
    req.flash("error", "Không tồn tại email vừa nhập");
    res.redirect("back");
    // Phải có return
    return;
  }

  if (md5(password) != user.password) {
    req.flash("error", "Sai mật khẩu");
    res.redirect("back");
    return;
  }

  if (user.status != "active") {
    req.flash("error", "Tài khoản đã bị khoá");
    res.redirect("back");
    return;
  }
  res.cookie("token", user.token);
  res.redirect(`${systemConfig.prefixAdmin}/dashboard`);
};

// [GET] /admin/auth/logout
module.exports.logout = (req, res) => {
  // Xoá token
  res.clearCookie("token");
  res.redirect(`${systemConfig.prefixAdmin}/auth/login`);
};
