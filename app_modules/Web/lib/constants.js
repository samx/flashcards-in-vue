

var constants = {
    NEXT_DISPLAY_TIME_DELAY_BIN:{ //based on Bin_id 2-12 not Bin_level 1-11
        1:5,
        2:25,
        3:120,
        4:600,
        5:3600,
        6:18000,
        7:86400,
        8:432000,
        9:2160000,
        10:13150000,
        11:0
    },

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


