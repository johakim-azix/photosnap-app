<template>
    <div class="about-us">
        <div class="container">
            <div class="content " >
                <div class="image" ></div>
                <div class="text">
                    <div>
                        <h1>BEAUTIFUL STORIES EVERY TIME</h1>
                        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                        <a href="">VIEW THE STORIES<img src="../../assets/icons/icon-arrow-right-black.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about-beautiful-stories"
    }
</script>

<style lang="scss" scoped>
    .about-us {
        display: flex;
        width: 100%;
        justify-content: space-around;
        .container {
            padding: 0;
            max-width: 1440px;
        }
        .content {
            display: flex;
            justify-content: space-between;
            background: rgba(0,0,0,.1);
            animation: load ease-in-out .60s alternate infinite;
            @media screen and (max-width: 650px) {
                flex-wrap: wrap !important;
                overflow: hidden;
            }
            .image {
                max-width: 930px;
                width: 100%;
                height: 600px;
                background: rgba(0, 0, 0, .4) url("../../assets/images/desktop/beautiful-stories.jpg") center;
                background-blend-mode: overlay;
                @media screen and (max-width: 500px) {
                    height: 500px;
                }
                @media screen and (max-width: 400px) {
                    height: 400px;
                }
            }
            .text {
                background: var(--pure-white);
                max-width: 510px;
                width: 100%;
                overflow: hidden;
                padding: 60px 50px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                @media screen and (max-width: 650px) {
                    max-width: 100%;
                }
                &>div{
                    max-width: 407px;
                    width: 100%;
                    max-height: 324px;
                    padding: 20px;
                }
                h1 {
                    font-size: 40px;
                    font-weight: bold;
                    @media screen and (max-width: 650px) {
                        font-size: 32px;
                    }
                    @media screen and (max-width: 400px) {
                        font-size: 24px;
                    }
                }
                p {
                    margin: 20px 0;
                    font-size: 15px;
                    color: rgba(0, 0, 0, .7);
                }
                a {
                    color: var(--pure-black);
                    text-decoration: none;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    width: fit-content;
                    transition: all ease-in-out .15s;
                    font-size: 12px;
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