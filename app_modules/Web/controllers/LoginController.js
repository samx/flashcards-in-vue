const constants = require('../lib/constants');
const passport = require('passport');
require('../lib/passport-strategies');
const { app } = require(__basedir + '/global/config');
const catchAsync = require("./catchAsync");

const { UserService } = require('../services');

exports.getLoggedInUser = catchAsync(async (req, res, next) => {
    let { user_id, username } = (req.session['passport'] && req.session['passport']['user']) 
    ? req.session['passport']['user'] :  req.user || { user_id: null };

    res.send({user_id, username})
});

exports.login = function (req, res, next) {
    return res.render('login', { 
        title: 'Flashy site', 
        message: 'Example Login Page', 
        user: JSON.stringify(req.user), 
        domain: app.webDomain 
    })
}

exports.logout = catchAsync(async (req, res, next) => {
    const { redirect = true, returnTo = null } = req.query;
    req.logout();

    if(redirect === true){
        if(returnTo) res.redirect(returnTo); //redirect to a user specific page
        else res.redirect('/');  //redirect to homepage
    }else
        res.send({ status:'success', message:'user logged out'})    
})

exports.isLogged = (req, res, next) => {
    res.send({ isLogged: req.isAuthenticated() })
}

const { uniqueNamesGenerator, adjectives, colors, animals, starWars  } = require('unique-names-generator');

exports.createTempUser = catchAsync(async (req, res, next) => {

    const username = uniqueNamesGenerator({ 
        dictionaries: [adjectives, colors, animals, starWars ],
        separator: ''
    }); 

    let result = await UserService.createUserService({
        username,
        provider_id:username,
        provider:'temp'
    });

    req.session['passport'] = {
        user:{
            user_id:result,
            username
        }
    };

    return res.send({ user_id:result, username})
})

exports.thirdPartyProviderDataFromSignIn = async function (req, access_token, refresh_token, profile, done) {
    let { provider, id: provider_id } = profile;
    
    //Find user
    let foundUser = await UserService.getUserByProviderIdService({ provider, provider_id });

    provider_id = provider_id.toString();

    let user_id = null;
    let username = null;

    //User not found in DB. Create new user and return user_id
    if (foundUser === false) {
        username = uniqueNamesGenerator({ 
            dictionaries: [adjectives, colors, animals, starWars ],
            separator: ''
        }); 

        let result = await UserService.createUserService({
            username,
            provider_id,
            provider
        });

        user_id = result;
    } else {
        user_id = foundUser.user_id;
        username = foundUser.username;
    }
	
    return done(null, Object.assign({}, req.user, { user_id, provider, username }));
}

// Google Sign in.
exports.googleSignInCompleted = async function (req, res) {   
    let { returnTo } = req.query;
    return res.render('userLoginComplete', { title: 'google', provider: 'google', user: req.user, domain: req.hostname, returnTo })
}

exports.googleGotoSignIn = function (req, res, next) {
    const { returnTo, magic_token } = req.query;

    const state = returnTo
        ? new Buffer(JSON.stringify({ returnTo,magic_token })).toString('base64')
        : undefined

    return passport.authenticate('google', {
        callbackURL: `${process.env.DEV_APP_WEB_DOMAIN ? 'http://' : 'https://'}${req.hostname}/${constants.GOOGLE.API_SIGNIN_CALLBACK_ROUTE}`,
        scope: ['email'],
        accessType: 'offline',
        state
    })(req, res, next);
}

exports.googleCallbackFromSignIn = function (req, res, next) {
    let urlBack;
    try {
        const { state } = req.query
        const { returnTo } = JSON.parse(new Buffer(state, 'base64').toString())

        urlBack =  "?returnTo="+returnTo;
        
    } catch (e) {
        // redirect normally below
    }
    return passport.authenticate('google', {
        callbackURL: `${process.env.DEV_APP_WEB_DOMAIN ? 'http://' : 'https://'}${req.hostname}/${constants.GOOGLE.API_SIGNIN_CALLBACK_ROUTE}`,
        successRedirect: constants.GOOGLE.SUCCESS_REDIRECT_ROUTE+"/" + urlBack
    })(req, res, next);
}

