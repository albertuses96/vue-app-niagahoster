<template>
    <div class="price-content container flex flex-col py-4 text-center justify-center items-center">
        <div class="title-content flex flex-col mb-8">
            <h1 class="text-2xl font-bold">
                Paket Hosting Singapura yang Tepat
            </h1>
            <h2 class="text-lg font-thin">
                Diskon 40% + Domain dan SSL Gratis untuk Anda
            </h2>
        </div>
        <div class="relative flex flex-col md:flex-row lg:flex-row">
            <div  v-for="item in data" :index="key" class="flex h-full py-0  ">
                <div  v-if="item['package-name'] === 'Personal'" class="relative overflow-hidden border border-blue-400">
                    <div class="corner-ribbon top-left sticky red shadow bg-green-500">
                        <span class="text absolute font-bold font-sans">
                            BEST SELLER
                        </span>
                    </div>
                    
                    <table class="border border-blue-400 mt-8 md:mt-0 lg:mt-0">
                        <thead class="border">
                            <tr>
                                <th class="bg-blue-400 flex flex-col  font-bold text-white">
            
                                    <span class="text-2xl">
                                        {{item['package-name']}}
                                    </span>
                                    <strike>{{item['real-price']}}</strike>
                                    <p>{{item['discount-price']}}</p>
                                    <span class="bg-blue-600 text-white py-2 px-4">
                                        <strong class="mr-2">{{item['UA']}}</strong>
                                <span>Pengguna Terdaftar</span>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
            
                            <tr class="border border-gray-200 ">
            
                                <td class="border border-ray-200 py-4 px-4">
                                    <div class="flex flex-col justify-center items-center">
                                        <div v-for="properties in item['feature']">
                                            <div v-if="properties[1] === 'Gratis Selamanya'">
                                                <span class="font-bold">
                                                    {{properties[0] + ' '}}
                                                </span> 

                                                <span>
                                                    {{properties[1]}}
                                                </span> 
                                          

                                            </div>
                                            <div v-else-if="properties[0] === 'Resource Power'">
                                                <span class="font-bold">
                                                  {{properties[1] + 'x' + ' '}}
                                                </span>
                                                <span>
                                                      {{properties[0]}}
                                                </span>
                                            </div>
                                            <div v-else> 
                                                <span class="font-bold">
                                                  {{properties[1]  + ' '}}
                                                </span>
                                                <span>
                                                      {{properties[0]}}
                                                </span>

                                            </div>
                                        </div>
                                        <button class="btn btn-cta rounded-full bg-transparent border border-black mt-4 bg-blue-400 text-white border-none font-bold py-2">Pilih Sekarang</button>
                                    </div>
            
                                </td>
            
            
                            </tr>
            
            
                        </tbody>
                    </table>
                </div>

                <div v-else>
                    <table  class="border border-gray-200 mt-8 md:mt-0 lg:mt-0">
                    <thead class="border border-gray-200">
                        <tr>
                            <th class="border border-gray-200 text-2xl">{{item['package-name']}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border border-gray-200">
                            <td class="border border-gray-200">
                                <strike>{{item['real-price']}}</strike>
                                <p>{{item['discount-price']}}</p>
                            </td>
    
                        </tr>
                        <tr class="border border-gray-200">
                            <td class="border border-gray-200 px-4 py-2">
                                <strong class="mr-2">{{item['UA']}}</strong>
                                <span>Pengguna Terdaftar</span>
                            </td>
    
    
                        </tr>
                        <tr class="border border-gray-200 ">
    
                           
                                <td class="border border-ray-200 py-4 px-4">
                                    <div class="flex flex-col justify-center items-center">
                                        <div v-for="properties in item['feature']">
                                            <div v-if="properties[1] === 'Gratis Selamanya'">
                                                <span class="font-bold">
                                                    {{properties[0] + ' '}}
                                                </span> 

                                                <span>
                                                    {{properties[1]}}
                                                </span> 
                                          

                                            </div>
                                            <div v-else-if="properties[0] === 'Resource Power'">
                                                <span class="font-bold">
                                                  {{properties[1] + 'x' + ' '}}
                                                </span>
                                                <span>
                                                      {{properties[0]}}
                                                </span>
                                            </div>
                                            <div v-else> 
                                                <div v-if="properties[0] === 'Disk Space' && Number(properties[1])">
                                                        <span class="font-bold">
                                                    
                                                        {{properties[1]  + 'MB' + ' '}}
                                                        </span>
                                                        <span>
                                                            {{properties[0]}}
                                                        </span>

                                                </div>
                                                <div v-else>
                                                    <span class="font-bold">
                                                    
                                                    {{properties[1]  + ' '}}
                                                    </span>
                                                    <span>
                                                        {{properties[0]}}
                                                    </span>

                                                </div>
        
                                            </div>
                                        </div>
                                        <button class="btn btn-cta rounded-full bg-transparent border border-black mt-4  font-bold py-2">Pilih Sekarang</button>
                                    </div>
            
                                </td>
            
    
                        </tr>
    
    
                    </tbody>
                </table>
                </div>
              
                

            </div>
    
    
          
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
    name: 'PriceContent',
    computed: mapState({
        data: state => state.data,
    }),

}
</script>

<style lang="css">
.btn-cta {
    width: 250px;
}

.corner-ribbon{
  width: 200px;
  height: 24px;
  position: absolute;
  top: 15px;
  left: -10px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Custom styles */

.corner-ribbon.sticky{
  position: absolute;
}

.corner-ribbon.shadow{
  box-shadow: 0 0 3px rgba(0,0,0,.3);
}

/* Different positions */

.text {
    top: -12px;
    left: 64px;
    font-size: 9px;
}

.corner-ribbon.top-left{
  top: 12px;
  left: -70px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

</style>