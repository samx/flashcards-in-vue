import axios from 'axios'
axios.defaults.baseURL = process.env.APP_WEB_DOMAIN;

function getBinsAPI() {
    return axios({
        method: 'get',
        url: `/api/web/bins`
    });
}

function getBinCardsAPI({level}) {
    return axios({
        method: 'get',
        url: `/api/web/bin/${Number(level)+1}`,
    });
}

function createCardAPI(payload) {
    return axios({
        method: 'post',
        url: `/api/web/card`,
        data:payload
    });
}

export {
    getBinsAPI,
    getBinCardsAPI,
    createCardAPI
}