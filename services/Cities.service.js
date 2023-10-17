import axios from "axios";

class CitiesService {

    find(namePrefix, limit = 10) {
        const options = {
            method: 'GET',
            url: `https://${process.env.GEODB_CITIES_API_HOST}/v1/geo/cities`,
            headers: {
              'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.GEODB_CITIES_API_HOST
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