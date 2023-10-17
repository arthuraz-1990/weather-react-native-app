import axios from "axios";

class WeatherService {

    // getRealtime(lat, lon) {
    //     const options = {
    //         method: 'GET',
    //         url: `https://${process.env.WEATHERAPI_HOST}/current.json`,
    //         headers: {
    //           'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    //           'X-RapidAPI-Host': process.env.WEATHERAPI_HOST
    //         },
    //         params: {
    //             q: `${lat},${lon}`
    //         }
    //     };

    //     return axios.request(options);
    // }

    getForecast(lat, lon, days = 3) {
        const options = {
            method: 'GET',
            url: `https://${process.env.WEATHERAPI_HOST}/forecast.json`,
            headers: {
              'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.WEATHERAPI_HOST
            },
            params: {
                q: `${lat},${lon}`,
                days
            }
        };
        return axios.request(options);
    }

}

export default new WeatherService();