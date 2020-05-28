<template>
    <div class="secondary-content  flex flex-col md:flex-col lg:flex-row justify-center items-center py-8">
        <div class="feature flex w-full lg:w-64 flex-col  justify-center items-center" v-for="feature in features" :key="index">
            <div class="h-64 flex justify-center  items-center" >
            <img :src="feature.logo" alt="logo"  width="150px" >

            </div>
            <span>{{feature.text}}</span>

        </div>
    </div>
</template>

<script>

import ComposerIcon from '@/assets/composer.png'
import ZenGuardIcon from '@/assets/ZenGuard.png'
import IonCubeIcon from '@/assets/ioncube.png'


export default {
    name: 'SecondartContent',
    data() {
        return {
            features: [
                {
                    logo: ZenGuardIcon,
                    text: 'PHP Zen Guard Loader',
                },
                {
                    logo: ComposerIcon,
                    text: "PHP Composer"
                },
                {
                    logo: IonCubeIcon,
                    text: 'PHP IonCube Loader'
                }
            ]
        }
    }
}
</script>