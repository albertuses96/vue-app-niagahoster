<template>
    <div class="package-list-content container flex flex-col justify-center items-center py-4 px-8">
        <div class="title mb-8">
            Module Lengkap untuk menjalankan Aplikasi PHP Anda
        </div>

        <div class="package-list w-full px-16 mb-8 sm:flex sm:flex-row lg:grid justify-center items-center lg:grid-cols-4">
            <div class="col flex flex-col mr-4 ">
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
            </div>
              <div class="col flex flex-col mr-4 ">
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
            </div>
             <div class="col flex flex-col mr-4 ">
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
            </div>
            <div class="col flex flex-col mr-4 ">
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
                <span>IonPHP</span>
            </div>
        </div>

        <button class="btn-cta bg-transparent border border-black rounded-full">Selengkapnya</button>
    </div>
</template>

<script>
export default {
    name: 'PackageListContent',
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
                'pdo_dblib'
                            ]
        }
    }
}
</script>