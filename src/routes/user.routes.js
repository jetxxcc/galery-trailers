const { Router } = require("express");
const router = Router();

const {
  renderSingUpForm,
  singup,
  renderLogInForm,
  login,
  logout,
} = require("../controllers/user.controller");

router.get("/user/singup", renderSingUpForm);

router.post("/user/singup", singup);

router.get("/user/login", renderLogInForm);

router.post("/user/login", login);

router.get("/user/logut", logout);

module.exports = router;
