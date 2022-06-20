<template>
    <div class="img-grid">
        <div class="container">
            <div class="item">
                <img src="../../assets/images/desktop/mountains.jpg" alt="">
                <div class="cover">
                    <div class="caption">
                        <small>April 16th 2020</small>
                        <strong>The Mountains</strong>
                        <small>by John Appleseed</small>
                        <hr>
                        <a>READ STORY <img src="../../assets/icons/icon-arrow-right-white.svg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/desktop/cityscapes.jpg" alt="">
                <div class="cover">
                    <div class="caption">
                        <small>April 14th 2020</small>
                        <strong>Sunset Cityscapes</strong>
                        <small>by Benjamin Cruz</small>
                        <hr>
                        <a>READ STORY <img src="../../assets/icons/icon-arrow-right-white.svg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/desktop/18-days-voyage.jpg" alt="">
                <div class="cover">
                    <div class="caption">
                        <small>April 11th 2020</small>
                        <strong>18 Days Voyage</strong>
                        <small>by Alexei Borodin</small>
                        <hr>
                        <a>READ STORY <img src="../../assets/icons/icon-arrow-right-white.svg" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="../../assets/images/desktop/architecturals.jpg" alt="">
                <div class="cover">
                    <div class="caption">
                        <small>April 9th 2020</small>
                        <strong>Architecturals</strong>
                        <small>by Samantha Brooke</small>
                        <hr>
                        <a>READ STORY <img src="../../assets/icons/icon-arrow-right-white.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "stories-grid"
    }
</script>

<style lang="scss" scoped>
    .img-grid{
        height: fit-content;
        display: flex;
        justify-content: space-around;
        .container{
            display: flex;
            flex-flow: wrap;
            padding: 0!important;
            background: rgba(0,0,0,.07);
            max-width: 1440px;
            width: 100%;
            transition: all ease-in-out .30s;
        }
        .item{
            width: 25%;
            height: fit-content;
            position: relative;
            transition: all ease-in-out .30s;
            min-height: 250px;
            background: rgba(0,0,0,.1);
            animation: load 1s ease-in-out alternate infinite;
            @media screen and (max-width: 900px){
                width: 33.33%;
            }
            @media screen and (max-width: 768px){
                width: 50%;
            }
            @media screen and (max-width: 400px){
                width: 100%;
            }
            &:after{
                content: "";
                display: block;
                background-image: url("../../assets/icons/img-hover-state-indicator.png");
                background-repeat: no-repeat;
                width: 100%;
                height: 7px;
                position: absolute;
                border-bottom: 0;
                opacity: 0;
                transition: opacity ease-in-out .15s;
            }
            &:hover{
                transform: translateY(-6px);
                &:after{
                    opacity: 1;
                }
            }
            img{
                width: 100%;
                margin-bottom: -5px;
            }
            .cover{
                background: linear-gradient(transparent, rgba(0,0,0,.9) 90%);
                width: 100%;
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                right: 0;
                bottom: -2px;
            }
            .caption{
                height: fit-content;
                position: absolute;
                bottom: 20px;
                left: 20px;
                right: 20px;
                color: var(--color-secondary);
                padding: 10px 0;
                &>*{
                    display: block;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }
                small{
                    font-size: 13px;
                    margin: 5px 0;
                }
                hr{
                    margin: 10px 0;
                    background: var(--color-secondary);
                    opacity: .5;
                    border: 0;
                    height: 1px;
                }
                strong{
                    font-size: 18px;
                }
                a{
                    font-size: 12px;
                    color: var(--color-secondary);
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    img{
                        width: 30px;
                    }
                }
            }
        }
    }
</style>