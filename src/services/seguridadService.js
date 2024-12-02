import apiClient from '../config/api-config';

export const login = async (UserName, Password) => {
    try {
        console.log("intento de inicio!!!!")
      const response = await apiClient.post('/api/auth/login', {
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
        return response.data;
    //   console.error('Error during login:', error);
    //   throw error;
    }
  };
  export const cerrarSesion = async () => {
    try {
      const response = await apiClient.post('/api/auth/logout');
      console.log(response.data.message); 
  
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  