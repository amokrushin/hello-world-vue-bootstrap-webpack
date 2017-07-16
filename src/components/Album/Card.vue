<template>
    <div class="card">
        <img :src='image.src' alt="Card image cap" ref="image">
        <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
        </p>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
    .card {
        float         : left;
        width         : 33.333%;
        padding       : .75rem;
        margin-bottom : 2rem;
        border        : 0;
    }

    .card > img {
        margin-bottom : .75rem;
    }

    .card-text {
        font-size : 85%;
    }

    img {
        max-width : 100%;
    }
</style>

<script lang="babel" type="text/babel">
    export default {
        props: ['image'],
    }
</script>