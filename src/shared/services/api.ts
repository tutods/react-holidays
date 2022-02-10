import axios from 'axios';

const holidaysApi = axios.create({
	baseURL: 'https://date.nager.at/api/v3/publicholidays/'
});

export default holidaysApi;
