<template>
    <section class="season">
        <h2 class="season__title">
            <span class="mod-bold">
                NEW ITEMS
            </span> 
            <span>
                OF THIS SEASON
            </span>
        </h2>
        <div class="season-catalog">
            <div v-for="anime in getSeasonList.anime"
                 :key="anime.mal_id"
                 class="season-card">
                <div class="season-card__img" 
                     :style="{ backgroundImage: 'url(' + anime.image_url + ')' }">

                </div>
                <div class="season-card-wrap">
                    <div class="season-card__title">
                        {{ anime.title }}
                    </div>
                    <div class="season-card__rating">
                        <svg class="icon-star">
                            <use xlink:href="../assets/icons/all.svg#icon-star" />
                        </svg>
                        {{ anime.score }}
                    </div>
                    <div class="season-card-description">
                        <div class="season-card-description-wrap">
                            {{ anime.synopsis }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'Season',
        components: {
            
        },
        computed: {
            ...mapGetters('season', ['getSeasonList'])
        },
        created() {
            this.fetchSeasonList();
        },
        methods: {
            ...mapActions('season', ['fetchSeasonList'])
        }
    };
</script>

<style lang="scss">
    .season {
        padding: 70px 0;

        &__title {
            font-size: 36px;
            color: white;
            font-weight: 300;
            letter-spacing: .5px;
            margin-bottom: 60px;

            .mod-bold {
                font-weight: 500;
            }
        }

        &-catalog {
            display: flex;
            flex-wrap: wrap;
        }

        &-card {
            display: flex;
            width: calc(50% - 30px);
            margin-bottom: 60px;

            &:nth-child(2n) {
                margin-left: 40px;
            }

            &-wrap {
                display: flex;
                flex-direction: column;
                max-height: 319px;
                padding: 0 20px;
            }

            &__img {
                flex: 0 0 auto;
                width: 225px;
                height: 319px;
                margin-right: 14px;
            }

            &__title {
                font-size: 22px;
                line-height: 30px;
                color: white;
                font-weight: 500;
                margin-bottom: 10px;
                letter-spacing: .5px;
            }

            &__rating {
                display: flex;
                align-items: center;
                color: white;
                font-size: 22px;
                line-height: 22px;
                margin-bottom: 10px;
                letter-spacing: .5px;
                font-weight: 500;

                svg {
                    margin-right: 6px;
                }
            }

            &-description {
                font-size: 15px;
                line-height: 25px;
                font-weight: 300;
                color: rgba(255, 255, 255, .7);
                letter-spacing: .5px;
                width: 100%;
                height: 100%;
                overflow: hidden;

                &-wrap {
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                    box-sizing: content-box;
                    padding-right: 20px;
                }
            }
        }
    }
</style>
