<template>
    <hero-banner/>
    <pricing-grid/>
    <beta-banner/>
</template>

<script>
    import heroBanner from  "@/components/pricing/hero-banner"
    import pricingGrid from  "@/components/pricing/pricing-grid"
    import betaBanner from  "@/components/features/beta-banner"
    export default {
        name: "PricingPage",
        components:{
            heroBanner,
            pricingGrid,
            betaBanner
        }
    }
</script>

<style scoped>

</style>