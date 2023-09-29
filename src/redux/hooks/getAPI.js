import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const getAPI = async (url, params) => {
   console.log(params);
   const response = await axios.get(`${baseURL}${url}`, {
      params: { apiKey, category: params },
   });

   return response;
};
