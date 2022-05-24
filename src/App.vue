<script>
    export default {
        name: 'App'
    }
</script>

<template>
    <router-view/>
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
        /*border: solid black 1px;*/
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*flex-wrap: wrap;*/
        width: 100%;
        max-width: 1000px;
        padding: 0 10px;
    }
</style>
