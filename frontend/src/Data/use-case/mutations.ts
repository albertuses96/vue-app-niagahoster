import {Data} from '@/Domain/Entities'
import {currencyFormatter} from '@/utils/currencyFormatter'

type IState = {
        data: Array<Data>,
        theme: string
}

const mutations = {
    storeData(state: IState, payload: any) {
        const transformData = payload.data.map((val: any) => {
            const featureList = Object.keys(val['feature']).map(item => item)
      
            return {
                ...val,
                'real-price': currencyFormatter(val['real-price']),
                'discount-price': currencyFormatter(val['discount-price']),
                feature: featureList.map(item => {
                    return [item, val['feature'][item]]
                })
            }
        })
        const orderedData: any = []
        transformData.forEach((val: any) => {
            if(val['package-name'] === 'Bayi') {
                return orderedData[0] = val
            } else if(val['package-name'] === 'Pelajar') {
                return orderedData[1] = val
            } else if(val['package-name'] === 'Personal') {
                return orderedData[2] = val
            } else {
                return orderedData[3] = val
            }
        });
        state.data = orderedData    
    },
    changeTheme(state: IState, payload: string) {
        state.theme = payload
    }
}

export default mutations