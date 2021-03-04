<template>
    <div class="card">
        <div class="card__img" 
             :style="{ backgroundImage: 'url(' + card.image_url + ')' }">
        </div>
        <div class="card-wrap">
            <div class="card__title">
                {{ card.title }}
            </div>
            <div class="card__rating">
                <svg class="icon-star">
                    <use xlink:href="../assets/icons/all.svg#icon-star" />
                </svg>
                {{ card.score }}
            </div>
            <div class="card-description">
                <div class="card-description-wrap">
                    {{ card.synopsis }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CatalogCard',
        components: {

        },
        props: {
            card: {
                type: Object,
                default() {
                    return {
                        id: 0,
                        title: '',
                        score: 0,
                        synopsis: '',
                        image_url: '',
                    };
                },
            }
        }
    };
</script>

<style lang="scss">
    .card {
        display: flex;
        width: calc(50% - 20px);
        margin-bottom: 60px;

        @include respond-to(tablet) {
            width: 100%;
            margin-bottom: 30px;
        }

        @include respond-to(mobile) {
            flex-direction: column;
            margin-bottom: 24px;
        }

        &:nth-child(2n) {
            margin-left: 40px;

            @include respond-to(tablet) {
                margin-left: 0;
            }
        }

        &-wrap {
            display: flex;
            flex-direction: column;
            max-height: 319px;
            padding: 0 20px;

            @include respond-to(mobile) {
                padding: 10px 0 0 0;
                max-height: none;
            }
        }

        &__img {
            flex: 0 0 auto;
            width: 225px;
            height: 319px;
            background-position: 50%;
            background-size: cover;

            @include respond-to(mobile) {
                width: 100%;
                height: 165px;
            }
        }

        &__title {
            font-size: 22px;
            line-height: 30px;
            color: white;
            font-weight: 500;
            margin-bottom: 10px;
            letter-spacing: .5px;

            @include respond-to(mobile) {
                font-size: 16px;
                line-height: 19px;
                margin-bottom: 8px;
            }
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

            @include respond-to(mobile) {
                font-size: 15px;
                line-height: 15px;
                margin-bottom: 10px;
            }

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

            @include respond-to(mobile) {
                font-size: 14px;
                line-height: 17px;
            }

            &-wrap {
                width: 100%;
                height: 100%;
                overflow-y: scroll;
                box-sizing: content-box;
                padding-right: 20px;
            }
        }
    }
</style>
