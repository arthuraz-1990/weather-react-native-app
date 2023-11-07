import axios from "axios";

import { API_HOST } from '@env';

class AddressService {

    find(text, limit = 10) {
        const options = {
            method: 'GET',
            url: `${API_HOST}/address`,
            params: {
                text,
                limit
            }
        };

        return axios.request(options);
    }


}

export default new AddressService();