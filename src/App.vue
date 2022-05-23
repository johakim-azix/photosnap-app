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
        background: rgba(0,0,0,.2);
    }

    *{
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }
</style>
