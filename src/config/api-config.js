// src/config/api-config.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // URL base de tu API
  timeout: 10000, // tiempo de espera de 10 segundos
});

// apiClient.interceptors.request.use(
//   config => {
//     // Puedes agregar configuraciones adicionales aquí, como headers
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Manejo de errores global
    return Promise.reject(error);
  }
);

export default apiClient;
