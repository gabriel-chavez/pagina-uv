
import apiClient from '../config/api-config';

export const obtenerPaginaPorRuta = async (ruta) => {
  try {   
    const response = await apiClient.get(`/api/PaginasDinamicas/paginaPorRuta/${ruta}`);
    return response.data;
  } catch (error) {

    throw error;
  }
};

export const obtenerRutasDinamicas = async () => {
  try {
    const response = await apiClient.get('/api/PaginasDinamicas');
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const obtenerSeguros = async () => {
  try {
    const response = await apiClient.get(`/api/Seguro`);
    return response.data; 
  } catch (error) {
    throw error;
  }
};
export const obtenerSeguroPorRuta = async (ruta) => {
  try {
    const response = await apiClient.get(`/api/Seguro/ObtenerPorRuta/${ruta}`);
    console.log(response)
    return response.data; 
  } catch (error) {
    throw error;
  }
};