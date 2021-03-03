export const state = () => ({
    currentSeason: {},
    animeOfSeason: {},
    animeOfSeasonBanner: {},
});

export const getters = {
    getAnimeOfSeason: state => state.animeOfSeason,
    getAnimeOfSeasonBanner: state => state.animeOfSeasonBanner,
    getSeasonList: state => state.currentSeason,
};

export const actions = {
    async fetchSeasonList({commit}) {
        const response = await fetch('https://api.jikan.moe/v3/season');
        const data = await response.json();
        commit('setCurrentSeason', data);
        setTimeout(async () => {
            //
            //    Фильтруем список текущих тайтлов сезона и ищем в нём аниме с наибольшим рейтингом
            const animeOfSeason = data.anime.reduce((acc, cur) => acc.score > cur.score ? acc : cur);
            //
            //    Делаем запрос на получение более полной информации и сохраняем в сторе
            const responseMonth = await fetch(`https://api.jikan.moe/v3/anime/${animeOfSeason?.mal_id}`);
            const dataMonth = await responseMonth.json();
            commit('setAnimeOfSeason', dataMonth);
            //
            //    Формируем запрос на получение баннера
            const query = `
                query ($id: Int, $page: Int, $perPage: Int, $search: String) {
                    Page (page: $page, perPage: $perPage) {
                        media (id: $id, search: $search) {
                        id
                        title {
                            romaji
                        }
                        bannerImage
                        }
                    }
                }
            `;

            const variables = {
                search: animeOfSeason?.title,
                page: 1,
                perPage: 1
            };

            const url = 'https://graphql.anilist.co';

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    variables: variables
                })
            };

            const responseAnimeOfSeasonBanner = await fetch(url, options);
            const dataAnimeOfSeasonBanner = await responseAnimeOfSeasonBanner.json();
            commit('setAnimeOfSeasonBanner', dataAnimeOfSeasonBanner.data.Page.media[0].bannerImage);
        }, 1000);
    }
};

export const mutations = {
    setCurrentSeason(state, data) {
        state.currentSeason = data;
    },
    setAnimeOfSeason(state, data) {
        state.animeOfSeason = data;
    },
    setAnimeOfSeasonBanner(state, data) {
        state.animeOfSeasonBanner = data;
    },
};
