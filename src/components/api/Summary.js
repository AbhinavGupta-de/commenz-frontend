import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}`;
// console.log(API_URL);

const fetchSummary = async (url) => {
	const data = {
		url: `${url}`,
		maxReview: 10,
	};

	try {
		const response = await axios.post(`${API_URL}summarize`, data);

		return response.data.summary;
	} catch (error) {
		console.error(error);
		return 'Error while fetching summary';
	}
};

export { fetchSummary };
