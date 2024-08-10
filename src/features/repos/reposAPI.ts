import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchRepositories = async (query: string, page: number, perPage: number) => {
    const response = await axios.get(`${BASE_URL}/search/repositories`, {
        params: {
        q: query,
        page,
        per_page: perPage
        }
    });
    return response.data;
};
