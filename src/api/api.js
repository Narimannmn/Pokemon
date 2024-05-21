import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});
export const api = async (url, options) => {
  try {
    if (options.method.toLowerCase() === 'post') {
      return await axiosInstance.post(url, options.data);
    } else if (options.method.toLowerCase() === 'get') {
      return await axiosInstance.get(url, options.data);
    }else if (options.method.toLowerCase() === 'put') {
      return await axiosInstance.put(url, options.data);
    }else if (options.method.toLowerCase() === 'delete') {
      return await axiosInstance.delete(url, options.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default api;
