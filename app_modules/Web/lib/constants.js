

var constants = {
    GOOGLE: {
        API_SIGNIN_CALLBACK_ROUTE: 'api/web/auth/google/callback',
        API_SIGNIN_ACCESS_TYPE: 'offline',
        API_SIGNIN_PASS_REQ_TO_CALLBACK: false,
        SUCCESS_REDIRECT_ROUTE: '../../google-sign-in-complete'
    },
    TWITTER: {
        API_SIGNIN_CALLBACK_ROUTE: 'api/web/auth/twitter/callback',
        SUCCESS_REDIRECT_ROUTE: '../../twitter-sign-in-complete'
    }
}
module.exports = constants;


