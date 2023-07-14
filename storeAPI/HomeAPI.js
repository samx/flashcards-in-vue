import axios from 'axios'
axios.defaults.baseURL = process.env.APP_WEB_DOMAIN;

function drawCardAPI() {
    return axios({
        method: 'get',
        url: `/api/web/card`
    });
}

function answerCardAPI(payload) {
    return axios({
        method: 'post',
        url: `/api/web/card/${payload.card_id}/answer`,
        data:payload
    });
}
function loginAsTempUserAPI(){
    return axios({
        method: 'get',
        url: `/api/web/user/temp`,
    });
}
function signoutAPI(){
    return axios({
        method: 'get',
        url: `/api/web/logout?redirect=false`,
    });
}

export {
    drawCardAPI,
    answerCardAPI,
    loginAsTempUserAPI,
    signoutAPI
}