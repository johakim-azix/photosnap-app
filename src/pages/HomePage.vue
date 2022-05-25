<template>
    <about-us :revert="false" title="BEAUTIFUL STORIES EVERY TIME" text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."/>
    <about-us :revert="true" title="DESIGNED FOR EVERYONE" text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."/>
    <img-grid :minimized="true"/>
    <main-feature :minimized="true"/>
</template>

<script>
    // @ is an alias to /src

    import mainFeature from "@/components/Main-features"
    import imgGrid from "@/components/image-grid"
    import aboutUs from "@/components/Main-about-us"
    export default {
        name: 'HomePage',
        components:{
            aboutUs,
            imgGrid,
            mainFeature
        }

    }
</script>

<style lang="scss" scoped>

</style>