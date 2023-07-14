const middleware = {}

middleware['ssr-cookie'] = require('..\\..\\middleware\\ssr-cookie.js')
middleware['ssr-cookie'] = middleware['ssr-cookie'].default || middleware['ssr-cookie']

export default middleware
