const express = require("express");
const controllers = require("../controllers/General");
const router = new express.Router();
router.use(express.json());

router.post('/login', controllers.login)
router.post('/register', controllers.register)
router.get("/get_flight/:flightID", controllers.getFlight)
router.post('/requestResetPassword', controllers.resetPassword);
router.post('/resetPassword', controllers.changingForgottenPassword);


module.exports = router