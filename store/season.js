export const state = () => ({
    currentSeason: {}
});

export const getters = {
    getSeasonList: state => state.currentSeason
};

export const actions = {
    async fetchSeasonList({commit}) {
        const response = await fetch('https://api.jikan.moe/v3/season');
        const data = await response.json();
        commit('setCurrentSeason', data);
    }
};

export const mutations = {
    setCurrentSeason(state, data) {
        state.currentSeason = data;
    }
};
