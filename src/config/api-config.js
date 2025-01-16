import axios from 'axios';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth'; 
import { authOptions } from '../app/api/auth/[...nextauth]/route';
import https from 'https';

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
 
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
    httpsAgent
});

const isClient = typeof window !== 'undefined';

apiClient.interceptors.request.use(
    async (config) => {
        if (process.env.NEXT_PHASE === 'phase-production-build') {
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
    (response) => response,
    (error) => {
        if (error.response) {

            const { status, data } = error.response;
            const mensaje = data.mensaje || "Error en la solicitud";
            const datos = data.datos || null;

            console.error(`🚨 Error en respuesta (${status}): ${mensaje}`);
            console.error(`📍 Endpoint: ${error.config?.baseURL || ""}${error.config?.url || ""}`);
            console.error(`🛠️ Datos enviados:`, error.config?.data);
            console.error(`🔄 Respuesta recibida:`, data);

            switch (status) {
                case 400:
                    return Promise.reject({ status: 400, message: mensaje, datos: datos });
                case 401:
                    return Promise.reject({ status: 401, message: mensaje, datos: datos });
                case 404:
                    return Promise.reject({ status: 404, message: mensaje, datos: datos });
                default:
                    return Promise.reject({ status: status, message: mensaje, datos: datos });
            }
        } else if (error.request) {
            console.error(`📡 Solicitud sin respuesta. Configuración:`, error.request);

            return Promise.reject({ status: 500, message: "Error de red. Inténtalo de nuevo más tarde.", datos: null });
        } else {
            console.error(`❌ Error general:`, error.message || error);

            return Promise.reject({ status: 500, message: "Error en la solicitud. Inténtalo de nuevo más tarde.", datos: null });
        }
    }
);


export default apiClient;