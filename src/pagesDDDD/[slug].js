// pages/[slug].js

import { useRouter } from 'next/router';
import { obtenerPaginaPorRuta } from '@/services/cmsService';
import RootLayout from '@/app/layout';

const SlugPage = ({ data }) => {
    const router = useRouter();
    const { slug } = router.query;

    if (!router.isFallback && !data) {
        return <div>404 - Página no encontrada</div>;
    }

    if (router.isFallback) {
        return <div>Cargando...</div>;
    }

    return (
        <RootLayout>
            <h1>{data.title || 'Título predeterminado'}</h1>
            <p>Ruta dinámica: {slug}</p>
            <div>{data.content || 'Contenido dinámico cargado.'}</div>
        </RootLayout>
    );
};

export default SlugPage;

export async function getStaticPaths() {
    // Define las rutas dinámicas que quieres pre-renderizar
    const rutasDinamicas = ['informacion', 'Seguros', 'SOAT', 'prueba1'];

    // Mapea las rutas dinámicas en el formato requerido por Next.js
    const paths = rutasDinamicas.map(slug => ({
        params: { slug }
    }));

    return { paths, fallback: true }; // fallback: true permite manejar rutas no pre-renderizadas
}

export async function getStaticProps({ params }) {
    const { slug } = params;

    try {
        // Llama a tu servicio para obtener los datos según el slug
        const pagina = await obtenerPaginaPorRuta(slug);

        // Simulación de datos si no tienes un servicio real
        const data = {
            title: pagina?.title || `Título para ${slug}`,
            content: pagina?.content || `Contenido específico para ${slug}`
        };

        return { props: { data }, revalidate: 60 }; // Revalida cada 60 segundos
    } catch (error) {
        console.error(error);
        return { notFound: true }; // Retorna 404 si hay un error
    }
}
