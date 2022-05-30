<template>
    <div class="features">
        <div class="container">
            <div class="content">
                <div class="feature">
                    <img src="../../assets/icons/icon-responsive.svg" alt="">
                    <div class="caption">
                        <h5>100% Responsive</h5>
                        <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                    </div>
                </div>
                <div class="feature">
                    <img src="../../assets/icons/icon-forever.svg" alt="">
                    <div class="caption">
                        <h5>No Photo Upload Limit</h5>
                        <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                    </div>
                </div>
                <div class="feature">
                    <img src="../../assets/icons/icon-bullhorn.svg" alt="">
                    <div class="caption">
                        <h5>Available to Embed</h5>
                        <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                    </div>
                </div>
                <div class="feature" >
                    <img src="../../assets/icons/icon-www.svg" alt="">
                    <div class="caption">
                        <h5>Custom Domain</h5>
                        <p>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
                    </div>
                </div>
                <div class="feature" >
                    <img src="../../assets/icons/icon-slider.svg" alt="">
                    <div class="caption">
                        <h5>Boost Your Exposure</h5>
                        <p>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
                    </div>
                </div>
                <div class="feature" >
                    <img src="../../assets/icons/icon-drag.svg" alt="">
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
        name: "features-grid"
    }
</script>

<style lang="scss" scoped>
    .features {
        display: flex;
        justify-content: space-around;
        padding: 0;
        margin: 50px 0;
        .container {
            display: flex;
            justify-content: space-around;
            padding: 50px 20px!important;
            max-width: 1110px;
            @media screen and (max-width: 546px) {
                padding: 30px 0!important;
            }
        }

        .content {
            display: flex;
            flex-flow: wrap;
            max-width: 970px;
            width: fit-content;
            @media screen and (max-width: 1006px) {
                max-width: 900px;
            }
            @media screen and (max-width: 903px) {
                max-width: 800px;
            }
            @media screen and (max-width: 752px) {
                max-width: 650px;
            }

            @media screen and (max-width: 689px) {
                max-width: 640px;
            }
            @media screen and (max-width: 512px) {
                max-width: 100%;
            }

            .feature {
                height: fit-content;
                max-width: 300px;
                width: 33.33%;
                margin: 25px 10px;
                transition: all ease-in-out .15s;
                @media screen and (max-width: 1006px) {
                    width: 31%;
                }
                @media screen and (max-width: 903px) {
                    width: 30.5%;
                }
                @media screen and (max-width: 752px) {
                    width: 29.8%;
                }

                @media screen and (max-width: 689px) {
                    max-width: 300px;
                    width: 46%;
                }

                @media screen and (max-width: 512px) {
                    max-width: 70%;
                    width: 100%;
                    margin-right: auto;
                    margin-left: auto;
                }
                @media screen and (max-width: 400px) {
                    max-width: 90%;
                }

                img {
                    display: block;
                    margin: 10px auto 20px auto !important;
                    height: 72px;
                    width: 72px;
                }

                h5 {
                    text-align: center;
                    margin-bottom: 15px;
                    font-size: 18px;
                    color: var(--color-primary);
                }

                p {
                    display: block;
                    width: 100%;
                    font-size: 15px;
                    text-align: center;
                    margin-bottom: 0 !important;
                }
            }
        }
    }
</style>