require('dotenv').config();
const development = {
    app: {
        webDomain: process.env.DEV_APP_WEB_DOMAIN || 'localhost:3000',
        port: parseInt(process.env.DEV_APP_PORT) || 3000,
    },
    postgres: {
        hostName: process.env.DEV_POSTGRES_HOST_NAME || null,
        port: process.env.DEV_POSTGRES_PORT || 5432,
        username: process.env.DEV_POSTGRES_USERNAME || null,
        password: process.env.DEV_POSTGRES_PASSWORD || null,
        database: process.env.DEV_POSTGRES_DATABASE || null,
    },
    redis: {
        host: process.env.DEV_REDIS_HOST || '127.0.0.1',
        port: process.env.DEV_REDIS_PORT || 6379,
        pass: process.env.DEV_REDIS_PASS ||false,
        auth_pass: process.env.DEV_REDIS_AUTH_PASS || false
    },
    googleStrategy: {
        clientID: process.env.DEV_GOOGLE_STRATEGY_CLIENT_ID,
        clientSecret: process.env.DEV_GOOGLE_STRATEGY_CLIENT_SECRET
    }
};


const production = {
    app: {
        webDomain: process.env.PROD_APP_WEB_DOMAIN,
        port: parseInt(process.env.PROD_APP_PORT) || 3000,
    },
    postgres: {
        hostName: process.env.PROD_POSTGRES_HOST_NAME || null,
        port: process.env.PROD_POSTGRES_PORT || 5432,
        username: process.env.PROD_POSTGRES_USERNAME || null,
        password: process.env.PROD_POSTGRES_PASSWORD || null,
        database: process.env.PROD_POSTGRES_DATABASE || null,
    },
    redis: {
        host: process.env.PROD_REDIS_HOST,
        port: process.env.PROD_REDIS_PORT,
        pass: process.env.PROD_REDIS_PASS,
        auth_pass: process.env.PROD_REDIS_AUTH_PASS,
        no_ready_check: true

    },
    googleStrategy: {
        clientID: process.env.PROD_GOOGLE_STRATEGY_CLIENT_ID,
        clientSecret: process.env.PROD_GOOGLE_STRATEGY_CLIENT_SECRET
    }
};

const config = {
    development,
    production
};

let deployENV = (process.env.DEPLOY_ENV)? process.env.DEPLOY_ENV : "production";

module.exports = config[deployENV]