<template>
    <section class="season">
        <h2 class="season__title">
            <span class="mod-bold">
                NEW TITLES
            </span> 
            <span>
                OF THIS SEASON
            </span>
        </h2>
        <div class="season-catalog">
            <CatalogCard v-for="anime in getSeasonList.anime"
                         :key="anime.mal_id"
                         :card="anime"
            />
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    import CatalogCard from '../components/CatalogCard';

    export default {
        name: 'Season',
        components: {
            CatalogCard
        },
        computed: {
            ...mapGetters('season', ['getSeasonList'])
        }
    };
</script>

<style lang="scss">
    .season {
        position: relative;
        padding: 70px 0;

        @include respond-to(tablet) {
            padding: 40px 0;
        }

        @include respond-to(mobile) {
            padding: 24px 0;
        }

        &__title {
            font-size: 36px;
            color: white;
            font-weight: 300;
            letter-spacing: .5px;
            margin-bottom: 60px;

            @include respond-to(tablet) {
                font-size: 30px;
                margin-bottom: 30px;
            }

            @include respond-to(mobile) {
                font-size: 24px;
                margin-bottom: 24px;
            }

            .mod-bold {
                font-weight: 500;
            }
        }

        &-catalog {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
