import axios from "axios";

import { GEODB_CITIES_API_HOST, RAPIDAPI_KEY } from '@env';

class CitiesService {

    find(namePrefix, limit = 10) {
        const options = {
            method: 'GET',
            url: `https://${GEODB_CITIES_API_HOST}/v1/geo/cities`,
            headers: {
              'X-RapidAPI-Key': RAPIDAPI_KEY,
              'X-RapidAPI-Host': GEODB_CITIES_API_HOST
            },
            params: {
                namePrefix,
                languageCode: 'pt-BR',
                limit
            }
        };

        return axios.request(options);
    }


}

export default new CitiesService();