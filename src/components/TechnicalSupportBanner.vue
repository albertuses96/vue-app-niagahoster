<template>
    <div class="technical-support-banner py-8 px-8 bg-blue-primary text-white justify-between flex flex-col lg:flex-row items-center">
        <div class="text text-2xl mr-4 lg:mr-16 mb-4"><span>Perlu <strong>BANTUAN? </strong> Hubungi Kami: <strong>0274-5305505</strong></span></div>
        <button class="btn-cta rounded-full bg-transparent border border-white py-2 px-4 flex flex-row items-center">
                <div class="logo mr-2">
                      <custom-icon class="z-20 ml-6 text-white" name="headphones" base-class="custom-icon"></custom-icon>
                </div>
                <span>Live Chat</span>
            </button>
    
    </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'

export default {
    name: 'TechnicalSupportBanner',
    components: {
        customIcon,
    },
}
</script>

<style lang="css">
.btn-cta {
    max-width: 200px;
}

.v-icon,
.custom-icon {
    width: 24px;
}

</style>