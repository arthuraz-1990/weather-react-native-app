import axios from "axios";

import { API_HOST } from '@env';

class WeatherService {

    getForecast(lat, lon, days = 3) {
        const options = {
            method: 'GET',
            url: `${API_HOST}/weather`,
            params: {
                q: `${lat},${lon}`,
                days
            }
        };
        return axios.request(options);
    }

}

export default new WeatherService();