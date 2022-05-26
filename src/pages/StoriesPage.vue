<template>
    <hero-banner/>
    <stories-grid/>
</template>

<script>
    import storiesGrid from "@/components/stories/stories-grid"
    import heroBanner from "@/components/stories/hero-banner"
    export default {
        name: "StoriesPage",
        components:{
            heroBanner,
            storiesGrid
        }
    }
</script>

<style scoped>

</style>