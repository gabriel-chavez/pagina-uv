import apiClient from '../config/api-config';

<<<<<<< HEAD
=======
const almacenarToken = (token, postulanteId) => {
  Cookies.set('token', token, { expires: 1 }); // 1 día de expiración
  Cookies.set('postulanteId', postulanteId, { expires: 1 });
};

>>>>>>> d6f418f6b833e88688848fc456a4c7e718426a6b
export const login = async (UserNameEmail, Password) => {
  try {    
    const response = await apiClient.post('/api/auth/login', {
      UserNameEmail,
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
