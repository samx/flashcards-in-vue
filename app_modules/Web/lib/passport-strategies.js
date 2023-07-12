const passport = require('passport');
const googleStrategy = require('passport-google-oauth2').Strategy;
const config = require(__basedir + '/global/config');
const constants = require('../lib/constants');

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

//Google Strategy .
passport.use(new googleStrategy({
    clientID: config.googleStrategy.clientID,
    clientSecret: config.googleStrategy.clientSecret,
    passReqToCallback: true,
    accessType: constants.GOOGLE.API_SIGNIN_ACCESS_TYPE
}, function (req, accessToken, refreshToken, profile, done) {
    require('../controllers/LoginController').thirdPartyProviderDataFromSignIn(req, accessToken, refreshToken, profile, done)
}));

module.export = passport;