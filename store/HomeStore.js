import { 
    drawCardAPI,
    answerCardAPI,
    loginAsTempUserAPI,
    signoutAPI
 } from '../storeAPI/HomeAPI'

export const strict = false;
export const state = () => ({
    card:[],
    hasAlert:false,
});

export const mutations = {
    LOAD_DRAWN_CARD(state, drawnCard) {
        state.card = drawnCard;
    },
    HAS_ALERT(state, hasAlert) {
        state.hasAlert = hasAlert;
    },
};

export const getters = {}

export const actions = {
    async drawCard({commit,dispatch}){
        const { data} = await drawCardAPI();

        if(data.status && data.status === "alert"){
            commit('HAS_ALERT', true);
        }else{
            commit('HAS_ALERT', false);
        }

        commit('LOAD_DRAWN_CARD', data);
    },
    async answerCard({commit,dispatch}, payload){
        const { data} = await answerCardAPI(payload);
    },
    async loginAsTempUserAction({commit,dispatch}){
        await loginAsTempUserAPI()  
        //window.location.reload()    
    },
    async signoutAction({commit,dispatch}){
        await signoutAPI()
        //window.location.reload()
    }
};
