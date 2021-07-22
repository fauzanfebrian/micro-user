const express = require("express");
const router = express.Router();
const Users = require("../controllers/users");

router.get("/", Users.getUsers);
router.put("/:id", Users.update);
router.get("/:id", Users.getUser);
router.post("/login", Users.login);
router.post("/logout", Users.logout);
router.post("/register", Users.register);

module.exports = router;
