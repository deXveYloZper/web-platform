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

export const getSavedTemplates = async (userId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}/templates`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching saved templates');
  }
};

export const saveTemplate = async (userId: string, template: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/${userId}/templates`, template);
    return response.data;
  } catch (error) {
    throw new Error('Error saving template');
  }
};

export const deleteTemplate = async (templateId: string) => {
  try {
    await axios.delete(`${API_BASE_URL}/templates/${templateId}`);
  } catch (error) {
    throw new Error('Error deleting template');
  }
};