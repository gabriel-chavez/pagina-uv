
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth'; 
import { authOptions } from '../app/api/auth/[...nextauth]/route';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

const isClient = typeof window !== 'undefined';

apiClient.interceptors.request.use(
    async (config) => {
        if (process.env.NEXT_PHASE === 'phase-production-build') {
            console.log("🚧 api-config: Omitiendo sesión durante el build.");
            return config;
        }

        let session;
        try {
            if (isClient) {
                session = await getSession();
            } else {
                session = await getServerSession(authOptions);
            }

            if (session?.user?.token) {
                config.headers['Authorization'] = `Bearer ${session.user.token}`;
            } else {
                console.log("api-config: No se encontró el token.");
            }
        } catch (error) {
            console.error("🚨 Error obteniendo sesión:", error.message || error);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            const { status, data } = error.response;

            const mensaje = data.mensaje || 'Error en la solicitud';
            const datos = data.datos || null;

            switch (status) {
                case 400:
                    return Promise.reject({ status: 400, message: mensaje, datos: datos });
                case 401:
                    return Promise.reject({ status: 401, message: mensaje, datos: datos });
                case 404:
                    return Promise.reject({ status: 404, message: mensaje, datos: datos });
                default:
                    return Promise.reject({ status: status, message: mensaje + error.response.data.detail, datos: datos });
            }
        } else if (error.request) {
            return Promise.reject({ status: 500, message: 'Error de red. Inténtalo de nuevo más tarde.', datos: null });
        } else {
            console.log(error);
            return Promise.reject({ status: 500, message: 'Error en la solicitud. Inténtalo de nuevo más tarde.', datos: null });
        }
    }
);

export default apiClient;
