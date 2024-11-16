const Accounts = require("../../models/account.model");
const Role = require("../../models/role.model");
const systemConfig = require("../../config/system");
const md5 = require("md5");

// [GET] /admin/accounts
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };

  const records = await Accounts.find(find).select("-password -token");

  for (const record of records) {
    const role = await Role.findOne({ deleted: false, _id: record.role_id });
    record.role = role.title;
  }

  res.render("admin/pages/accounts/index.pug", {
    records: records,
  });
};

// [GET] /admin/accounts/create
module.exports.create = async (req, res) => {
  const find = {
    deleted: false,
  };
  const records = await Role.find(find);
  res.render("admin/pages/accounts/create.pug", {
    records: records,
  });
};

// [POST] /admin/accounts/create
module.exports.createAccount = async (req, res) => {
  if (req.body.password) {
    req.body.password = md5(req.body.password.toString());
  }
  const account = new Accounts(req.body);
  await account.save();
  res.redirect(`${systemConfig.prefixAdmin}/accounts`);
};
