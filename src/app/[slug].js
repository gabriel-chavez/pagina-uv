import { useRouter } from 'next/router';
import { obtenerPaginaPorRuta } from "@/services/cmsService";
const PaginaDinamica = ({ data }) => {
    const router = useRouter();
    const { slug } = router.query;

    if (!router.isFallback && !data) {
        return <div>404 - Página no encontrada</div>;
    }

    if (router.isFallback) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{data.title || 'HOLAAAAAAA'}</h1>
            <p>Ruta dinámica: {slug}</p>
            <div>{data.content || 'Contenido dinámico cargado.'}</div>
        </div>
    );
};

export default PaginaDinamica;

export async function getStaticPaths() {
    // Obtén las rutas dinámicas desde tu API o define rutas de prueba
    const rutasDinamicas = ['informacion', 'Seguros', 'SOAT', 'prueba1'];

    const paths = rutasDinamicas.map(ruta => ({
        params: { slug: ruta }
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    try {
        const pagina = await obtenerPaginaPorRuta(params.slug);
        //console.log(pagina)

        // Simulación de obtención de datos dinámicos
        const data = {
            title: `Título para ${slug}`,
            content: `Contenido específico para la ruta: ${slug}`
        };

        return { props: { data } };
    } catch (error) {
        console.log(error)
        return { notFound: true };

    }

}
