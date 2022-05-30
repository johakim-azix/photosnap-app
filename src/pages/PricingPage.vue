<template>
    <hero-banner/>
    <pricing-grid/>
    <pricing-tab/>
    <beta-banner/>
</template>

<script>
    import heroBanner from  "@/components/pricing/hero-banner"
    import pricingGrid from  "@/components/pricing/pricing-grid"
    import pricingTab from  "@/components/pricing/pricing-tab"
    import betaBanner from  "@/components/features/beta-banner"
    export default {
        name: "PricingPage",
        components:{
            heroBanner,
            pricingGrid,
            pricingTab,
            betaBanner
        }
    }
</script>

<style scoped>

</style>