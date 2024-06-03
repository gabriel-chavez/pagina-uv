import apiClient from '../config/api-config';

export const obtenerDepartamentos = async () => {
  try {
    const response = await apiClient.get('/childrenJSON?geonameId=3923057&username=lchaveaz');
    return response.data;
  } catch (error) {
    throw error;
  }
};