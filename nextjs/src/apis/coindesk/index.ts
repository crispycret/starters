import axios from 'axios'


export const getCurrentBitcoinPrice = async () => {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const response = await axios.get(url);
    const data = response.data;
    return data;
}



