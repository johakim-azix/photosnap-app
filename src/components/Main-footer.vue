<template>
    <div class="footer">
        <div class="container">
            <div class="side-left">
                <div class="logo">
                    <img src="../assets/logos/logo-footer.svg" alt="">
                </div>
                <div class="social-media visible-small">
                    <div class="fb"></div>
                    <div class="yt"></div>
                    <div class="tt"></div>
                    <div class="pint"></div>
                    <div class="inst"></div>
                </div>
                <div class="nav">
                    <router-link :to="{name:'homePage'}" class="nav__link">HOME</router-link>
                    <router-link :to="{name:'stories'}" class="nav__link">STORIES</router-link>
                    <router-link :to="{name:'features'}" class="nav__link">FEATURES</router-link>
                    <router-link :to="{name:'pricing'}" class="nav__link">PRICING</router-link>
                </div>
                <div class="social-media visible-large">
                    <div class="fb"></div>
                    <div class="yt"></div>
                    <div class="tt"></div>
                    <div class="pint"></div>
                    <div class="inst"></div>
                </div>
            </div>
            <div class="side-right">
                <a href="">GET AN INVITE <img src="../assets/icons/icon-arrow-right-white.svg" alt=""></a>
                <span>Copyright 2019. All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style lang="scss" scoped>
    .footer{
        background: var(--pure-black);
        color: var(--pure-white);
        display: flex;
        justify-content: space-around;
        font-weight: bold;
        font-size: 12px;
        padding: 40px 0;
        .container{
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            &>div{
                width: fit-content;
            }
            @media screen and (max-width: 498px) {
                flex-wrap: wrap;
            }
        }

        .side-left{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            max-width: 700px;
            @media screen and (max-width: 498px) {
                display: block;
                width: 100% !important;
                max-width: 100% !important;
            }
            &>*{
                width: fit-content;
            }
            .logo{
                height: fit-content;
                margin-top: 6px;
                @media screen and (max-width: 498px) {
                    margin-left: auto;
                    margin-right: auto;
                }
            }
            .nav{
                overflow: hidden;
                min-width: 100px;
                &__link{
                    display: block;
                    width: 100%;
                    padding: 5px 10px;
                    cursor: pointer;
                    text-align: center;
                    margin-bottom: 10px;
                    text-decoration: none;
                    color: var(--pure-white);
                    &:hover{
                        color: rgba(255,255,255,.4);
                    }
                }
                @media screen and (max-width: 590px) {
                    display: flex;
                    margin-top: 20px;
                }

                @media screen and (max-width: 498px) {
                    display: block;
                    width: 100%;
                    margin-top: 50px;
                }
            }
            .social-media{
                display: flex;
                width: 50%;
                height: fit-content;
                @media screen and (max-width: 498px) {
                    display: flex;
                    width: fit-content;
                    margin: 20px auto;
                    padding-left: 10px;
                }
                &:last-child{
                    margin-top: -35px;
                    @media screen and (max-width: 590px) {
                        margin-top: 20px;
                        width: fit-content;
                    }
                }
                &>div{
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    transition: all ease-in-out .15s;
                }
                .fb{
                    background-image: url("../assets/icons/icon-facebook.svg");
                    &:hover{
                        background-image: url("../assets/icons/icon-facebook-active.svg");
                    }
                }
                .yt{
                    background-image: url("../assets/icons/icon-youtube.svg");
                    &:hover{
                        background-image: url("../assets/icons/icon-youtube-active.svg");
                    }
                }
                .tt{
                    background-image: url("../assets/icons/icon-tweeter.svg");
                    background-repeat: no-repeat;
                    &:hover{
                        background-image: url("../assets/icons/icon-tweeter-active.svg");
                    }
                }
                .pint{
                    background-image: url("../assets/icons/icon-pinterest.svg");
                    &:hover{
                        background-image: url("../assets/icons/icon-pinterest-active.svg");
                    }
                }
                .inst{
                    background-image: url("../assets/icons/icon-instagram.svg");
                    &:hover{
                        background-image: url("../assets/icons/icon-instagram-active.svg");
                    }
                }
            }
        }

        .side-right{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 0;
            @media screen and (max-width: 498px) {
                width: 100% !important;
                justify-content: space-around;
                display: block;
                margin-top: 50px;
                &>*{
                    width: fit-content!important;
                    margin: 20px auto;
                }
            }
                &>*{
                display: block;
                width: 100%;
                height: fit-content;
                text-align: right;
            }
            a{
                color: var(--pure-white);
                text-decoration: none;
                padding: 5px 10px;
                cursor: pointer;
                img{
                    margin-left: 10px;
                    margin-bottom: -3px!important;
                }
                &:hover{
                    text-decoration: underline;
                }
            }

            span{
                align-self: flex-end!important;
                color: rgba(255,255,255,.4);
                margin-bottom: 15px;
            }
        }
    }
</style>