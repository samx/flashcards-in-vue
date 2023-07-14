
const config = require('./global/config');

module.exports = {
  debug: true,
  telemetry: false,
  mode: 'universal',
  target: 'server',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  axios: {
    withCredentials: true,
    baseURL: process.env.APP_WEB_DOMAIN,
    credentials: true,
  },
  /*
  ** Auth strategies
  */
  auth: {
    plugins: ['@plugins/axios.js'], // This ensures that we can set cookies from API
    cookie: {
      options: {
        expires: new Date(new Date().getTime() + 20000000000).getTime(), //thats today + a year
        maxAge: 31622400
      }
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/filters.js',
  ],
  router: {
    middleware: ['ssr-cookie']
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/fontawesome'],
  ],
  fontawesome: {
    component: 'fa',
    icons: {}
  },
  buildDir: 'app/.nuxt',
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-session',
      (session) => {

        const redis = require('redis');
        let client = redis.createClient(config.redis);
        if (config.redis.pass) {
          client.auth(config.redis.pass);
        }
        var RedisStore = require('connect-redis')(session);
        let store = new RedisStore({ client });
        // Use the session object:


        return {
          name: 'connect.sid',
          store,
          secret: 'jack jumped over the small white fence',

          cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2 // 2 years
          },
          saveUninitialized: false,
          resave: false
        };
      }
    ],
    '@nuxtjs/axios',
    '@nuxt/http',
    'nuxt-buefy',    // Doc: https://buefy.github.io/#/documentation
  ],
  env: {
   // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Build configuration
  */
  build: {
    html: { 
      minify: {
        collapseBooleanAttributes: false,
        decodeEntities: false,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: false,
        removeEmptyAttributes: false,
        removeRedundantAttributes: false,
        trimCustomFragments: false,
        useShortDoctype: false
      }
    },

    /*
    ** You can extend webpack config here
    */
  },
  vue: {
    config: {
    }
  }
}
