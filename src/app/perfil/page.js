"use client";

import EncabezadoConvocatoria from "@/components/common/EncabezadoConvocatoria";
import Estilos from '@/estilos/InfoAcademica.module.css';
import React, { useState } from 'react';

import PerfilFormacionAcademicaLista from "@/components/common/PerfilFormacionAcademicaLista";
import PerfilCursosLista from "@/components/common/PerfilCursosLista";
import PerfilIdiomasLista from "@/components/common/PerfilIdiomasLista";
import PerfilSistemasLista from "@/components/common/PerfilSistemasLista";
import PerfilExperienciaLaboralLista from "@/components/common/PerfilExperienciaLaboralLista";
import PerfilReferenciaPersonalLista from "@/components/common/PerfilReferenciaPersonalLista";
import PerfilReferenciaLaboralLista from "@/components/common/PerfilReferenciaLaboralLista";

export default function Page() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };

    const [showInfoAcademicaModal, setShowInfoAcademicaModal] = useState(false);
    const [selectedInfoAcademica, setSelectedInfoAcademica] = useState(null);
    const handleInfoAcademicaModalOpen = (id) => {
        const infoAcademicaSeleccionado = formacionLista.find((idioma) => idioma.id === id);
        setSelectedInfoAcademica(infoAcademicaSeleccionado);
        setShowInfoAcademicaModal(true);
    };
    const handleInfoAcademicaModalClose = () => {
        setSelectedInfoAcademica(null);
        setShowInfoAcademicaModal(false);
    };

    const [showCursosModal, setShowCursosModal] = useState(false);
    const [selectedCurso, setSelectedCurso] = useState(null);
    const handleCursosModalOpen = (id) => {
        const cursoSeleccionado = cursosLista.find((curso) => curso.id === id);
        setSelectedCurso(cursoSeleccionado);
        setShowCursosModal(true);
    };
    const handleCursosModalClose = () => {
        setSelectedCurso(null);
        setShowCursosModal(false);
    };

    const [showIdiomasModal, setShowIdiomasModal] = useState(false);
    const [selectedIdioma, setSelectedIdioma] = useState(null);
    const handleIdiomasModalOpen = (id) => {
        const idiomaSeleccionado = idiomasLista.find((idioma) => idioma.id === id);
        setSelectedIdioma(idiomaSeleccionado);
        setShowIdiomasModal(true);
    };
    const handleIdiomasModalClose = () => {
        setSelectedIdioma(null);
        setShowIdiomasModal(false);
    };

    const [showSistemasModal, setShowSistemasModal] = useState(false);
    const [selectedSistema, setSelectedSistema] = useState(null);
    const handleSistemasModalOpen = (id) => {
        const sistemaSeleccionado = sistemasLista.find((sistema) => sistema.id === id);
        setSelectedSistema(sistemaSeleccionado);
        setShowSistemasModal(true);
    };
    const handleSistemasModalClose = () => {
        setSelectedSistema(null);
        setShowSistemasModal(false);
    };

    const [showExpLaboralModal, setShowExpLaboralModal] = useState(false);
    const [selectedExpLaboral, setSelectedExpLaboral] = useState(null);
    const handleExpLaboralModalOpen = (id) => {
        const experienciaLaboralSeleccionado = experienciaLaboralLista.find((experienciaLaboral) => experienciaLaboral.id === id);
        setSelectedExpLaboral(experienciaLaboralSeleccionado);
        setShowExpLaboralModal(true);
    };
    const handleExpLaboralModalClose = () => {
        setSelectedExpLaboral(null);
        setShowExpLaboralModal(false);
    };

    const [showRefPersonalModal, setShowRefPersonalModal] = useState(false);
    const [selectedRefPersonal, setSelectedRefPersonal] = useState(null);
    const handleRefPersonalModalOpen = (id) => {
        const referenciaPersonalSeleccionado = referenciaPersonalLista.find((referenciaPersonal) => referenciaPersonal.id === id);
        setSelectedRefPersonal(referenciaPersonalSeleccionado);
        setShowRefPersonalModal(true);
    };
    const handleRefPersonalModalClose = () => {
        setSelectedRefPersonal(null);
        setShowRefPersonalModal(false);
    };

    const [showRefLaboralModal, setShowRefLaboralModal] = useState(false);
    const [selectedRefLaboral, setSelectedRefLaboral] = useState(null);
    const handleRefLaboralModalOpen = (id) => {
        const referenciaLaboralSeleccionado = referenciaLaboralLista.find((referenciaLaboral) => referenciaLaboral.id === id);
        setSelectedRefLaboral(referenciaLaboralSeleccionado);
        setShowRefLaboralModal(true);
    };
    const handleRefLaboralModalClose = () => {
        setSelectedRefLaboral(null);
        setShowRefLaboralModal(false);
    };

    const formacionLista = [
        { id: 1, nivelFormacion: 'Licenciatura', centroEducativo: 'Universidad Mayor de San Andrés', tituloObtenido: 'Administrador de Empresas', fechaTitulo: '30/06/2024', ciudad: 'La Paz', pais: 'Bolivia' },
        { id: 2, nivelFormacion: 'Maestría', centroEducativo: 'Universidad Mayor de San Andrés', tituloObtenido: 'Administrador de Empresas con mención en...', fechaTitulo: '30/06/2024', ciudad: 'La Paz', pais: 'Bolivia' },
    ];

    const cursosLista = [
        { id: 1, tipo: 'Curso', nombreCurso: 'Experto en lo avanzado en el curso', centroEducativo: 'Universidad Privada de Bolivia', pais: 'Bolivia', duracion: '2 meses', modalidad: 'Virtual', fechaInicio: '13/05/2024', fechaFin: '05/07/2024' },
        { id: 2, tipo: 'Seminario', nombreCurso: 'Nombre del seminario', centroEducativo: 'Universidad Privada del Valle', pais: 'Bolivia', duracion: '1 día', modalidad: 'Presencial', fechaInicio: '20/05/2013', fechaFin: '20/05/2013' },
    ];

    const idiomasLista = [
        { id: 1, idioma: 'Aymará', nivelLectura: 'Intermedio', nivelEscritura: 'Intermedio', nivelComprension: 'Intermedio' }
    ];

    const sistemasLista = [
        { id: 1, sistema: 'MS Word', nivelConocimiento: 'Avanzado' },
        { id: 2, sistema: 'MS Excel', nivelConocimiento: 'Medio' }
    ];

    const experienciaLaboralLista = [
        { id: 1, empresa: 'Ministerio de economía', cargo: 'Profesional I', sector: 'Público', dependientes: '1', nombreSuperior: 'Juan Pérez', cargoSuperior: 'Jefe de Unidad', telefonoEmpresa: '22207654', funciones: 'Funciones desempeñadas en el cargo descrito', fechaInicio: '01/01/2023', fechaTermino: '31/01/2023', experiencia: '1 mes', motivoDesvinculacion: 'renuncia' }
    ];

    const referenciaPersonalLista = [
        { id: 1, nombre: 'Pedro Pérez', empresa: 'Empresa amiga', cargo: 'Propietario', parentesco: 'Amistad', telefono: '22222222', celular: '77755555', correoElectronico: 'bmeza@gmail.com' }
    ];

    const referenciaLaboralLista = [
        { id: 1, nombre: 'Jorge Pérez', empresa: 'Ministerio de Economía', cargo: 'Jefe de Unidad', relacionLaboral: 'Inmediato superior', telefono: '22222222', celular: '77755555', correoElectronico: 'jperez@mineconomia.gov.bo' }
    ];

    return (
        <div>
            <EncabezadoConvocatoria
                backgroundImage="/assets/images/backgrounds/page-header-bg.jpg"
                title="Perfil"
            />
            <section className="insurance-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">

                            <div className="Tabs">
                                <div className="pcss3t pcss3t-effect-scale pcss3t-theme-1">
                                    <input type="radio" name="pcss3t" defaultChecked id="tab1" className="tab-content-first" />
                                    <label htmlFor="tab1"><i className="icon-bolt"></i>Datos del postulante</label>

                                    <input type="radio" name="pcss3t" id="tab2" className="tab-content-2" />
                                    <label htmlFor="tab2"><i className="icon-picture"></i>Información académica</label>

                                    <input type="radio" name="pcss3t" id="tab3" className="tab-content-3" />
                                    <label htmlFor="tab3"><i className="icon-cogs"></i>Cursos/Talleres</label>

                                    <input type="radio" name="pcss3t" id="tab4" className="tab-content-4" />
                                    <label htmlFor="tab4"><i className="icon-globe"></i>Idiomas</label>

                                    <input type="radio" name="pcss3t" id="tab5" className="tab-content-5" />
                                    <label htmlFor="tab5"><i className="icon-globe"></i>Sistemas</label>

                                    <input type="radio" name="pcss3t" id="tab6" className="tab-content-6" />
                                    <label htmlFor="tab6"><i className="icon-globe"></i>Experiencia Laboral</label>

                                    <input type="radio" name="pcss3t" id="tab7" className="tab-content-7" />
                                    <label htmlFor="tab7"><i className="icon-globe"></i>Ref. Personal</label>

                                    <input type="radio" name="pcss3t" id="tab8" className="tab-content-last" />
                                    <label htmlFor="tab8"><i className="icon-globe"></i>Ref. Laboral</label>

                                    <ul>
                                        <li className="tab-content tab-content-first typography">
                                            <div className="container">
                                                <h2>Datos Generales del Postulante</h2>
                                                <form className="row g-3">
                                                    <div className="col-md-6">
                                                        <label className="form-label">Nombres *</label>
                                                        <input type="text" className="form-control" name="nombres" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Apellido del padre *</label>
                                                        <input type="text" className="form-control" name="apellidoPadre" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Apellido de la madre *</label>
                                                        <input type="text" className="form-control" name="apellidoMadre" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Fecha de Nacimiento *</label>
                                                        <input type="date" className="form-control" name="fechaNacimiento" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Lugar de Nacimiento *</label>
                                                        <input type="text" className="form-control" name="ciudadNacimiento" placeholder="Ciudad" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">País de Nacimiento *</label>
                                                        <select className="form-select" name="paisNacimiento" required>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Otro">Otro</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Lugar de Residencia</label>
                                                        <input type="text" className="form-control" name="ciudadResidencia" placeholder="Ciudad" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">País de Residencia</label>
                                                        <select className="form-select" name="paisResidencia">
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Otro">Otro</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Dirección</label>
                                                        <input type="text" className="form-control" name="direccion" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Zona</label>
                                                        <input type="text" className="form-control" name="zona" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Teléfono *</label>
                                                        <input type="text" className="form-control" name="telefono" placeholder="Teléfono Fijo" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Teléfono Móvil</label>
                                                        <input type="text" className="form-control" name="telefonoMovil" placeholder="Teléfono Móvil" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Email *</label>
                                                        <input type="email" className="form-control" name="email" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Tipo de Documento *</label>
                                                        <select className="form-select" name="documentoIdentidad" required>
                                                            <option value="CI">Cédula de Identidad</option>
                                                            <option value="Pasaporte">Pasaporte</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Número de Documento *</label>
                                                        <input type="text" className="form-control" name="numeroDocumento" required />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Expedido en</label>
                                                        <input type="text" className="form-control" name="expedidoEn" placeholder="Expedido en" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Fotografía del Postulante</label>
                                                        <div className="custom-file">
                                                            <input
                                                                type="file"
                                                                className="custom-file-input"
                                                                id="customFile"
                                                                accept="image/*"
                                                                onChange={handleImageChange}
                                                            />
                                                            <label className="custom-file-label" htmlFor="customFile">Seleccionar archivo</label>
                                                        </div>
                                                        {selectedImage && (
                                                            <div className="mt-3">
                                                                <img
                                                                    src={selectedImage}
                                                                    alt="Preview"
                                                                    className="img-thumbnail"
                                                                    style={{ maxWidth: '100%', maxHeight: '200px' }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-2 typography">
                                            <div className={Estilos.container}>
                                                <h2>INFORMACIÓN SOBRE FORMACIÓN ACADÉMICA</h2>
                                                <button className={Estilos.addButton} onClick={handleInfoAcademicaModalOpen}>+ ADICIONAR NUEVO</button>

                                                <PerfilFormacionAcademicaLista formacionLista={formacionLista} onEditClick={handleInfoAcademicaModalOpen} />

                                                {showInfoAcademicaModal && (
                                                    <div className="modal fade show d-block" style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    }} tabIndex="-1" role="dialog">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">Agregar Formación Académica</h5>
                                                                    <button type="button" className="btn-close" onClick={handleInfoAcademicaModalClose}></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nivel de Formación</label>
                                                                            <select className="form-control" defaultValue={selectedInfoAcademica?.nivelFormacion || ''} required>
                                                                                <option value="">Selecciona una opción</option>
                                                                                <option value="Licenciatura">Licenciatura</option>
                                                                                <option value="Maestría">Maestría</option>
                                                                                <option value="Doctorado">Doctorado</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Centro Educativo</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedInfoAcademica?.centroEducativo || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Título obtenido</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedInfoAcademica?.tituloObtenido || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Fecha Título</label>
                                                                            <input type="date" className="form-control" defaultValue={selectedInfoAcademica?.fechaTitulo || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Ciudad</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedInfoAcademica?.ciudad || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">País</label>
                                                                            <select className="form-control" defaultValue={selectedInfoAcademica?.pais || ''} required>
                                                                                <option value="Bolivia">Bolivia</option>
                                                                                <option value="Otro">Otro</option>
                                                                            </select>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" onClick={handleInfoAcademicaModalClose}>
                                                                        Cancelar
                                                                    </button>
                                                                    <button type="button" className="btn btn-primary">
                                                                        Guardar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-3 typography">
                                            <div className={Estilos.container}>
                                                <h2>CURSOS/TALLERES</h2>
                                                <button className={Estilos.addButton} onClick={handleCursosModalOpen}>+ ADICIONAR NUEVO</button>

                                                <PerfilCursosLista cursosLista={cursosLista} onEditClick={handleCursosModalOpen} />

                                                {/* Modal para formulario */}
                                                {showCursosModal && (
                                                    <div className="modal fade show d-block" style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    }} tabIndex="-1" role="dialog">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">Agregar Curso/Taller</h5>
                                                                    <button type="button" className="btn-close" onClick={handleCursosModalClose}></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Tipo</label>
                                                                            <select className="form-control" defaultValue={selectedCurso?.tipo || ''} required>
                                                                                <option value="">Selecciona una opción</option>
                                                                                <option value="Curso">Curso</option>
                                                                                <option value="Taller">Taller</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nombre del Curso/Taller</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedCurso?.nombreCurso || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Centro de Estudio</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedCurso?.centroEducativo || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">País</label>
                                                                            <select className="form-control" defaultValue={selectedCurso?.pais || ''} required>
                                                                                <option value="Bolivia">Bolivia</option>
                                                                                <option value="Otro">Otro</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Duración</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedCurso?.duracion || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Modalidad</label>
                                                                            <select className="form-control" defaultValue={selectedCurso?.modalidad || ''} required>
                                                                                <option value="Presencial">Presencial</option>
                                                                                <option value="En línea">En línea</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Fecha Inicio</label>
                                                                            <input type="date" className="form-control" defaultValue={selectedCurso?.fechaInicio || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Fecha Fin</label>
                                                                            <input type="date" className="form-control" defaultValue={selectedCurso?.fechaFin || ''} required />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" onClick={handleCursosModalClose}>
                                                                        Cancelar
                                                                    </button>
                                                                    <button type="button" className="btn btn-primary">
                                                                        Guardar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-4 typography">
                                            <div className={Estilos.container}>
                                                <h2>IDIOMAS</h2>
                                                <button className={Estilos.addButton} onClick={handleIdiomasModalOpen}>+ ADICIONAR NUEVO</button>

                                                <PerfilIdiomasLista idiomasLista={idiomasLista} onEditClick={handleIdiomasModalOpen} />

                                                {/* Modal para formulario */}
                                                {showIdiomasModal && (
                                                    <div className="modal fade show d-block" style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    }} tabIndex="-1" role="dialog">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">Agregar Idioma</h5>
                                                                    <button type="button" className="btn-close" onClick={handleIdiomasModalClose}></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Idioma</label>
                                                                            <input type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedIdioma?.idioma || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nivel Lectura</label>
                                                                            <select className="form-control" defaultValue={selectedIdioma?.nivelLectura || ''} required>
                                                                                <option value="">Selecciona una opción</option>
                                                                                <option value="Básico">Básico</option>
                                                                                <option value="Intermedio">Intermedio</option>
                                                                                <option value="Avanzado">Avanzado</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nivel Escritura</label>
                                                                            <select className="form-control" defaultValue={selectedIdioma?.nivelEscritura || ''} required>
                                                                                <option value="">Selecciona una opción</option>
                                                                                <option value="Básico">Básico</option>
                                                                                <option value="Intermedio">Intermedio</option>
                                                                                <option value="Avanzado">Avanzado</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nivel Comprensión</label>
                                                                            <select className="form-control" defaultValue={selectedIdioma?.nivelComprension || ''} required>
                                                                                <option value="">Selecciona una opción</option>
                                                                                <option value="Básico">Básico</option>
                                                                                <option value="Intermedio">Intermedio</option>
                                                                                <option value="Avanzado">Avanzado</option>
                                                                            </select>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" onClick={handleIdiomasModalClose}>
                                                                        Cancelar
                                                                    </button>
                                                                    <button type="button" className="btn btn-primary">
                                                                        Guardar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-5 typography">
                                            <div className={Estilos.container}>
                                                <h2>SISTEMAS</h2>
                                                <button className={Estilos.addButton} onClick={() => handleSistemasModalOpen(null)}>+ ADICIONAR NUEVO</button>

                                                <PerfilSistemasLista sistemasLista={sistemasLista} onEditClick={handleSistemasModalOpen} />

                                                {/* Modal para formulario */}
                                                {showSistemasModal && (
                                                    <div className="modal fade show d-block" style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    }} tabIndex="-1" role="dialog">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">Agregar Sistema</h5>
                                                                    <button type="button" className="btn-close" onClick={handleSistemasModalClose}></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Programa/Sistema/Paquete</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedSistema?.sistema || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nivel Conocimiento</label>
                                                                            <select
                                                                                className="form-control"
                                                                                defaultValue={selectedSistema?.nivelConocimiento || ''}
                                                                                required
                                                                            >
                                                                                <option value="">Selecciona una opción</option>
                                                                                <option value="Básico">Básico</option>
                                                                                <option value="Medio">Medio</option>
                                                                                <option value="Avanzado">Avanzado</option>
                                                                            </select>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" onClick={handleSistemasModalClose}>
                                                                        Cancelar
                                                                    </button>
                                                                    <button type="button" className="btn btn-primary">
                                                                        Guardar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-6 typography">
                                            <div className={Estilos.container}>
                                                <h2>EXPERIENCIA LABORAL</h2>
                                                <button className={Estilos.addButton} onClick={() => handleExpLaboralModalOpen(null)}>+ ADICIONAR EXPERIENCIA LABORAL</button>

                                                <PerfilExperienciaLaboralLista experienciaLaboralLista={experienciaLaboralLista} onEditClick={handleExpLaboralModalOpen} />

                                                {/* Modal para Experiencia personal */}
                                                {showExpLaboralModal && (
                                                    <div className="modal fade show d-block" style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    }} tabIndex="-1" role="dialog">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">Agregar Experiencia Laboral</h5>
                                                                    <button type="button" className="btn-close" onClick={handleExpLaboralModalClose}></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Empresa</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.empresa || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Cargo</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.cargo || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Sector</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.sector || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nro. Dependientes</label>
                                                                            <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.dependientes || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nombre del superior</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.nombreSuperior || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Cargo del superior</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.cargoSuperior || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Teléfono empresa</label>
                                                                            <input
                                                                                type="tel"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.telefonoEmpresa || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Principales funciones</label>
                                                                            <textarea
                                                                                className="form-control"
                                                                                rows="3"
                                                                                defaultValue={selectedExpLaboral?.funciones || ''}
                                                                                required
                                                                            ></textarea>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Fecha Inicio</label>
                                                                            <input
                                                                                type="date"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.fechaInicio || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Fecha Término</label>
                                                                            <input
                                                                                type="date"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.fechaTermino || ''}
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Total experiencia</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.experiencia || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Motivo de Desvinculación</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                defaultValue={selectedExpLaboral?.motivoDesvinculacion || ''}
                                                                                required
                                                                            />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" onClick={handleExpLaboralModalClose}>
                                                                        Cancelar
                                                                    </button>
                                                                    <button type="button" className="btn btn-primary">
                                                                        Guardar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-7 typography">
                                            <div className={Estilos.container}>
                                                <h2>REFERENCIAS PERSONALES</h2>
                                                <button className={Estilos.addButton} onClick={handleRefPersonalModalOpen}>+ ADICIONAR NUEVO</button>

                                                <PerfilReferenciaPersonalLista referenciaPersonalLista={referenciaPersonalLista} onEditClick={handleRefPersonalModalOpen} />

                                                {/* Modal para formulario */}
                                                {showRefPersonalModal && (
                                                    <div className="modal fade show d-block" style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    }} tabIndex="-1" role="dialog">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">Agregar Referencia Personal</h5>
                                                                    <button type="button" className="btn-close" onClick={handleRefPersonalModalClose}></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nombre</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefPersonal?.nombre || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Empresa</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefPersonal?.empresa || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Cargo</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefPersonal?.cargo || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Parentesco</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefPersonal?.parentesco || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Teléfono</label>
                                                                            <input type="tel" className="form-control" defaultValue={selectedRefPersonal?.telefono || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Celular</label>
                                                                            <input type="tel" className="form-control" defaultValue={selectedRefPersonal?.celular || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Correo electrónico</label>
                                                                            <input type="email" className="form-control" defaultValue={selectedRefPersonal?.correoElectronico || ''} required />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" onClick={handleRefPersonalModalClose}>
                                                                        Cancelar
                                                                    </button>
                                                                    <button type="button" className="btn btn-primary">
                                                                        Guardar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-last typography">
                                            <div className={Estilos.container}>
                                                <h2>REFERENCIAS LABORALES</h2>
                                                <button className={Estilos.addButton} onClick={handleRefLaboralModalOpen}>+ ADICIONAR NUEVO</button>

                                                <PerfilReferenciaLaboralLista referenciaLaboralLista={referenciaLaboralLista} onEditClick={handleRefLaboralModalOpen} />

                                                {/* Modal para formulario */}
                                                {showRefLaboralModal && (
                                                    <div className="modal fade show d-block" style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                                    }} tabIndex="-1" role="dialog">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title">Agregar Referencia Laboral</h5>
                                                                    <button type="button" className="btn-close" onClick={handleRefLaboralModalClose}></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <form>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Nombre</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefLaboral?.nombre || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Empresa</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefLaboral?.empresa || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Cargo</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefLaboral?.cargo || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Relación Laboral</label>
                                                                            <input type="text" className="form-control" defaultValue={selectedRefLaboral?.relacionLaboral || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Teléfono</label>
                                                                            <input type="tel" className="form-control" defaultValue={selectedRefLaboral?.telefono || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Celular</label>
                                                                            <input type="tel" className="form-control" defaultValue={selectedRefLaboral?.celular || ''} required />
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Correo electrónico</label>
                                                                            <input type="email" className="form-control" defaultValue={selectedRefLaboral?.correoElectronico || ''} required />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" onClick={handleRefLaboralModalClose}>
                                                                        Cancelar
                                                                    </button>
                                                                    <button type="button" className="btn btn-primary">
                                                                        Guardar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}