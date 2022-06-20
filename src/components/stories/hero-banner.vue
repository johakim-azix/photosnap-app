<template>
    <div class="hero">
        <div class="container">
            <div class="content">
                <div class="text">
                    <div>
                        <div>
                            <div>
                                <h1>HAZY FULL MOON OF APPALACHIA</h1>
                                <p>March 2nd 2020<span style="color: white; margin-left: 10px">by John Appleseed</span>
                                </p>
                                <p>The dissected plateau area, while not actually made up of geological mountains, is
                                    popularly called "mountains," especially in eastern Kentucky and West Virginia, and
                                    while the ridges are not high, the terrain is extremely rugged.</p>
                                <a>READ THE STORY <img src="../../assets/icons/icon-arrow-right-white.svg"
                                                               alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
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
            background: rgba(0, 0, 0, .4) url("../../assets/images/desktop/moon-of-appalacia.jpg") center;
            background-blend-mode: overlay;
            position: relative;
            @media screen and (max-width: 650px) {
                flex-wrap: wrap;
                flex-flow: column-reverse;
                overflow: hidden;
            }

            .text {
                width: 100%;
                max-width: 510px;
                padding: 60px 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                min-height: 530px;
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
        }
    }

</style>