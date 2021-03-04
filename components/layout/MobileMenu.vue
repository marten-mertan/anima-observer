<template>
    <div class="menu">
        <div class="menu__close">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'MobileMenu',
        props: {
            isOpen: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="scss">
    .menu {
        position: absolute;
        top: $header-h;
    }
</style>
