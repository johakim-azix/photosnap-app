<template>
    <hero-banner/>
    <about-beautiful-stories/>
    <about-designed-for-everyone/>
    <stories-grid/>
    <feature-grid/>
</template>

<script>
    // @ is an alias to /src
    import heroBanner from "@/components/home/hero-banner"
    import aboutBeautifulStories from "@/components/home/about-beautiful-stories"
    import aboutDesignedForEveryone from "@/components/home/about-designed-for-everyone"
    import storiesGrid from "@/components/home/stories-grid"
    import featureGrid from "@/components/home/features-grid"

    export default {
        name: 'HomePage',
        components:{
            heroBanner,
            aboutBeautifulStories,
            aboutDesignedForEveryone,
            storiesGrid,
            featureGrid
        }

    }
</script>