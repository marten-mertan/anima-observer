<template>
    <div class="__layout-wrapper">
        <TheHeader />

        <main class="main">
            <nuxt />
        </main>

        <TheFooter />
    </div>
</template>

<script>
    import TheHeader from '~/components/layout/TheHeader';
    import TheFooter from '~/components/layout/TheFooter';

    export default {
        components: {
            TheHeader,
            TheFooter,
        },
    };
</script>

<style lang="scss">
    .__layout-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .main {
        flex: 1 0 auto;
    }
</style>
