<template>
    <div class="benefit-content container py=8 flex flex-col justify-center items-center px-8">
        <div class="title text-2xl font:thin">
            Semua Paket Hosting Sudah Termasuk
        </div>
        <div class="content-container sm:flex sm:flex-col lg:grid lg:grid-cols-3 lg:gap-16 justify-center items-center py-4 ">
            <div class="content flex flex-col justify-center items-center " v-for="benefit in benefits" :key="index">
                <div class="logo">
                    <img :src="benefit.logo" alt="logo"  width="100px">
                </div>

                <div class="title-content flex flex-col text-center mt-4">
                    <div class="main-title-content font-bold">
                        {{benefit.title}}
                    </div>
                    <div class="subtitle">
                        {{benefit.subtitle}}
                    </div>
                </div>

                
            </div>
                
            </div>
        
        </div>
    </div>
</template>

<script>

import PHPIcon from '@/assets/php_version.svg'
import MySQLIcon from '@/assets/my_sql.svg'
import CPanelIcon from '@/assets/cpanel.svg'
import UptimeGuaranteeIcon from '@/assets/uptime_guarantee.svg'
import InnoDBIcon from '@/assets/innodb.svg'
import MySqlRemoteIcon from '@/assets/mysql_remote.svg'

export default {
    name: 'BenefitContent',
    data() {
        return{
            benefits: [
                {
                    logo: PHPIcon,
                    title: "PHP Semua Versi",
                    subtitle: 'Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka Anda!'
                },
                       {
                    logo: MySQLIcon,
                    title: "MySQL Versi 5.6",
                    subtitle: 'Nikmati MySQL versi terbaru, tercepat dan kaya akan fitur'
                },
                       {
                    logo: CPanelIcon,
                    title: "Panel Hosting cPanel",
                    subtitle: 'Kelola website dengan panel canggaih yang familiar di hati anda'
                },
                       {
                    logo: UptimeGuaranteeIcon,
                    title: "Garansi Uptime 99.9%",
                    subtitle: 'Data center yang mendukung kelangsungan website Anda 24/7'
                },
                       {
                    logo: InnoDBIcon,
                    title: "Database InnoDB Unlimited",
                    subtitle: 'Jumlah dan ukuran database yang tumbuh sesuai kebutuhan Anda!'
                },
                       {
                    logo: MySqlRemoteIcon,
                    title: "Wildcard Remote MySQL",
                    subtitle: 'Mendukung s/d 25 max_user_connections dan 100 max_connections'
                },
            ]
        }
    }
}
</script>