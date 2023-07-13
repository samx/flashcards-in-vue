import axios from 'axios'
axios.defaults.baseURL = process.env.APP_WEB_DOMAIN;

function getBinsAPI(payload) {
    return axios({
        method: 'get',
        url: `/api/web/bins`
    });
}

export {
    getBinsAPI
}