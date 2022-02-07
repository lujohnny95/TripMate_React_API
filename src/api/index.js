import axios from 'axios';

const URL = ''
  
export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '8ad1248708mshac6fc641ef9fb8fp1453e8jsn4152d6c3fc58'
            }
        })
        return data
    } catch (error) {
        console.log(error);
    }
}