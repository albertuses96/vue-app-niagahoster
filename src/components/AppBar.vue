<template>
    <div class="app-bar">
        <div class="app-bar-info flex flex-row justify-between">
            <div class="app-bar-info-promo flex flex-row ">
                <div class="price-tag-logo bg-blue-400">Logo</div>
                <span>Gratis Ebook 9 Cara Cerdas Menggunakan Domain</span>
                <div>X</div>
            </div>
            <div class="contact flex flex-row">
                <div class="flex flex-row mr-2 justify-between">
                    <div class="logo mr-2">
                        Logo
                    </div>
                    <div class="text">
                        0274-5205505
                    </div>
                </div>
                <div class="flex flex-row mr-2">
                      <div class="logo mr-2">
                        Logo
                    </div>
                    <div class="text">
                        Live Chat
                    </div>
                </div>
                <div class="flex flex-row mr-2">
                    <div class="logo mr-2">
                        Logo 
                    </div>
                    <div class="text">
                        Member Area
                    </div>
                </div>
            </div>
        </div>
        <div class="main-app-bar  flex flex-row items-center justify-between ">
            <div class="main-logo">
                <img src="../assets/niagahoster-logo.png" alt="Logo" width="200px">
            </div>

            <div class="main-nav-app-bar">
                <ul class="flex flex-row">
                   <li class="m-2" v-for="nav in navigationLink" :key="index">
                       <router-link :to="nav.path">{{nav.label}}</router-link>
                   </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppBar',
    data() {
        return {
            navigationLink: [
                {
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
            ]
        }
    }
}
</script>