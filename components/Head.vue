<template>
    <section class="head">
        <div class="head-wrapper">
            <div class="head__category">
                anime of the season
            </div>
            <div class="head__title">
                {{ getAnimeOfSeason.title }}
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'Head',
        components: {
            
        },
        computed: {
            ...mapGetters('season', ['getAnimeOfSeason'])
        }
    };
</script>

<style lang="scss">
    .head {
        position: relative;
        display: flex;
        align-items: stretch;
        min-height: 638px;

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 2px;
            display: block;
            background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
            box-shadow: 0 0 20px 0 rgba(255, 88, 96, .5);
            z-index: 3;
        }

        &-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-size: cover;
            width: 100%;
            background-color: #232125;
            z-index: 1;
        }

        &__category {
            position: relative;
            font-size: 16px;
            color: #ff55a5;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 16px;
            z-index: 2;
        }

        &__title {
            position: relative;
            font-size: 42px;
            color: white;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 2px;
            z-index: 2;
        }
    }
</style>
