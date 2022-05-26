<template>
    <div class="hero">
        <div class="container">
            <div class="content">
                <div class="bar"></div>
                <div class="text">
                    <div>
                        <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                        <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                        <a href="">GET AN INVITE <img src="../../assets/icons/icon-arrow-right-white.svg" alt=""></a>
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
    .hero{
        display: flex;
        justify-content: space-around;
        color: var(--pure-white);
        .container{
            padding: 0!important;
            max-width: 1440px;
        }
        .content{
            display: flex;
            background: rgba(0,0,0,.1);
            animation: load ease-in-out .60s alternate infinite;

            @media screen and (max-width: 650px) {
                flex-wrap: wrap ;
                flex-flow: column-reverse;
                overflow: hidden;
            }
            .text{
                width: 100%;
                max-width: 610px;
                padding: 60px 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                background: var(--pure-black);
                @media screen and (max-width: 650px) {
                    max-width: 100% !important;
                }
                &>div{
                    max-width: 407px;
                    width: 100%;
                    max-height: 324px;
                    padding: 20px;
                    h1{
                        font-size: 40px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }

                    p{
                        font-weight: normal;
                        font-size: 15px;
                        margin-bottom: 40px;
                        color: rgba(255, 255, 255,.7);
                    }

                    a{
                        color: var(--pure-white);
                        font-size: 12px;
                        text-decoration: none;
                        padding: 10px;
                        display: flex;
                        align-items: center;
                        img{
                            margin-left: 10px;
                        }
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
            .image{
                max-width: 830px;
                width: 100%;
                height: 650px;
                background: rgba(0, 0, 0, .4) url("../../assets/images/desktop/create-and-share.jpg") center;
                background-blend-mode: overlay;
            }
        }
    }

</style>