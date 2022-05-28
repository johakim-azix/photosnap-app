<template>
    <div class="hero">
        <div class="container">
            <div class="content">
                <div class="text">
                    <div class="bar"></div>
                    <h1>We’re in beta. <br> Get your invite today!</h1>
                    <a href="">GET AN INVITE <img src="../../assets/icons/icon-arrow-right-white.svg" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "beta-banner"
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
            max-height: 280px;
        }

        .content {
            display: flex;
            background: rgba(0, 0, 0, .4) url("../../assets/images/bg-beta.jpg") center no-repeat;
            background-blend-mode: overlay;
            position: relative;
            justify-content: space-around;
            max-height: 280px;

            .text {
                width: 100%;
                max-width: 1104px;
                padding: 60px 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-height: 280px;

                .bar {
                    width: 6px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    background: white url("../../assets/images/banner-bar-large.svg");
                    @media screen and (max-width: 539px) {
                        height: 6px;
                        width: 128px;
                        left: 40px;
                    }
                }
                @media screen and (max-width: 650px) {
                    max-width: 100% !important;
                    flex-wrap: wrap;
                    overflow: hidden;
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
    }

</style>