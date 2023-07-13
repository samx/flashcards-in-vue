'use strict';
global.__basedir = __dirname;
const http = require('http');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars-multi');
const bodyParser = require("body-parser");

const { Nuxt, Builder } = require('nuxt');
const cookieParser = require("cookie-parser");
const passport = require("passport");

// APP config
const config = require('./global/config');

// Redis setup
const redis = require('redis');
const session = require('express-session');
const RedisStore = require("connect-redis")(session);
const client = redis.createClient(config.redis);

if (config.redis.pass) client.auth(config.redis.pass);

// App Initialization
const app = express();
const store = new RedisStore({ client });

// Session.
const sessionPaths = ['/api'];
app.use(sessionPaths, cookieParser());
app.use(sessionPaths, session({
    store,
    name: 'connect.sid',
    secret: 'jack jumped over the small white fence',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10512000000 //4 months
    }
}));

// Passport.
app.use(sessionPaths, passport.initialize());
app.use(sessionPaths, passport.session());

//===============================

const serverHelpers = require('./global/helpers/server');
const { errorHandler } = require('./global/helpers/controllerHandler');
const AppError = require('./global/helpers/AppError');

const logger = require('morgan');

// Logging.
app.use(logger('dev'));

app.use(bodyParser.json({
    limit: '50mb'
}));


// View Engine (HandleBars).
app.engine('.hbs', exphbs({ ext: '.hbs' }));
app.set('view engine', '.hbs');

async function start() {
    //nuxt config
    const nuxtConfig = require('./nuxt.config.js')
    nuxtConfig.dev = process.env.NODE_ENV !== 'production'

    // Init Nuxt.js
    const nuxt = new Nuxt(nuxtConfig)
    await nuxt.ready()

    // Build only in dev mode
    if (nuxtConfig.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    // API Routes
    app.use('/api/web', require('./app_modules/Web/routes'));

    //API Routes Not Found
    app.all('/api/*', (req, res, next) => {
        next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
    });

    // API Controller Error Handler
    app.use(errorHandler);

    app.set('views', path.join(__dirname, 'app_modules/Web/views'))

    // NUXT MIDDLEWARE
    app.use((req, res, next)=> nuxt.render(req, res, next))

    // Set Port
    const port = serverHelpers.normalizePort(config.app.port);
    app.set('port', port);
    app.set('trust proxy', true);

    // Start Server
    const server = http.createServer(app);
    server.listen(port);
    server.on('error', serverHelpers.onError);
    server.on('listening', serverHelpers.onListening.bind({ server: server }));
}
// Build Nuxt App And Start server
start();

// Handle unexpected Errors
process.on('unhandledRejection', err => {
    if (process.env.NODE_ENV === "production") 
        console.log("Prod: Send log to internal or external server")
    else 
        console.log("Dev: unhandledRejection", err)
});

process.on('uncaughtException', err => {
    if (process.env.NODE_ENV === "production") 
        console.log("Prod: Send log to internal or external server")
     else 
        console.log("dev: uncaughtException", err)    
});