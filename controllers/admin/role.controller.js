const Role = require("../../models/role.model");
const systemConfig = require("../../config/system");

// [GET] /admin/roles
module.exports.index = async (req, res) => {
  let find = {
    deleted: false,
  };

  const records = await Role.find(find);

  res.render("admin/pages/roles/index.pug", {
    records: records,
  });
};

// [GET] /admin/roles/create
module.exports.create = (req, res) => {
  res.render("admin/pages/roles/create.pug");
};

// [POST] /admin/roles/create
module.exports.createRole = (req, res) => {
  if (req.body) {
    const newRole = new Role(req.body);
    newRole.save();
  }
  console.log("WTF");

  res.redirect(`${systemConfig.prefixAdmin}/roles`);
};

// [GET] /admin/roles/permissions
module.exports.permissions = async (req, res) => {
  let find = {
    deleted: false,
  };

  const records = await Role.find(find);

  res.render("admin/pages/roles/permission.pug", {
    records: records,
  });
};

// [PATCH] /admin/roles/permissions
module.exports.addPermissions = async (req, res) => {
  if (req.body.permissions) {
    const permissions = JSON.parse(req.body.permissions);
    for (const item of permissions) {
      await Role.updateOne({ _id: item.id }, { permissions: item.permissions });
    }
    req.flash("success", "Cập nhật quyền thành công");
  }
  res.redirect("back");
};
