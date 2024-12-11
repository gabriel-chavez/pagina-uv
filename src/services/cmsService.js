
import apiClient from '../config/api-config';
/*Paginas Dinamicas*/
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
/*Nuestros Seguros*/
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
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
/*Menu*/
export const obtenerMenuPrincipal = async () => {
  try {
    const response = await apiClient.get(`/api/MenuPrincipal`);
    //console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
};
/*Banner Pagina principal */
export const obtenerBannerPaginaPrincipal = async (catTipoBannerPaginaPrincipalId) => {
  try {
    const response = await apiClient.get(`/api/BannerPaginaPrincipalMaestro/habilitados/${catTipoBannerPaginaPrincipalId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const listarBannerPaginaPrincipal = async () => {
  try {
    const response = await apiClient.get(`/api/BannerPaginaPrincipalMaestro/habilitados`);
    return response.data;
  } catch (error) {
    throw error;
  }
};