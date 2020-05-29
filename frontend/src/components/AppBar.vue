<template>
    <div class="app-bar ">
        <div class="app-bar-info flex flex-col lg:flex-row justify-between items-center py-4 ">
            <div class="app-bar-info-promo flex flex-row mb-4 lg:mb-0 w-full">
                
                <div class="relative">
                      <span class="ribbon">
                      </span>

                </div>
                <custom-icon class="z-20 ml-6 mt-2 text-white" name="tag" base-class="custom-icon"></custom-icon>
                <span class="ml-8 mr-4">Gratis Ebook 9 Cara Cerdas Menggunakan Domain</span>
                <div class="cursor-pointer" @click="hiddenBanner(true)">x</div>
            </div>
            <div class="contact  flex flex-row items-center overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden md:overflow-y-hidden lg:overflow-y-hidden  justify-end w-full">
                <div class="flex flex-row mr-2 justify-between">
                    <custom-icon class="mr-2" name="phone" base-class="custom-icon"></custom-icon>
                    <div class="text-sm">
                        0274-5205505
                    </div>
                </div>
                <div class="flex flex-row mr-2">
                    <custom-icon class="mr-2" name="headphones" base-class="custom-icon"></custom-icon>
                    <div class="text-sm">
                        Live Chat
                    </div>
                </div>
                <div class="flex flex-row mr-2">
                    <custom-icon class="mr-2" name="user" base-class="custom-icon"></custom-icon>
                    <div class="text-sm">
                        Member Area
                    </div>
                </div>
                <ToogleSwitch />

            </div>

        </div>
        <div class="main-app-bar  flex  flex-col md:flex-row lg:flex-row items-center justify-between px-4">
            <div class="main-logo w-full">
                <img v-if="theme === 'light'" src="../assets/niagahoster-logo.png" alt="Logo" width="250px">
                <img v-else src="../assets/nh-logo.svg" alt="Logo" width="250px">
            </div>
    
            <div class="main-nav-app-bar overflow-x-scroll  md:overflow-x-hidden lg:overflow-x-hidden md:overflow-y-hidden lg:overflow-y-hidden  w-full flex justify-start lg:justify-end mr-4 ">
                <ul class="flex flex-row  md:flex-row lg:flex-row mt-4">
                    <li class="m-2" v-for="nav in navigationLink" :key="index">
                        <router-link :to="nav.path">{{nav.label}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
import {mapState} from 'vuex'
import ToogleSwitch from '@/components/ToogleSwitch.vue'

export default {
    name: 'AppBar',
    components: {
        customIcon,
        ToogleSwitch
    },
    computed: mapState({
        theme: state => state.theme
    }),
    data() {
        return {
            navigationLink: [{
                    path: '/hosting',
                    label: 'Hosting',
                },
                {
                    path: '/domain',
                    label: 'Domain',

                },
                {
                    path: '/server',
                    label: 'Server'
                },
                {
                    path: '/website',
                    label: 'Website'
                },
                {
                    path: '/afiliasi',
                    label: 'Afiliasi'
                },
                {
                    path: '/promo',
                    label: 'Promo'
                },
                {
                    path: '/payments',
                    label: 'Pembayaran'
                },
                {
                    path: '/review',
                    label: 'Review'
                },
            ],
            baseClass: 'v-icon',
            status: false
        }
    },
    methods: {
        hiddenBanner(value) {
            this.hidden = value
        }
    },
    mounted() {
    },
}
</script>

<style lang="css">
.v-icon,
.custom-icon {
    width: 24px;
}


.ribbon:before, .ribbon:after {
    content: "";
    display: block;
    position: absolute;
    height: 20px;
    top: 0px;
    bottom: -1px;
    left: 20px;
    border: 15px solid #53b0de;
}

.ribbon:before {
    border-bottom-color: transparent;
    bottom: -20px;
    top: 20px;
    left: 20px;

}
</style>