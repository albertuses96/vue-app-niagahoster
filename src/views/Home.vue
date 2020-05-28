<template>
  <div class="app flex flex-col w-full" :class="[
    theme === 'light' ? '' : 'bg-indigo-primary text-white'
  ]">
    <AppBar />
    <MainContent />
    <SecondaryContent />
    <PriceContent />
    <FeatureContent />
    <BenefitContent />
    <SupportFeature />
    <PackageListContent />
    <BannerCTA />
    <SocialMediaBanner />
    <TechnicalSupportBanner />
    <Footer />

  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'
import AppBar from '@/components/AppBar'
import MainContent from '@/components/MainContent.vue'
import SecondaryContent from '@/components/SecondaryContent.vue'
import PriceContent from '@/components/PriceContent.vue'
import FeatureContent from '@/components/FeatureContent.vue'
import BenefitContent from '@/components/BenefitContent.vue'
import SupportFeature from '@/components/SupportFeature.vue'
import PackageListContent from '@/components/PackageListContent.vue'
import BannerCTA from '@/components/BannerCTA.vue'
import SocialMediaBanner from '@/components/SocialMediaBanner.vue'
import TechnicalSupportBanner from '@/components/TechnicalSupportBanner.vue'
import Footer from '@/components/Footer.vue'
import {mapActions, mapState} from 'vuex'


export default {
  name: 'Home',
  components: {
    Button,
    AppBar,
    MainContent,
    SecondaryContent,
    PriceContent,
    FeatureContent,
    BenefitContent,
    SupportFeature,
    PackageListContent,
    BannerCTA,
    SocialMediaBanner,
    TechnicalSupportBanner,
    Footer
  },
  computed: mapState({
    theme: state => state.theme
  }),

  async mounted() {
    this.$store.dispatch('getData')
  },

  methods: {
    ...mapActions([
      'getData'
    ])
  }


}
</script>

<style lang="css">
  .app {
    width: 100%;
  }
</style>
