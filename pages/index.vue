<template>
    <div :class="$style.home"
         class="page">
        <div class="container">
            <Season />
        </div>
    </div>
</template>

<script>
    import Season from '../components/Season';

    export default {
        name: 'HomePage',
        components: {
            Season
        },
    };
</script>

<style lang="scss" module>
    .home {
        //
    }
</style>
