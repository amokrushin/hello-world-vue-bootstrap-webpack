<template>
    <div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Album example</h1>
                <p class="lead text-muted">
                    Something short and leading about the collection below—its contents, the creator, etc.
                    Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                </p>
            </div>
        </section>

        <div class="album text-muted">
            <div class="container">
                <div class="row">
                    <vc-album-card v-for="image in images" :key="image.id" :image="image"></vc-album-card>
                </div>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
    .jumbotron {
        padding-top      : 6rem;
        padding-bottom   : 6rem;
        margin-bottom    : 0;
        background-color : #fff;
    }

    .jumbotron p:last-child {
        margin-bottom : 0;
    }

    .jumbotron-heading {
        font-weight : 300;
    }

    .jumbotron .container {
        max-width : 40rem;
    }

    .album {
        min-height       : 50rem; /* Can be removed; just added for demo purposes */
        padding-top      : 3rem;
        padding-bottom   : 3rem;
        background-color : #f7f7f7;
    }
</style>

<script lang="babel" type="text/babel">
    import VcAlbumCard from './Album/Card.vue';

    export default {
        data: () => ({
            images: [1062, 1059, 1058, 1057, 1054, 1052, 1051, 1047, 1044]
                .map(id => ({ id, src: `https://unsplash.it/400/300/?image=${id}` })),
        }),
        components: {
            VcAlbumCard,
        },
    }
</script>