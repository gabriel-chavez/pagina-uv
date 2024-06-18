// src/services/paginaDinamicaService.js
import apiClient from '../config/api-config';

export const obtenerPaginaPorRuta = async (ruta) => {
  try {
    const response = await apiClient.get(`/api/PaginasDinamicas/paginaPorRuta/${ruta}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
