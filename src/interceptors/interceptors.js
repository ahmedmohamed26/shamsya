import axios from 'axios';

const TOKEN = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://staging.mymelior.com/v1';

let headers = {};
headers.Authorization = `Bearer ${TOKEN}`;


const axiosInterceptors = axios.create({
	baseURL: BASE_URL,
	headers, 
});

axiosInterceptors.interceptors.response.use(
	(response) =>
		new Promise((resolve, reject) => {
			resolve(response);
		}),
	(error) => {
		if (!error.response) {
			return new Promise((resolve, reject) => {
				reject(error);
			});
		}
	}
);

export default axiosInterceptors;
