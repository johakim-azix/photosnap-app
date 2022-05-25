<template>
    <div class="features">
        <div class="container">
            <div class="content">
                <div class="feature">
                    <img src="../assets/icons/icon-responsive.svg" alt="">
                    <div class="caption">
                        <h5>100% Responsive</h5>
                        <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                    </div>
                </div>
                <div class="feature second">
                    <img src="../assets/icons/icon-forever.svg" alt="">
                    <div class="caption">
                        <h5>No Photo Upload Limit</h5>
                        <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                    </div>
                </div>
                <div class="feature">
                    <img src="../assets/icons/icon-bullhorn.svg" alt="">
                    <div class="caption">
                        <h5>Available to Embed</h5>
                        <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                    </div>
                </div>
                <div class="feature" v-if="!minimized">
                    <img src="../assets/icons/icon-www.svg" alt="">
                    <div class="caption">
                        <h5>Custom Domain</h5>
                        <p>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
                    </div>
                </div>
                <div class="feature" v-if="!minimized">
                    <img src="../assets/icons/icon-slider.svg" alt="">
                    <div class="caption">
                        <h5>Boost Your Exposure</h5>
                        <p>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
                    </div>
                </div>
                <div class="feature" v-if="!minimized">
                    <img src="../assets/icons/icon-drag.svg" alt="">
                    <div class="caption">
                        <h5>Drag & Drop Image</h5>
                        <p>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main-features",
        props:["minimized"]
    }
</script>

<style lang="scss" scoped>
    .features{
        display: flex;
        justify-content: space-around;
        .container{
            display: flex;
            justify-content: space-around;
            padding: 50px 0
        }
        .content{
            display: flex;
            flex-flow: wrap;
            max-width: 880px;
            width: 100%;
            @media screen and (max-width: 813px){
                max-width: 730px;
            }
            @media screen and (max-width: 689px){
                max-width: 490px;
            }
            @media screen and (max-width: 510px){
                max-width: 100%;
            }
            .feature{
                height: fit-content;
                max-width: 250px;
                width: 33.33%;
                margin: 25px 20px;
                transition: all ease-in-out .15s;
                @media screen and (max-width: 901px){
                    width: 28%;
                }
                @media screen and (max-width: 813px){
                    width: 27%;
                }
                @media screen and (max-width: 689px){
                    max-width: 200px;
                    width: 50%;
                }

                @media screen and (max-width: 510px){
                    max-width: 100%;
                    width: 100%;
                }

                &.second{
                    img{
                        margin-top: 30px!important;
                        margin-bottom: 36px!important;
                    }
                }
                img{
                    display: block;
                    margin: 10px auto 20px auto!important;
                }
                h5{
                    text-align: center;
                    margin-bottom: 15px;
                    font-size: 18px;
                }
                p{
                    display: block;
                    width: 100%;
                    font-size: 15px;
                    text-align: center;
                    margin-bottom: 0!important;
                    color: rgba(0,0,0,.5);
                }
            }
        }
        &.min{
            .feature{
                /*border: solid 1px black;*/
                &.hide{
                    display: none!important;
                    border: solid red 1px;
                }
            }
        }
    }


</style>