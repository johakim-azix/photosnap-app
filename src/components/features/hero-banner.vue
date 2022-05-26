<template>
    <div class="hero">
        <div class="container">
            <div class="content">
                <div class="text">
                    <div>
                        <div class="bar"></div>
                        <div>
                            <div>
                                <h1>FEATURES</h1>
                                <p>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                                <a href="">GET AN INVITE <img src="../../assets/icons/icon-arrow-right-white.svg"
                                                              alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="image"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hero-banner"
    }
</script>

<style lang="scss" scoped>
    .hero {
        display: flex;
        justify-content: space-around;
        color: var(--pure-white);

        .container {
            padding: 0 !important;
            max-width: 1440px;
        }

        .content {
            display: flex;
            background: rgba(0, 0, 0, .1);
            animation: load ease-in-out .60s alternate infinite;
            position: relative;
            @media screen and (max-width: 650px) {
                flex-wrap: wrap;
                flex-flow: column-reverse;
                overflow: hidden;
            }

            .text {
                width: 100%;
                max-width: 610px;
                padding: 60px 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: var(--pure-black);
                @media screen and (max-width: 650px) {
                    max-width: 100% !important;
                    padding: 0;
                }

                & > div {
                    position: relative;
                    max-width: 100%;
                    width: 100%;
                    max-height: 324px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    @media screen and (max-width: 650px) {
                        max-height: 100%;
                    }

                    .bar {
                        height: 304px !important;
                        width: 6px;
                        background: white url("../../assets/images/banner-bar-large.svg");
                        @media screen and (max-width: 650px) {
                            height: 6px !important;
                            width: 128px;
                            position: absolute;
                            top: 0;
                        }
                    }

                    & > div:last-child {
                        padding: 20px;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 100%;

                        & > div {
                            max-width: 407px;
                            padding: 60px 0;
                        }
                    }

                    h1 {
                        font-size: 40px;
                        font-weight: bold;
                        margin-bottom: 20px;
                        @media screen and (max-width: 650px) {
                            font-size: 32px;
                        }
                        @media screen and (max-width: 400px) {
                            font-size: 24px;
                        }
                    }

                    p {
                        font-weight: normal;
                        font-size: 15px;
                        margin-bottom: 40px;
                        color: rgba(255, 255, 255, .7);
                    }

                    a {
                        color: var(--pure-white);
                        font-size: 12px;
                        text-decoration: none;
                        padding: 10px;
                        display: flex;
                        align-items: center;

                        img {
                            margin-left: 10px;
                        }

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            .image {
                max-width: 830px;
                width: 100%;
                height: 490px;
                background: rgba(0, 0, 0, .4) url("../../assets/images/desktop/hero-feature.jpg") center no-repeat;
                background-blend-mode: overlay;
                transition: all ease-in-out .15s;
                @media screen and (max-width: 500px) {
                    height: 490px;
                }
                @media screen and (max-width: 400px) {
                    height: 400px;
                }
            }
        }
    }

</style>