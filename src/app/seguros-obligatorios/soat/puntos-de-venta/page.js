'use client'


import EncabezadoPagina from "@/components/common/EncabezadoPagina";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { obtenerDepartamentos } from "@/services/soatService";
const Mapa = dynamic(() => import('@/app/seguros-obligatorios/soat/puntos-de-venta/Mapa'), {
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

    // Estado para almacenar los departamentos
    const [departments, setDepartments] = useState([]);
    // Estado para manejar errores
    const [error, setError] = useState(null);
    // useEffect para obtener los departamentos
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const departments = await obtenerDepartamentos();
                setDepartments(departments.geonames);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchDepartments();
    }, []);

    const handleChange = (event) => {
        
        const departmentId = event.target.selectedOptions[0].value; // Obtener el ID del departamento seleccionado

        console.log(departmentId)
        console.log(departments)
        const selectedDept = departments.find(dept => dept.geonameId == departmentId);        

        console.log(selectedDept)
        setSelectedDepartment(selectedDept);
        console.log(selectedDepartment)
    };

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
                            <div className="input-group input-group-lg mb-3 input-group-uv">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Departamento</label>
                                <select className="form-select" id="inputGroupSelect01" value={selectedDepartment ? selectedDepartment.geonameId : ''} onChange={handleChange}>
                                    <option value="" disabled>Seleccione un departamento...</option>
                                    {departments.map(dept => (
                                        <option key={dept.geonameId} value={dept.geonameId}>{dept.name}</option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-group input-group-lg mb-3 input-group-uv">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Ciudad</label>
                                <select className="form-select" id="inputGroupSelect02" value={selectedValue} onChange={handleChange}>
                                    <option value="" disabled>Seleccione una ciudad...</option>
                                    <option value="1"></option>
                                 
                                </select>

                            </div>
                        </div>
                    </div>
                    <Mapa position={selectedDepartment ? [selectedDepartment.lat, selectedDepartment.lng] : [-16.510778425071273, -68.12523923596127]} zoom={10} />

                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="input-group input-group-lg mb-3 input-group-uv">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Comercios Afiliados</label>


                                <select className="form-select" id="inputGroupSelect01" value={selectedDepartment ? selectedDepartment.geonameId : ''} onChange={handleChange}>
                                    <option value="" disabled>Seleccione una opción...</option>
                                    {departments.map(dept => (
                                        <option key={dept.geonameId} value={dept.geonameId}>{dept.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    );
}
