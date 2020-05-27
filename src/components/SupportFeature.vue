<template>
    <div class="suppoert-feature container py-4 px-4 flex flex-col justify-center items-center ">
        <div class="title text-2xl font-thin mb-4">
            Mendukung Penuh Framework Laravel
        </div>
        <div class="w-full main-content px-8 py-4 flex flex-row">
            <div class="content flex flex-col mr-8">
                <div class="notes mb-4">
                    Tak perlu menggunakan dedicated server ataupun VPS yang mahal. <br />
                    Layanan  PHP yang murah kami menudkung penuh framework favorit Anda.

                </div>
                <div class="feature-list flex flex-col mb-4">
                    <div class="flex flex-row mb-2">
                        <div class="check-logo mr-4 bg-green-300">
                            Check
                        </div>
                        <div class="feature"><span>Install Laravel <strong>1 Klik</strong> dengan Softaculous Installer</span></div>
                    </div>
                     <div class="flex flex-row mb-2">
                        <div class="check-logo mr-4 bg-green-300">
                            Check
                        </div>
                        <div class="feature"><span>Install Laravel <strong>1 Klik</strong> dengan Softaculous Installer</span></div>
                    </div>
                       <div class="flex flex-row mb-2">
                        <div class="check-logo mr-4 bg-green-300">
                            Check
                        </div>
                        <div class="feature"><span>Install Laravel <strong>1 Klik</strong> dengan Softaculous Installer</span></div>
                    </div>
                
                </div>
                <div class="notes mb-4">Nb: Composer dan SSH hanya tersedia pada paket Personal dan Bisnis </div>
                <button class="btn-cta rounded-full bg-blue-500 py-2 px-2 font-bold text-white">Pilih Hosting Anda</button>
            </div>
            <div class="logo">
                Logo
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'SupportFeature',
    data() {
        return {
            featureList: [
                'Laravel 1 klik dengan Softaculous Installer',
                'Mendukung ekstensi PHP MCrypt, phar, mbstring, json, dan fileinfo',
                'Tersedia Composer dan SSH untuk menginstall packages pilihan Anda.'
            ]
        }
    }
}
</script>

<style lang="css">
    .btn-cta {
        max-width: 250px;
    }
    
</style>