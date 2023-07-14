const express = require('express');
const controllers = require("../controllers");
const { ensureAuthenticated } = require(__basedir + '/global/helpers');

const router = express.Router();

const {
  LoginController,
  BinController,
  CardController
} = controllers;

//Login
router.get('/user', LoginController.getLoggedInUser);
router.get('/login', LoginController.login);
router.get('/logout', LoginController.logout);
router.get('/isLogged', LoginController.isLogged);

// TempUser - signin
router.get("/user/temp", LoginController.createTempUser);

// Google - Signin
router.get("/auth/google", LoginController.googleGotoSignIn);
router.get("/auth/google/callback", LoginController.googleCallbackFromSignIn);
router.get("/google-sign-in-complete", LoginController.googleSignInCompleted);


// Bins
router.get("/bins", BinController.getTotalCardsInBinsByUserId);
router.get("/bin/:bin_id", BinController.getCardsInBinByUserId);

// Cards
router.post("/card/:card_id/answer", CardController.cardAnswer);
router.post("/card", CardController.createNewFlashCard);
router.get("/card", CardController.drawCard);

module.exports = router;