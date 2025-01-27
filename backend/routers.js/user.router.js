const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const userController = require('../controllers/user.controller');

router = express.router()
router.use(verifyToken)

router.post("/auth/register", userController.register);
router.post("/auth/login", userController.login);
router.get("profile/:id", userController.getUser);

module.exports = router
