import { 
    getBinsAPI,
 } from '../storeAPI/AdminAPI'

export const strict = false;
export const state = () => ({
    bins:[]
});

export const mutations = {
    LOAD_BINS(state, bins) {
        state.bins = bins;
    }
};

export const getters = {}

export const actions = {
    async getBins({commit,dispatch}){
        const { data} = await getBinsAPI();
        commit('LOAD_BINS', data);
    }
};
