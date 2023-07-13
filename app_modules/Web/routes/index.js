const express = require('express');
const controllers = require("../controllers");
const { ensureAuthenticated } = require(__basedir + '/global/helpers');

const router = express.Router();

const {
  LoginController,
  BinController
} = controllers;

//Login
router.get('/login', LoginController.login);
router.get('/logout', LoginController.logout);
router.get('/isLogged', LoginController.isLogged);

// Google - Signin
router.get("/auth/google", LoginController.googleGotoSignIn);
router.get("/auth/google/callback", LoginController.googleCallbackFromSignIn);
router.get("/google-sign-in-complete", LoginController.googleSignInCompleted);


// 
router.get("/bins", BinController.getTotalCardsInBinsByUserId);
router.get("/bin/:bin_id", BinController.getCardsInBinByUserId);
module.exports = router;