const Users = require("../models/userModel");

const authAdmin = async (req, res, next) => {
  try {
    //find user information by id
    const user = await Users.findOne({
      _id: req.user.id,
    });
    if (user.role === 0)
      return res.status(400).json({ msg: "Admin resources access denied" });

    next();
  } catch (err) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = authAdmin;
