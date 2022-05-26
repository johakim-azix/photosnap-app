<script>
    import mainHeader from "@/components/Main-header"
    import mainFooter from "@/components/Main-footer"
    export default {
        name: 'App',
        components:{
            mainHeader,
            mainFooter
        }
    }
</script>

<template>
    <main-header/>
    <router-view/>
    <main-footer/>
</template>

<style lang="scss">
    :root{
        --pure-black: hsl(0, 0%, 0%);
        --light-grey: hsl(0, 0%, 87%);
        --pure-white: hsl(0, 0%, 100%);
        --main-accent: rgba(255, 197, 147) 28°, 100%, 79%;
        --main-accent-2: rgba(18, 113, 152) 329°, 36%, 59%;
        --main-accent-3: rgba(90, 119, 255) 229°, 100%, 67%;
    }

    body{
        background: var(--pure-white);
        padding-top: 58px;
    }

    *{
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    .btn{
        outline: 0;
        border: 0;
        cursor: pointer;
        transition: all ease-in-out .15s;
        text-decoration: none;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        height: fit-content;
    }

    .btn-primary{
        background: var(--pure-black);
        color: var(--pure-white);

        &:hover{
            background: rgba(0,0,0,.2);
            color: var(--pure-black);
        }

    }

    .container{
        width: 100%;
        max-width: 1110px;
        padding: 0 10px;
    }
    .visible-small{
        display: none!important;
        @media screen and (max-width: 498px) {
            display: flex!important;
        }
    }
    .visible-large{
        display: flex!important;
        @media screen and (max-width: 498px) {
            display: none!important;
        }
    }
    @keyframes load {
        from{
            background: rgba(0,0,0,.1);
        }
        to{
            background: rgba(0,0,0,.3);
        }
    }
</style>
