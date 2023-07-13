import { 
    getBinsAPI,
    getBinCardsAPI,
    createCardAPI
 } from '../storeAPI/AdminAPI'

export const strict = false;
export const state = () => ({
    bins:[],
    binCards:[]
});

export const mutations = {
    LOAD_BINS(state, bins) {
        state.bins = bins;
    },
    LOAD_BIN_CARDS(state, cards) {
        state.binCards = cards;
    }
};

export const getters = {}

export const actions = {
    async getBins({commit,dispatch}){
        const { data} = await getBinsAPI();
        commit('LOAD_BINS', data);
    },
    async getBinCards({commit,dispatch}, level){
        const { data} = await getBinCardsAPI({level});
        commit('LOAD_BIN_CARDS', data);
    },
    async createNewCard({commit,dispatch}, payload){
        await createCardAPI(payload);
    }
};
