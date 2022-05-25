<template>
    <div class="header">
        <div class="container">
            <div class="content">
                <router-link :to="{name:'homePage'}" class="logo">
                    <img src="../assets/logos/logo-header.svg" alt="header logo">
                </router-link>
                <div class="nav">
                    <router-link :to="{name:'stories'}" class="nav__link" href="">STORIES</router-link>
                    <router-link :to="{name:'features'}" class="nav__link" href="">FEATURES</router-link>
                    <router-link :to="{name:'pricing'}" class="nav__link" href="">PRICING</router-link>
                </div>
                <a class="btn btn-primary" href="">GET AN INVITE</a>
                <div class="btn-menu" @click="toggleDropMenu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <div class="drop-menu " >
                    <hr>
                    <router-link :to="{name:'stories'}" class="nav__link" href="">STORIES</router-link>
                    <router-link :to="{name:'features'}" class="nav__link" href="">FEATURES</router-link>
                    <router-link :to="{name:'pricing'}" class="nav__link" href="">PRICING</router-link>
                    <hr>
                    <a class="btn btn-primary" href="">GET AN INVITE</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main-header",
        methods:{
            toggleDropMenu(){
                document.getElementsByClassName("drop-menu")[0].classList.toggle("open")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes header_in {
        0%{
            margin-top: -200%;
        }

        50%{
            margin-top: 3%;
        }
        70%{
          margin-top: -2%;
        }
        85%{
            margin-top: 0;
        }
        95%{
            margin-top: -1%;
        }
        100%{
            margin-top: 0;
        }
    }

    @keyframes border-fade-out {
        0%{
            border-bottom: solid rgba(0,0,0,.2) 1px;
        }
        50%{
            border-bottom: solid rgba(0,0,0,.05) 3px;
        }
        100%{
            border-bottom: solid rgba(0,0,0,0) 1px;
        }
    }

    .header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;
        display: flex;
        border-bottom: solid rgba(0,0,0,.2) 1px;
        margin-top: -200%;
        align-items: flex-end;
        justify-content: space-around;
        background: var(--pure-white);
        animation: ease-in-out 1s header_in forwards 1s, ease-in-out 1s border-fade-out forwards 1.5s;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 10px 0;
        align-items: center;
        font-size: 12px;
        font-weight: bold;

        .logo {}

        & > .btn-primary {
            padding: 10px 20px;
            border-radius: 2px;
            display: block;
            @media screen and (max-width: 590px){
                display: none;
            }
        }

        .btn-menu{
            border: solid rgba(0,0,0,.2) 1px;
            border-radius: 2px;
            padding: 2px 5px;
            width: 20px;
            display: none;
            .bar{
                background: var(--pure-black);
                height: 2px;
                display: block;
                width: 100%;
                margin: 4px 0;
            }
            @media screen and (max-width: 590px) {
                display: block;
            }
        }
    }

    .drop-menu{
        width: 100%;
        display: none;
        hr{
            border: 0;
            background: rgba(0,0,0,.2);
            height: .5px;
            margin-top: 5px;
        }

        a{
            display: block;
            text-align: center;
            margin: 5px 0;
            padding: 5px;
        }

        .btn-primary{
            padding: 10px ;
        }

        /*@media screen and (max-width: 590px) {*/
        /*    display: block;*/
        /*}*/
    }

    .nav{
        display: flex;
        justify-content: space-between;
        &__link{
            display: inline-block;
            margin: 0 5px;
            padding: 5px 10px;
            text-decoration: none;
            color: black;
            transition: all ease-in-out .15s;
            &:hover{
                color: rgba(0,0,0,.4);
            }
        }
        @media screen and (max-width: 590px){
            display: none;
        }
    }

    .open{
        display: none;
        @media screen and (max-width: 590px){
            display: block;
        }
    }

</style>