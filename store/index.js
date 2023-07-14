export const state = () => ({
    user: {},
    isLogged: false,
});

export const mutations = {
    SET_USER_LOGGED_IN(state, isLogged) {
        state.isLogged = isLogged;
    },
    SET_USER(state, user) {
        state.user = user;
    }
};

export const getters = {}

export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        
        if (req) {
            if (req.session && req.session.passport && req.session.passport.user) {
                let { data } = await dispatch('getUser');
                commit("SET_USER", data);
                commit("SET_USER_LOGGED_IN", true);
            } else {
                commit("SET_USER", {});
                commit("SET_USER_LOGGED_IN", false);
            }
        }
    },
    getUser() {
        return this.$axios.get("/api/web/user");
    }
};
