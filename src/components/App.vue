<template>
    <div>
        <vc-header></vc-header>
        <router-view></router-view>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
    /* GLOBAL STYLES
    /* Padding below the footer and lighter body text */

    body {
        padding-top    : 3rem;
        padding-bottom : 3rem;
        color          : #5a5a5a;
    }
</style>

<script lang="babel" type="text/babel">
    import VcHeader from './Header.vue';

    export default {
        components: {
            VcHeader,
        }
    }
</script>
