import axios from 'axios'

const BASE_URL = "https://api.coingecko.com/api/v3"
const headers = {"Access-Control-Allow-Origin" : "*"}
export const Fetchapi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,headers)
    return data;
}