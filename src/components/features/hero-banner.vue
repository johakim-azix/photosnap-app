<template>
    <div class="hero">
        <div class="container">
            <div class="content">
                <div class="text">
                    <div>
                        <div class="bar visible-lg"></div>
                        <div>
                            <div>
                                <div class="bar visible-xs"></div>

                                <h1>FEATURES</h1>
                                <p>We make sure all of our features are designed to be loved by every aspiring and even
                                    professional photograpers who wanted to share their stories.</p>
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
        color: var(--color-secondary);

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
                background: var(--color-primary);
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
                        background: linear-gradient(rgb(90, 119, 255), rgb(188, 113, 152), rgb(255, 197, 147));

                        @media screen and (max-width: 650px) {
                            height: 6px !important;
                            width: 128px;
                            position: absolute;
                            top: 0;
                            background: linear-gradient(270deg,rgb(90, 119, 255), rgb(188, 113, 152), rgb(255, 197, 147));
                        }

                        &.visible-lg{
                            display: block;
                            @media screen and (max-width: 650px){
                                display: none;
                            }
                        }
                        &.visible-xs{
                            display: none;
                            @media screen and (max-width: 650px){
                                display: block;
                            }
                        }
                    }

                    & > div:last-child {
                        padding: 20px;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 100%;
                        @media screen and (max-width: 650px) {
                            padding: 0 20px;
                        }

                        & > div {
                            max-width: 407px;
                            @media screen and (max-width: 650px) {
                                height: 100%;
                                position: relative;
                                padding: 60px 0;
                            }
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
                        color: var(--color-body-secondary);
                    }

                    a {
                        color: var(--color-secondary);
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