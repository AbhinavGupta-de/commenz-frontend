import axios from 'axios';

const API_URL = 'https://comment-sum-api.up.railway.app/';

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
