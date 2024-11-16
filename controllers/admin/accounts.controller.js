const Accounts = require("../../models/account.model");
const systemConfig = require("../../config/system");

// [GET] /admin/accounts
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };

  const records = await Accounts.find(find);

  res.render("admin/pages/accounts/index.pug", {
    records: records,
  });
};

// [GET] /admin/accounts/create
module.exports.create = (req, res) => {
  res.render("admin/pages/accounts/create.pug");
};

// [POST] /admin/accounts/create
module.exports.createAccount = async (req, res) => {
  const account = new Accounts(req.body);
  await account.save();
  res.redirect(`${systemConfig.prefixAdmin}/accounts`);
};
