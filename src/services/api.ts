import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url.com';

export const getTemplatesByCategory = async (category: string ='', filter: string = '', sort: string = '', search: string = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/templates`, {
      params: {
        category,
        filter,
        sort,
        search,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching templates');
  }
};

export const getTemplateById = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/templates/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching template details');
  }
};
