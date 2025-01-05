// import apiClient from '../config/api-config';

// export const obtenerDepartamentos = async () => {
//   try {
//     const response = await apiClient.get('/childrenJSON?geonameId=3923057&username=lchaveaz');
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const obtenerDepartamentos = async () => {
  try {
    const response = await fetch('https://api.geonames.org/childrenJSON?geonameId=3923057&username=lchaveaz');
    
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener departamentos:', error);
    throw error;
  }
};
