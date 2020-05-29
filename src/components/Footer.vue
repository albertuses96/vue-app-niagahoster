<template>
    <div class="footer py-8 px-8 bg-indigo-primary flex flex-col text-white">
        <div class="footer-nav lg:grid sm:flex lg:grid-cols-4 sm:flex-col gap-8">
            <div class="col mb-4" >
                <div class="title-footer-nav mb-4 font-bold text-indigo-secondary">
                    HUBUNGI KAMI
                </div>
                <div class="content flex flex-col">
                    <span>0274-5305505</span>
                    <span>Senin - Minggu</span>
                    <span>24 Jam Non Stop</span>
                    <span>Jl. Selokan Mataram Monjali,<br /> KarangJati MT 1/304 <br/> Sinduadi Mlati, Sleman <br/> Yogyakarta 55284</span>
                </div>
            </div>
            <div v-for="item in footerNav" :key="index" class="col mb-4">
                <div class="title-footer-nav mb-4 font-bold text-indigo-secondary">
                    {{item.titleNav}}
                </div>
                <div v-for="list in item.listNav" class="content flex flex-col cursor-pointer">
                    <span>{{list[0]}}</span>
                </div>
            </div>
    
    
            <div class="col mb-4">
                <div class="title-footer-nav mb-4 font-bold text-indigo-secondary">
                    NEWSLETTER
                </div>
                <div class="content flex flex-col">
                    <div class="bg-white w-full rounded-full flex flex-row px-4 py-2 mb-4">
                        <input type="email" placeholder="Email" class="email-input text-gray-500">
                        <button class="bg-blue-primary py-2 px-2 rounded-full flex-1">Berlangganan</button>
                    </div>
                    <span>Dapatkan promo dan konten menarik dari penyedia hosting terbaik</span>
    
                </div>
    
            </div>
    
            <div class="col flex flex-row items-center px-4 mb-4">
                <div v-for="item in SocialMedia" class="mr-8">
                    <img :src="item.logo" alt="logo" width="48px">
                </div>
    
            </div>
    
    
    
        </div>
    
        <div class="payment-list flex flex-col mt-4 ">
            <div class="title mb-4 font-bold text-indigo-secondary">
                PEMBAYARAN
            </div>
            <div class="payment-list flex flex-row mb-8 flex-wrap">
                <span v-for="item in paymentList"class="mr-2 w-16">
                    <img :src="item" alt="logo" width="100%">
                </span>
    
            </div>
    
            <div class="explanation">
                Aktivasi instan dengan e-Payment Hosting dan domain langsung aktif!
            </div>
        </div>
        <div class="copyright mt-4 flex flex-col  lg:flex-row">
            <div class="copyright mr-4 lg:mr-16 flex-1 mb-4">
                Copyright &copy; 2016 Niagahoster | Hosting powered by PHP7, CloudLinux, BitNinja and DC Biznet Technovillage Jakarta <br /> Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology
            </div>
            <div class="term-of-services flex-2">
                Syarat dan Ketentuan | Kebijakan Privasi
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import FacebookIcon from '@/assets/facebook-white.svg'
import TwitterIcon from '@/assets/twitter-white.svg'
import GoogleIcon from '@/assets/google-white.svg'
import BCAIcon from '@/assets/bca.svg'
import MandiriIcon from '@/assets/mandiri.svg'
import BRIIcon from '@/assets/bri.svg'
import CIMBIcon from '@/assets/cimb.svg'
import BIIIcon from '@/assets/bii.svg'
import AltoIcon from '@/assets/alto.svg'
import ATMBersamaIcon from '@/assets/atm-bersama.svg'
import PaypalIcon from '@/assets/paypal.svg'
import IndomartIcon from '@/assets/indomart.svg'
import AlfamartIcon from '@/assets/alfamart.svg'
import PegadaianIcon from '@/assets/pegadaian.svg'
import PosIcon from '@/assets/pos.svg'
import OVOIcon from '@/assets/ovo.svg'
import GopayIcon from '@/assets/gopay.svg'
import VisaIcon from '@/assets/visa.svg'
import MastercardIcon from '@/assets/master.svg'
import BNIIcon from '@/assets/bni.svg'

export default {
    name: 'Footer',
    data() {
        return {
            footerNav: [{
                    titleNav: 'LAYANAN',
                    listNav: [
                        ['Domain'],
                        ['Shared Hosting'],
                        ['Cloud VPS Hosting'],
                        ['Managed VPS Hosting'],
                        ['Web Builder'],
                        ['Keamanan SSL / HTTPS'],
                        ['Jasa Pembuatan Website'],
                        ['Program Afiliasi']
                    ]
                },
                {
                    titleNav: 'SERVICE HOSTING',
                    listNav: [
                        ['Hosting Murah'],
                        ['Hosting Indonesia'],
                        ['Hosting Singapura SG'],
                        ['Hosting PHP'],
                        ['Hosting Wordpress'],
                        ['Hosting Laravel'],

                    ]
                },
                {
                    titleNav: 'TUTORIAL',
                    listNav: [
                        ['Knowledgebase'],
                        ['Blog'],
                        ['Cara Pembayaran'],

                    ]
                },
                {
                    titleNav: 'TENTANG KAMI',
                    listNav: [
                        ['Tim Niagahoster'],
                        ['Karir'],
                        ['Penawaran & Event Spesial'],
                        ['Kontak kami']
                    ]
                },
                {
                    titleNav: 'KENAPA PILIH NIAGAHOSTER',
                    listNav: [
                        ['Support Terbaol'],
                        ['Garansi Harga Termurah'],
                        ['Domain Gratis Selamanya'],
                        ['Datacenter Hosting terbaik'],
                        ['Review Pelanggan']
                    ]
                }
            ],
            SocialMedia: [{
                    name: 'Facebook',
                    logo: FacebookIcon
                },
                {
                    name: 'Twitter',
                    logo: TwitterIcon
                },
                {
                    name: 'Google',
                    logo: GoogleIcon
                }
            ],
            paymentList: [
                BCAIcon,
                MandiriIcon,
                BNIIcon,
                BRIIcon,
                BIIIcon,
                CIMBIcon,
                AltoIcon,
                ATMBersamaIcon,
                PaypalIcon,
                IndomartIcon,
                AlfamartIcon,
                PegadaianIcon,
                PosIcon,
                OVOIcon,
                GopayIcon,
                VisaIcon,
                MastercardIcon
            ]
        }
    },
    computed: mapState({
        theme: state => state.theme
    }),
    components: {
        FacebookIcon,
        TwitterIcon,
        GoogleIcon,
        BCAIcon,
        MandiriIcon,
        BNIIcon,
        BRIIcon,
        BRIIcon,
        CIMBIcon,
        AltoIcon,
        ATMBersamaIcon,
        PaypalIcon,
        IndomartIcon,
        AlfamartIcon,
        PegadaianIcon,
        PosIcon,
        OVOIcon,
        GopayIcon,
        VisaIcon,
        MastercardIcon
    }
}
</script>

<style lang="css">
.email-input {
    max-width: 50%;
    width: 100px;
}
</style>