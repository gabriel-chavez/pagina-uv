import apiClient from '../config/api-config';

export const reestablecerContrasena = async (datos) => {
  try {
    const response = await apiClient.post('/api/auth/RestablecerContrasena', datos);
    return response.data;
  } catch (error) {    
    throw error;
  }
};

export const recuperarContrasena = async (datos) => {
  try {
    const response = await apiClient.post('/api/auth/RecuperarContrasena', datos);    
    return response.data;
  } catch (error) {    
    throw error;
  }
};
export const registrar = async (datos) => {
  try {
    const response = await apiClient.post('/api/auth/registrar', datos);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const login = async (UserNameEmail, Password) => {
  try {    
    const response = await apiClient.post('/api/auth/login', {
      UserNameEmail,
      Password,
    }, {
      withCredentials: true
    });
    return response.data;

  } catch (error) {    
    throw error;
  }
};
export const cerrarSesion = async () => {
  try {
    const response = await apiClient.post('/api/auth/logout');
  } catch (error) {

    throw error;
  }
};
