export const state = () => ({
    currentSeason: {},
    AnimeOfSeason: {},
});

export const getters = {
    getAnimeOfSeason: state => state.AnimeOfSeason,
    getSeasonList: state => state.currentSeason,
};

export const actions = {
    async fetchSeasonList({commit}) {
        const response = await fetch('https://api.jikan.moe/v3/season');
        const data = await response.json();
        commit('setCurrentSeason', data);
        setTimeout(async () => {
            const AnimeOfSeason = data.anime.reduce((acc, cur) => acc.score > cur.score ? acc : cur);
            const responseMonth = await fetch(`https://api.jikan.moe/v3/anime/${AnimeOfSeason?.mal_id}`);
            const dataMonth = await responseMonth.json();
            commit('setAnimeOfSeason', dataMonth);
        }, 1000);
    }
};

export const mutations = {
    setCurrentSeason(state, data) {
        state.currentSeason = data;
    },
    setAnimeOfSeason(state, data) {
        state.AnimeOfSeason = data;
    },
};
