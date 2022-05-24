<template>
    <main-header/>
    <main-feature/>
    <main-footer/>
</template>

<script>
    // @ is an alias to /src
    import mainHeader from "@/components/Main-header"
    import mainFooter from "@/components/Main-footer"
    import mainFeature from "@/components/Main-features"
    export default {
        name: 'HomePage',
        components:{
            mainHeader,
            mainFooter,
            mainFeature
        }

    }
</script>

<style lang="scss" scoped>

</style>