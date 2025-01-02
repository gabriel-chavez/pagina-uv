import apiClient from '../config/api-config';
import Cookies from 'js-cookie';

const almacenarToken = (token, postulanteId) => {
  Cookies.set('token', token, { expires: 1 }); // 1 día de expiración
  Cookies.set('postulanteId', postulanteId, { expires: 1 });
};

export const login = async (UserName, Password) => {
  try {    
    const response = await apiClient.post('/api/auth/login', {
      UserName,
      Password,
    }, {
      withCredentials: true
    });

    console.log('Response:', response);
    console.log('Response Data:', response.data);
    console.log('Response Headers:', response.headers);

    almacenarToken(resultado.datos.token, resultado.datos.postulanteId);

    return response.data;

  } catch (error) {
    //console.error('Error login:', response);
    console.error('Error login:', error);
    throw error;
  }
};
export const cerrarSesion = async () => {
  try {
    const response = await apiClient.post('/api/auth/logout');
    console.log(response.data.message);

  } catch (error) {
    //console.error("Error al cerrar sesión:", response);
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};
