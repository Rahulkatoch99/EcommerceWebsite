
import axios, { AxiosError } from 'axios';

const API_URL = 'https://gen-ai-poc.impressicocrm.com/api/v1'

const baseConfig = {
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
};


export const axiosPublic = axios.create(baseConfig);
export const axiosPrivate = axios.create(baseConfig);
export const axiosUnhandled = axios.create(baseConfig);


export const getProductsByCategory = async (category) => {
    const res = await axiosPublic({
        url: `/featured_categories?category=${category}`,
        method: 'GET',
    });

    return res;
};



export const searchProductByText = async (query, smartsearchx = 'off', locationQuery = 'delhi') => {
    try {
        const res = await axiosPublic({
            url: `/search/`,
            method: 'GET',
            params: {
                q: query,
                smartsearchx: smartsearchx,
                location_query: locationQuery,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error searching product by text:', error);
        throw error;
    }
};



export const SuggestionByText = async (query) => {
    try {
        const response = await axiosPublic({
            url: `/autosuggest/?query_string=${encodeURIComponent(query)}`,
            method: 'GET',
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching suggestions:', error.response ? error.response.data : error.message);
        return [];
    }
};