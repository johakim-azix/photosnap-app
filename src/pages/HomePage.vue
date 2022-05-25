<template>
    <main-header/>
    <img-grid/>
    <main-feature minimized="true"/>
    <main-footer/>
</template>

<script>
    // @ is an alias to /src
    import mainHeader from "@/components/Main-header"
    import mainFooter from "@/components/Main-footer"
    import mainFeature from "@/components/Main-features"
    import imgGrid from "@/components/image-grid"
    export default {
        name: 'HomePage',
        components:{
            mainHeader,
            mainFooter,
            mainFeature,
            imgGrid
        }

    }
</script>

<style lang="scss" scoped>

</style>