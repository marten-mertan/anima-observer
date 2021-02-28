<template>
    <footer class="footer">
        <div class="footer-wrap container">
            <div class="footer-bottom">
                <div class="footer__copyright">
                    © 2021 Anima Observer. Create by
                    <a href="https://github.com/marten-mertan" 
                       target="_blank">Marten Mertan</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        components: {

        },
    };
</script>

<style lang="scss">
    .footer {
        position: relative;
        padding: 60px 0;
        background-color: $body-bg;
        flex: 0 0 auto;

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
        }

        &-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &-bottom {
            display: flex;
            width: 100%;
            padding-top: 30px;
            margin-top: 60px;
            border-top: 1px solid rgba(255, 255, 255, .05);
        }

        &__copyright {
            font-size: 13px;

            a {
                transition: border-bottom .2s ease;
                border-bottom: 1px solid transparent;

                &:hover {
                    border-color: $body-color;
                }
            }
        }
    }
</style>
