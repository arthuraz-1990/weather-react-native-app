import axios from "axios";

import { RAPIDAPI_KEY, WEATHERAPI_HOST } from '@env';

class WeatherService {

    getForecast(lat, lon, days = 3) {
        const options = {
            method: 'GET',
            url: `https://${WEATHERAPI_HOST}/forecast.json`,
            headers: {
              'X-RapidAPI-Key': RAPIDAPI_KEY,
              'X-RapidAPI-Host': WEATHERAPI_HOST
            },
            params: {
                q: `${lat},${lon}`,
                days,
                lang: 'pt'
            }
        };
        return axios.request(options);
    }

}

export default new WeatherService();