import axios from "axios";

import { ADDRESS_API_HOST, RAPIDAPI_KEY } from '@env';

class AddressService {

    find(text, limit = 10) {
        const options = {
            method: 'GET',
            url: `https://${ADDRESS_API_HOST}/v1/geocode/autocomplete`,
            headers: {
              'X-RapidAPI-Key': RAPIDAPI_KEY,
              'X-RapidAPI-Host': ADDRESS_API_HOST
            },
            params: {
                text,
                lang: 'pt',
                limit
            }
        };

        return axios.request(options);
    }


}

export default new AddressService();