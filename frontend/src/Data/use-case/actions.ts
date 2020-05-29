import ApiService from '@/Api/ApiService'

const actions = {
    async getData(context: any) {
        try {
            const data = await ApiService('/package', {})
            context.commit('storeData', data)
        } catch(e) {
            return null
        }
    },
    changeTheme(context: any, theme: string) {
        context.commit('changeTheme', theme)
    }

}

export default actions