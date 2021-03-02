<template>
    <div :class="$style.home"
         class="page">
        <Head />
        <div class="container">
            <Season />
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as _ from 'lodash';
    import Head from '../components/Head';
    import Season from '../components/Season';

    export default {
        name: 'HomePage',
        components: {
            Head,
            Season
        },
        created() {
            _.throttle(this.fetchSeasonList, 500)();
        },
        methods: {
            ...mapActions('season', ['fetchSeasonList'])
        }
    };
</script>

<style lang="scss" module>
    .home {
        //
    }
</style>
