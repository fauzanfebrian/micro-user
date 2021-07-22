const { RefreshToken } = require("../../models");

module.exports = async (req, res) => {
  const refreshToken = req.query.refresh_token;

  if (typeof refreshToken !== "string") {
    return res.status(404).json({
      status: "error",
      message: "token undefined",
    });
  }

  const token = await RefreshToken.findOne({
    where: { token: refreshToken },
  });
  if (!token) {
    return res.status(404).json({
      status: "error",
      message: "invalid token",
    });
  }

  return res.json({
    status: "succes",
    token,
  });
};
