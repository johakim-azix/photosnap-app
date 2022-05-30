<script>
    import mainHeader from "@/components/Main-header"
    import mainFooter from "@/components/Main-footer"

    export default {
        name: 'App',
        components: {
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
    :root {
        --color-primary: hsl(0, 0%, 0%);
        --heading-primary: hsl(0, 0%, 0%);
        --color-secondary: hsl(0, 0%, 100%);
        --heading-secondary: hsl(0, 0%, 100%);
        --color-body-primary: rgba(0, 0, 0, .5);
        --color-body-secondary: rgba(255, 255, 255, .7);
    }

    body {
        background: var(--pure-white);
        padding-top: 54px;
        color: var(--color-body-primary);

        &::-webkit-scrollbar {
            width: 0;
        }

        @media screen and (max-width: 590px) {
            padding-top: 49px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        transition: all ease-in-out .15s;
    }

    .btn {
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

    .btn-primary {
        background: var(--color-primary);
        color: var(--color-secondary);

        &:hover {
            background: rgba(0, 0, 0, .2);
            color: var(--color-primary);
        }
    }

    .container {
        width: 100%;
        max-width: 1110px;
        padding: 0 10px;
    }

    .visible-small {
        display: none !important;
        @media screen and (max-width: 498px) {
            display: flex !important;
        }
    }

    .visible-large {
        display: flex !important;
        @media screen and (max-width: 498px) {
            display: none !important;
        }
    }

    @keyframes load {
        from {
            background: rgba(0, 0, 0, .1);
        }
        to {
            background: rgba(0, 0, 0, .3);
        }
    }
</style>
