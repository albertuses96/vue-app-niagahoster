<template>
    <div class="feature-content  flex flex-col justify-center items-center py-4 px-4">
        <div class="main-title font-thin text-2xl">Powerful dengan Limit PHP yang Lebih Besar</div>
        <div class="main-feature-content flex flex-col md:flex-row lg:flex-row py-4 w-full px-0 lg:px-64">
            <div class="content mb-2 md:mr-4 w-full lg:mr-4 ">
                <div v-for="(item, index) in data.slice(0,3)" :key="index">
                    <div class="flex flex-row  w-full border border-gray-200 py-4 px-4" :class="[
                              index === 1 ? 'bg-gray-200' : 'bg-white',
                              theme === 'light' ? '' : 'bg-indigo-primary'
                            ]">
                        <div class="check-logo mr-8">
    
                            <img src="../assets/correct.svg" alt="logo" width="20px">
                        </div>
                        <div class="content w-full text-center">
                            {{item}}
                        </div>
                    </div>
    
    
                </div>
            </div>
            <div class="content mb-2 md:mr-4 lg:mr-4 w-full ">
                <div v-for="(item, index) in data.slice(3, data.length)" :key="index" class="w-full">
                    <div class="flex flex-row  w-full border border-gray-200 py-4 px-4" :class="[
                              index === 1 ? 'bg-gray-200' : 'bg-white',
                              theme === 'light' ? '' : 'bg-indigo-primary'
                            ]">
                        <div class="check-logo mr-8">
    
                            <img src="../assets/correct.svg" alt="logo" width="20px">
                        </div>
                       <div class="content w-full text-center">
                            {{item}}
                        </div>
                    </div>
    
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name: 'FeatureContent',
    computed: mapState({
        theme: state => state.theme
    }),
    data() {
        return {
            data: [
                'max execution time 300s',
                'max execution time 300s',
                'php memory limit 1024 Mb',
                'post max size 128 mb',
                'upload max filesize 128 mb',
                'max input vars 1500'
            ],
            gray: false
        }
    },
    method: {
        isContentGrey(index) {
            if (index === 1) {
                this.gray = true
                return true

            } else {
                return false

            }
        }
    }
}
</script>