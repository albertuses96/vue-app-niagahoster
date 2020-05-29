<template>
    <div class="package-list-content flex flex-col justify-center items-center py-4 px-8 lg:px-8">
        <div class="title mb-8 text-xl">
            Module Lengkap untuk menjalankan Aplikasi PHP Anda
        </div>

        <div class="package-list w-full lg:px-16 mb-8 grid sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4">
            <div class="col flex flex-col mr-4 mt-2">
                <span v-for="item in packageList.slice(0, (packageList.length/4)+1)">
                    {{item}}
                </span>
            
            </div>
              <div class="col flex flex-col mr-4 mt-2 ">
                <span v-for="item in packageList.slice((packageList.length/4)+2, (packageList.length/4*2)+1)">
                    {{item}}
                </span>
            </div>
             <div class="col flex flex-col mr-4 mt-2 ">
                 <span v-for="item in packageList.slice((packageList.length/4*2)+2, (packageList.length/4*3)+2)">
                    {{item}}
                </span>
            </div>
            <div class="col flex flex-col mr-4 mt-2">
                   <span v-for="item in packageList.slice((packageList.length/4*3)+2, (packageList.length)+1)">
                    {{item}}
                </span>
            </div>
        </div>

        <div class="w-full flex justify-center">
        <button class="btn-cta bg-transparent border border-black rounded-full" :class="[
            theme === 'light' ? '' : 'border border-white',
        ]">Selengkapnya</button>

        </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'PackageListContent',
    computed: mapState({
        theme: state => state.theme
    }),
    data() {
        return {
            packageList: [
                'IonPHP',
                'apc',
                'apoy',
                'apm',
                'ares',
                'bcmath',
                'bcompiler',
                'big_int',
                'bitset',
                'bioomy',
                'br2_filter',
                'clamav',
                'coin_acceptor',
                'crack',
                'dba',
                'http',
                'huffman',
                'idn',
                'igbinary',
                'imagick',
                'imap',
                'inclued',
                'inotify',
                'interbase',
                'intl',
                'ioncube_loader',
                'ioncube_loader_4',
                'jsmin',
                'json',
                'ldap',
                'nd_pdo_mysql',
                'oauth',
                'pci8',
                'odbc',
                'opcache',
                'pdf',
                'pdo',
                'pdo_dblib',
                'pdo_firebird',
                'pdo_mysql',
                'pdo_odbc',
                'pdo_mysql',
                'pdo_sqlite',
                'pgsql',
                'phalcon',
                'stats',
                'stem',
                'stomp',
                'suhosin',
                'sybase_ct',
                'sysvmsg',
                'sysvsem',
                'tidy',
                'timezondb',
                'trader',
                'uploadprogress',
                'url_template',
                'uuid'
            ]
        }
    },
    mounted() {
    },
}
</script>