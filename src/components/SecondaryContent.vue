<template>
    <div class="secondary-content container flex flex-row justify-center items-center py-8">
        <div class="feature flex flex-col mr-24 justify-center items-center" v-for="feature in features" :key="index">
            <img src="../assets/zen-guard.svg" alt="logo" width="203px" height="100%">
            <span>{{feature.text}}</span>

        </div>
    </div>
</template>

<script>
export default {
    name: 'SecondartContent',
    data() {
        return {
            features: [
                {
                    logo: "../assets/zen-guard.svg",
                    text: 'PHP Zen Guard Loader',
                },
                {
                    logo: "../assets/composer.svg",
                    text: "PHP Composer"
                },
                {
                    logo: "../assets/ioncube.svg",
                    text: 'PHP IonCube Loader'
                }
            ]
        }
    }
}
</script>