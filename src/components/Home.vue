<template>
    <div>
        <vc-carousel></vc-carousel>
        <vc-marketing></vc-marketing>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

<script lang="babel" type="text/babel">
    import VcCarousel from './Carousel.vue';
    import VcMarketing from './Marketing.vue';

    export default {
        components: {
            VcCarousel,
            VcMarketing,
        },
    }
</script>
