'use client';

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { cerrarSesion } from "@/services/seguridadService";

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        const cerrarSesion1 = async () => {
            try {
                const response = await cerrarSesion();
                

                if (response.exito) {
                    console.log('Sesión cerrada en el backend.');
                } else {
                    console.error('Error en la API personalizada:', data.message);
                }
            } catch (error) {
                console.error('Error en la red:', error);
            } finally {
                await signOut({ redirect: false });
                router.push('/login');
            }
        };

        cerrarSesion1();
    }, [router]);

    return (
        <div style={styles.container}>
            <h1>Cerrando sesión...</h1>
            <p>Serás redirigido a la página de inicio de sesión en breve.</p>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
    }
};
