import apiClient from '../config/api-config';

export const login = async (UserName, Password) => {
  try {    
    const response = await apiClient.post('/api/auth/login-postulante', {
      UserName,
      Password,
    }, {
      withCredentials: true
    });

    console.log('Response:', response);
    console.log('Response Data:', response.data);
    console.log('Response Headers:', response.headers);

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
