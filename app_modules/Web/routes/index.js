const express = require('express');
const controllers = require("../controllers");
const { ensureAuthenticated } = require(__basedir + '/global/helpers');

const router = express.Router();

const {
  ExampleController,
  LoginController
} = controllers;

router.get('/helloWorld', ExampleController.helloWorld);

//Login
router.get('/login', LoginController.login);
router.get('/logout', LoginController.logout);
router.get('/isLogged', LoginController.isLogged);

// Google - Signin
router.get("/auth/google", LoginController.googleGotoSignIn);
router.get("/auth/google/callback", LoginController.googleCallbackFromSignIn);
router.get("/google-sign-in-complete", LoginController.googleSignInCompleted);

module.exports = router;