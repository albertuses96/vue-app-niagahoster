const baseURL = process.env.VUE_APP_BASEURL
const ApiService = async (endPoint: string, config: any) => {
    const response = await fetch(baseURL+endPoint, config)
    return await response.json()
}

export default ApiService