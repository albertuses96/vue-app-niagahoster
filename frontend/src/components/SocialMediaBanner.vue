<template>
    <div class="social-media-banner py-4 px-8 bg-gray-100 flex flex-col lg:flex-row justify-between items-center" :class="[
                    theme === 'light' ? '' : 'bg-indigo-primary text-white'
                ]">
        <div class="title font-bold mr-16 w-full text-lg">Bagikan jika anda menyukai halaman ini</div>
        <div class="social-media-list flex w-full mt-4 justify-end">
            <div class="row flex flex-row items-center">
                <div class="logo mr-4">
                    <img src="../assets/facebook.svg" alt="logo" width="32px">
                </div>
                <div class="count border border-gray-400 bg-gray-200 py-2 px-2 mr-4" :class="[
                        theme === 'light' ? ' text-gray-700' : 'bg-indigo-primary text-white'
                    ]">
                    80K
                </div>
                <div class="logo mr-4">
                    <img src="../assets/twitter.svg" alt="logo" width="32px">
                </div>
    
                <div class="count border border-gray-400 bg-gray-200 py-2 px-2 mr-4" :class="[
                        theme === 'light' ? ' text-gray-700' : 'bg-indigo-primary text-white'
                    ]">
                    80K
                </div>
                <div class="logo mr-4">
                    <img src="../assets/google-plus.svg" alt="logo" width="32px">
                </div>
    
                <div class="count border border-gray-400 bg-gray-200 py-2 px-2 mr-4" :class="[
                        theme === 'light' ? ' text-gray-700' : 'bg-indigo-primary text-white'
                    ]">
                    80K
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
    name: 'SocialMediaBanner',
    computed: mapState({
        theme: state => state.theme
    }),

}
</script>