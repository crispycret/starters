// apis/archive/index.ts
import axios from 'axios';



export const getList = async () => {
    const url = 'https://api.publicapis.org/entries';
    const response = await axios.get(url);
    const data = response.data;
    console.log(data)
    return data;
}


