<template>
    <div class="container py-8 px-4 sm:flex md:flex sm:flex-col-reverse md:flex-col-reverse lg:grid lg:grid-cols-2">
        <div class="content w-full flex flex-1 mr-8 flex-col">
            <h1 class="text-4xl font-bold">PHP Hosting</h1>
            <h2 class="font-sans text-2xl font-hairline mb-2" >Cepat, handal penuh dengan <br /> modul PHP yang Anda butuhkan</h2>
            <div>
                <ul>
                    <li class="flex flex-row mb-2" v-for="benefit in benefits" :key="index">
                        <div class="check-logo mr-2 bg-green-300">Check</div>
                        <span>{{benefit}}</span>
                    </li>
                </ul>
            
            </div>
        </div>
        <div class="logo flex items:center flex-2 justify-center items-center mb-4">
            <img src="../assets/main-content-logo.svg" alt="Logo" width="400px" height="100%">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainContent',
    data() {
        return {
            benefits: [
                'Solusi PHP untuk peforma query yang lebih cepat',
                'Konsumsi memori yang lebih rendah',
                'Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7',
                'Fitru Enskripsi IonCube dan Zend Guar Loaders'
            ]
        }
    }
}
</script>