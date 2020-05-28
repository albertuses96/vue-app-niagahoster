import {Data} from '@/Domain/Entities'

type IState = {
        data: Array<Data>,
        theme: string
}

const mutations = {
    storeData(state: IState, payload: any) {
        state.data = payload.data       
    },
    changeTheme(state: IState, payload: string) {
        state.theme = payload
    }
}

export default mutations