<template>
    <header class="header">
        <div class="header-wrap container">
            <nuxt-link to="/" 
                       class="header__title">
                <span>
                    Anima
                </span>
                <span class="mod-purple">
                    Observer
                </span>
            </nuxt-link>
            <ul class="header-menu">
                <li class="header-menu__item">
                    <nuxt-link :to="`/`"
                               class="header-menu__link">
                        Home
                    </nuxt-link>
                </li>
                <li class="header-menu__item">
                    <nuxt-link :to="`/about/`"
                               class="header-menu__link">
                        About
                    </nuxt-link>
                </li>
            </ul>
            <div class="header-search">
                <input type="text" 
                       class="header-search__input"
                       placeholder="Search anime by title...">
                <button type="button"
                        class="header-search__btn">
                    search
                </button>
            </div>
            <div class="header-burger"
                 :class="{'_open' : isMenuOpen}"
                 @click="toggleMobileMenu">
                <span class="header-burger-line"></span>
                <span class="header-burger-line"></span>
                <span class="header-burger-line"></span>
            </div>
        </div>
        <MobileMenu :is-open="isMenuOpen" />
    </header>
</template>

<script>
    import MobileMenu from './MobileMenu';

    export default {
        name: 'TheHeader',
        components: {
            MobileMenu
        },
        data() {
            return {
                isMenuOpen: false
            };
        },
        methods: {
            toggleMobileMenu() {
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    };
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 15;
        width: 100%;
        background-color: $body-bg;
        box-shadow: 0 5px 25px 0 rgba(0, 0, 0, .3);

        &-wrap {
            display: flex;
            align-items: center;
            height: $header-h;
            transition: all .2s ease;

            &.container {
                @include respond-to(tablet) {
                    padding: 0;
                }
            }

            @include respond-to(mobile) {
                height: $header-mobile-h;
            }
        }

        &__title {
            display: flex;
            font-size: 36px;
            line-height: 40px;
            font-weight: 700;
            padding: 25px 30px;
            margin-right: 50px;
            color: white;
            background-color: $logo-bg;
            text-transform: uppercase;
            transition: background-color .2s ease;

            @include respond-to(tablet) {
                font-size: 24px;
                padding: 25px 20px;
            }

            @include respond-to(mobile) {
                font-size: 20px;
                padding: 15px 16px;
                margin-right: 0;
            }

            &:hover {
                background-color: $body-bg;
            }

            .mod-purple {
                color: $body-bg;
                background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        &-menu {
            display: flex;
            margin-right: 50px;

            @include respond-to(tablet) {
                display: none;
            }

            &__item {
                &:not(:last-child) {
                    margin-right: 45px;
                }
            }

            &__link {
                font-size: 14px;
                font-weight: 300;
                color: $link-color;
                letter-spacing: 1px;
                text-transform: uppercase;
                transition: color .2s ease;

                &:hover {
                    color: $link-color-hover;
                }
            }
        }

        &-search {
            position: relative;
            display: flex;
            width: 540px;
            margin-left: auto;

            @include respond-to(tablet) {
                display: none;
            }

            &__input {
                height: 60px;
                width: 100%;
                background-color: $logo-bg;
                border: none;
                border-radius: 30px;
                padding: 0 140px 0 30px;
                font-size: 14px;
                color: white;
            }

            &__btn {
                position: absolute;
                height: 60px;
                width: 120px;
                top: 0;
                right: 0;
                border-radius: 30px;
                background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
                box-shadow: 0 0 20px 0 rgba(255, 88, 96, .5);
                opacity: 0.85;
                font-size: 14px;
                color: white;
                text-transform: uppercase;
                font-weight: 500;
                letter-spacing: 0.6px;
                cursor: pointer;
                transition: opacity .2s ease;

                &:hover {
                    opacity: 1;
                }
            }
        }

        &-burger {
            flex-shrink: 0;
            position: relative;
            width: $header-h;
            height: $header-h;
            margin-left: auto;
            display: none;

            @include respond-to(tablet) {
                display: flex;
            }

            @include respond-to(mobile) {
                width: $header-mobile-h;
                height: $header-mobile-h;
            }

            &._open {
                .header-burger-line {
                    opacity: 0;
                    transform: rotate(-180deg);
                    top: $header-h/2 - 1px;

                    @include respond-to(mobile) {
                        top: $header-mobile-h/2 - 1px;
                    }

                    &:first-child {
                        opacity: 1;
                        transform: rotate(135deg);
                    }

                    &:last-child {
                        opacity: 1;
                        transform: rotate(225deg);
                    }
                }
            }

            &-line {
                position: absolute;
                height: 3px;
                width: 24px;
                background-color: white;
                top: $header-h/2 - 1px;
                left: $header-h/2 - 12px;
                border-radius: 2px;
                transition: all .3s ease-in-out;

                @include respond-to(mobile) {
                    top: $header-mobile-h/2 - 1px;
                    left: $header-mobile-h/2 - 12px;
                }

                &:first-child {
                    top: $header-h/2 - 9px;
                    background-image: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
                    box-shadow: 0 0 20px 0 rgba(255, 88, 96, .5);
                    transition: all .3s ease-in-out;

                    @include respond-to(mobile) {
                        top: $header-mobile-h/2 - 9px;
                    }
                }

                &:last-child {
                    top: $header-h/2 + 7px;
                    transition: all .3s ease-in-out;

                    @include respond-to(mobile) {
                        top: $header-mobile-h/2 + 7px;
                    }
                }
            }
        }
    }
</style>
