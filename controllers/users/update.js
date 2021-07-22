const bcrypt = require("bcrypt");
const Validator = require("fastest-validator");
const { User } = require("../../models");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const { email, name, profession, avatar } = req.body;
  const schema = {
    name: "string|empty:false",
    email: "email|empty:false",
    password: "string|min:6",
    profession: "string|optional",
    avatar: "string|optional",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await User.findByPk(id);
  if (!user) {
    res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  if (email) {
    const checkEmail = await User.findOne({ where: { email } });
    if (checkEmail && email !== user.email) {
      return res.status(409).json({
        status: "error",
        message: "email already exist",
      });
    }
  }

  const password = await bcrypt.hash(req.body.password, 10);

  await user.update({ name, email, password, avatar, profession });

  res.json({
    status: "success",
    data: { name, email, avatar, profession },
  });
};
