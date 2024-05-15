// src/services/api.ts
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337';

export const getTemplatesByCategory = async (category: string) => {
  const response = await axios.get(`${API_URL}/templates?category=${category}`);
  return response.data;
};

export const getTemplateById = async (id: string) => {
  const response = await axios.get(`${API_URL}/templates/${id}`);
  return response.data;
};
