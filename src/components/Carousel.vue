<template>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="first-slide" src="https://unsplash.it/1920/300/?image=1022" alt="First slide">
                <div class="container">
                    <div class="carousel-caption d-none d-md-block text-left">
                        <h1>Example headline.</h1>
                        <p>
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="second-slide" src="https://unsplash.it/1920/300/?image=999" alt="Second slide">
                <div class="container">
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Another example headline.</h1>
                        <p>
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="third-slide" src="https://unsplash.it/1920/300/?image=1016" alt="Third slide">
                <div class="container">
                    <div class="carousel-caption d-none d-md-block text-right">
                        <h1>One more for good measure.</h1>
                        <p>
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
    /* Carousel base class */
    .carousel {
        margin-bottom : 4rem;
    }

    /* Since positioning the image, we need to help out the caption */
    .carousel-caption {
        z-index : 10;
        bottom  : 3rem;
    }

    /* Declare heights because of positioning of img element */
    .carousel-item {
        height           : 32rem;
        background-color : #777;
    }

    .carousel-item > img {
        position  : absolute;
        top       : 0;
        left      : 0;
        min-width : 100%;
        height    : 32rem;
    }

    @media (min-width : 40em) {
        /* Bump up size of carousel content */
        .carousel-caption p {
            margin-bottom : 1.25rem;
            font-size     : 1.25rem;
            line-height   : 1.4;
        }
    }
</style>

<script lang="babel" type="text/babel">
    export default {}
</script>