<template>
    <section class="head">
        <div class="head-banner">
            <div class="head-background"
                 :style="{ backgroundImage: 'url(' + getAnimeOfSeasonBanner + ')' }">

            </div>
            <div class="head__category">
                anime of the season
            </div>
            <div class="head__title">
                {{ getAnimeOfSeason.title }}
            </div>
        </div>
        <div class="head-features">
            <div class="head-features-item">
                <div class="head-features-item__subtext">
                    score
                </div>
                <div class="head-features-item__text">
                    {{ getAnimeOfSeason.score }}
                </div>
            </div>
            <div class="head-features-item">
                <div class="head-features-item__subtext">
                    rating
                </div>
                <div class="head-features-item__text">
                    {{ getAnimeOfSeason.rating }}
                </div>
            </div>
            <div class="head-features-item">
                <div class="head-features-item__subtext">
                    episodes
                </div>
                <div class="head-features-item__text">
                    {{ getAnimeOfSeason.episodes }}
                </div>
            </div>
            <div class="head-features-item">
                <div class="head-features-item__subtext">
                    type
                </div>
                <div class="head-features-item__text">
                    {{ getAnimeOfSeason.type }}
                </div>
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
            ...mapGetters('season', ['getAnimeOfSeason', 'getAnimeOfSeasonBanner'])
        }
    };
</script>

<style lang="scss">
    .head {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;

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

        &-banner {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-size: cover;
            width: 100%;
            background-color: $banner-bg-color;
            min-height: 440px;
            padding: 0 20px;
            text-align: center;
            z-index: 1;

            @include respond-to(tablet) {
                width: 100%;
                min-height: 380px;
            }

            @include respond-to(mobile) {
                padding-left: $mobile-padding;
                padding-right: $mobile-padding;
                min-height: 240px;
            }
        }

        &-features {
            position: relative;
            display: flex;
            background-color: $logo-bg;

            @include respond-to(mobile) {
                flex-direction: column;
                padding: $mobile-padding;
            }

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                display: block;
                background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
                box-shadow: 0 0 20px 0 rgba(255, 88, 96, .5);
                z-index: 3;
            }

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 22px;
                width: 25%;

                @include respond-to(mobile) {
                    align-items: flex-start;
                    flex-direction: row;
                    width: 100%;
                    padding: 0;
                }

                &:not(:last-child) {
                    @include respond-to(mobile) {
                        margin-bottom: 10px;
                    }
                }

                &__subtext {
                    flex-shrink: 0;
                    color: #ff55a5;
                    font-size: 13px;
                    font-weight: 300;
                    letter-spacing: 2px;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    text-align: center;

                    @include respond-to(mobile) {
                        display: flex;
                        margin-bottom: 0;
                        line-height: 16px;
                    }

                    &:after {
                        @include respond-to(mobile) {
                            display: inline-block;
                            content: ':';
                            margin-right: 8px;
                        }
                    }
                }

                &__text {
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    text-align: center;

                    @include respond-to(mobile) {
                        font-size: 13px;
                        line-height: 16px;
                        text-align: left;
                    }
                }
            }
        }

        &-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-position: 50% 50%;
            background-size: cover;
            opacity: .3;

            &:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, .3);
            }
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

            @include respond-to(tablet) {
                font-size: 14px;
            }

            @include respond-to(mobile) {
                font-size: 13px;
                margin-bottom: 10px;
            }
        }

        &__title {
            position: relative;
            font-size: 42px;
            color: white;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 2px;
            z-index: 2;

            @include respond-to(tablet) {
                font-size: 36px;
            }

            @include respond-to(mobile) {
                font-size: 24px;
            }
        }
    }
</style>
