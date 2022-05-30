<template>
    <hero-banner/>
    <features-grid/>
    <beta-banner/>
</template>

<script>

    import heroBanner from "@/components/features/hero-banner"
    import featuresGrid from "@/components/features/features-grid"
    import betaBanner from "@/components/features/beta-banner"
    export default {
        name: "FeaturePage",
        components:{
            heroBanner,
            featuresGrid,
            betaBanner
        }
    }
</script>