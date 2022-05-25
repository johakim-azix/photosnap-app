<template>
    <div class="about-us">
        <div class="container">
            <div class="content " :class="{revert:revert}">
                <span></span>
                <div class="text">
                    <div>
                        <h1>{{title}}</h1>
                        <p>{{text}}</p>
                        <a href="">VIEW THE STORIES<img src="../assets/icons/icon-arrow-right-black.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main-about-us",
        props: ["title", "text", "revert"]
    }
</script>

<style lang="scss" scoped>
    .about-us {
        display: flex;
        width: 100%;
        justify-content: space-around;

        .container {
            padding: 0;
        }

        .content {
            display: flex;
            justify-content: space-between;
            background: var(--pure-black);
            @media screen and (max-width: 500px) {
                flex-wrap: wrap !important;
                flex-flow: inherit;
                overflow: hidden;
            }
            &.revert {
                flex-flow: row-reverse;
            }
            span {
                display: block;
                min-width: 20%;
                height: 300px;
             }
            .text {
                background: var(--pure-white);
                max-width: 350px;
                height: 300px;
                width: 100%;
                overflow: hidden;
                padding: 60px 50px;
                display: flex;
                align-items: center;
                @media screen and (max-width: 500px) {
                    max-width: 100%;
                }
                h1 {
                    font-size: 40px;
                }
                p {
                    margin: 20px 0;
                    font-size: 15px;
                    color: rgba(0, 0, 0, .4);
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