'use client'
import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Mapa = dynamic(() => import('@/app/soat/puntos-de-venta/Mapa'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
  });


export default function Page() {
    const breadcrumbs = [
        { label: 'Inicio', url: '/' },
        { label: 'Soat', url: '/soat' },
        { label: 'Puntos de venta' }
    ];
    // Definimos el estado para almacenar el valor seleccionado
    const [selectedValue, setSelectedValue] = useState('');

    // Función para manejar el cambio de selección
    const handleChange = (event) => {
        // Actualizamos el estado con el nuevo valor seleccionado
        setSelectedValue(event.target.value);
    };
    // const Mapa= useMemo(() => dynamic(
    //     () => import('@/app/soat/puntos-de-venta/Mapa'),
    //     { 
    //       loading: () => <p>A map is loading</p>,
    //       ssr: false
    //     }
    //   ), [])
    return (
        <>
            <EncabezadoPagina
                backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                title="Puntos de venta"
                breadcrumbs={breadcrumbs}
            />
            <section className="container mt-5">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">Adquiere tu SOAT en el punto de venta más cercano</p>
                    </div>
                    {/* <h2 className="section-title__title">
                    Adquiere tu SOAT en el punto de venta más cercano
                    </h2> */}
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="input-group input-group-lg mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Departamento</label>
                                <select className="form-select" id="inputGroupSelect01" value={selectedValue} onChange={handleChange}>
                                    <option value="" disabled>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group input-group-lg mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Ciudad</label>
                                <select className="form-select" id="inputGroupSelect02" value={selectedValue} onChange={handleChange}>
                                    <option value="" disabled>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <Mapa position={[51.505, -0.09]} zoom={13} />
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="input-group input-group-lg mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Comercios Afiliados</label>


                                <select className="form-select" id="inputGroupSelect03" value={selectedValue} onChange={handleChange}>
                                    <option value="" disabled>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
