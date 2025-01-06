"use client";

import NextAuth from "next-auth";

import EncabezadoConvocatoria from "@/components/common/EncabezadoConvocatoria";
import Estilos from '@/estilos/InfoAcademica.module.css';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

import PerfilFormacionAcademicaLista from "@/components/common/PerfilFormacionAcademicaLista";
import PerfilFormacionAcademicaModal from "@/components/common/PerfilFormacionAcademicaModal";

import PerfilCursosLista from "@/components/common/PerfilCursosLista";
import PerfilCursosModal from "@/components/common/PerfilCursosModal";

import PerfilIdiomasLista from "@/components/common/PerfilIdiomasLista";
import PerfilIdiomasModal from "@/components/common/PerfilIdiomasModal";

import PerfilSistemasLista from "@/components/common/PerfilSistemasLista";
import PerfilSistemasModal from "@/components/common/PerfilSistemasModal";

import PerfilExperienciaLaboralLista from "@/components/common/PerfilExperienciaLaboralLista";
import PerfilExperienciaLaboralModal from "@/components/common/PerfilExperienciaLaboralModal";

import PerfilReferenciaPersonalLista from "@/components/common/PerfilReferenciaPersonalLista";
import PerfilReferenciaPersonalModal from "@/components/common/PerfilReferenciaPersonalModal";

import PerfilReferenciaLaboralLista from "@/components/common/PerfilReferenciaLaboralLista";
import PerfilReferenciaLaboralModal from "@/components/common/PerfilReferenciaLaboralModal";

import { obtenerPerfil } from '@/services/convocatoriaService';
import { agregarPerfil } from '@/services/convocatoriaService';
import { actualizarPerfil } from '@/services/convocatoriaService';
import { guardarImagen } from '@/services/convocatoriaService';

import { obtenerPerfilFormacionAcademica } from '@/services/convocatoriaService';
import { agregarPerfilFormacionAcademica } from '@/services/convocatoriaService';
import { actualizarPerfilFormacionAcademica } from '@/services/convocatoriaService';

import { obtenerPerfilCursos } from '@/services/convocatoriaService';
import { agregarPerfilCurso } from '@/services/convocatoriaService';
import { actualizarPerfilCurso } from '@/services/convocatoriaService';

import { obtenerPerfilIdiomas } from '@/services/convocatoriaService';
import { agregarPerfilIdioma } from '@/services/convocatoriaService';
import { actualizarPerfilIdioma } from '@/services/convocatoriaService';

import { obtenerPerfilSistemas } from '@/services/convocatoriaService';
import { agregarPerfilSistema } from '@/services/convocatoriaService';
import { actualizarPerfilSistema } from '@/services/convocatoriaService';

import { obtenerPerfilExperienciaLaboral } from '@/services/convocatoriaService';
import { agregarPerfilExperienciaLaboral } from '@/services/convocatoriaService';
import { actualizarPerfilExperienciaLaboral } from '@/services/convocatoriaService';

import { obtenerPerfilReferenciaPersonal } from '@/services/convocatoriaService';
import { agregarPerfilReferenciaPersonal } from '@/services/convocatoriaService';
import { actualizarPerfilReferenciaPersonal } from '@/services/convocatoriaService';

import { obtenerPerfilReferenciaLaboral } from '@/services/convocatoriaService';
import { agregarPerfilReferenciaLaboral } from '@/services/convocatoriaService';
import { actualizarPerfilReferenciaLaboral } from '@/services/convocatoriaService';

/* Parametricas */
import { obtenerParNivelFormacion } from '@/services/convocatoriaService';
import { obtenerParIdioma } from '@/services/convocatoriaService';
import { obtenerParNivelConocimiento } from '@/services/convocatoriaService';
import { obtenerParPrograma } from '@/services/convocatoriaService';
import { obtenerParTipoCapacitacion } from '@/services/convocatoriaService';
import { obtenerParParentesco } from '@/services/convocatoriaService';

import { signIn, signOut, useSession } from "next-auth/react";

const Perfil = ({ params }) => {
    const { data: session, status } = useSession();
    const idPerfil = session?.user?.postulanteId > 0 ? session.user.postulanteId : 0;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [datosPersonales, setDatosPersonales] = useState({});
    const [formacionLista, setFormacionAcademica] = useState([]);
    const [cursosLista, setCursos] = useState([]);
    const [idiomasLista, setIdiomas] = useState([]);
    const [sistemasLista, setSistemas] = useState([]);
    const [experienciaLaboralLista, setExperienciaLaboral] = useState([]);
    const [referenciaPersonalLista, setReferenciaPersonal] = useState([]);
    const [referenciaLaboralLista, setReferenciaLaboral] = useState([]);

    const [ParNivelFormacion, setParNivelFormacion] = useState([]);
    const [ParIdioma, setIdioma] = useState([]);
    const [ParNivelConocimiento, setParNivelConocimiento] = useState([]);
    const [ParPrograma, setParPrograma] = useState([]);
    const [ParTipoCapacitacion, setParTipoCapacitacion] = useState([]);
    const [ParParentesco, setParParentesco] = useState([]);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [archivo, setArchivo] = useState(null);

    /* Modales */
    const [showInfoAcademicaModal, setShowInfoAcademicaModal] = useState(false);
    const [selectedInfoAcademica, setSelectedInfoAcademica] = useState(null);

    const handleInfoAcademicaModalOpen = (id) => {
        const infoAcademicaSeleccionado = formacionLista?.find((InfoAcademica) => InfoAcademica.id === id);
        setSelectedInfoAcademica(infoAcademicaSeleccionado || null);
        setShowInfoAcademicaModal(true);
    };
    const handleInfoAcademicaModalClose = async () => {
        setSelectedInfoAcademica(null);
        setShowInfoAcademicaModal(false);
        try {
            const perfilFormacion = await obtenerPerfilFormacionAcademica(idPerfil);
            setFormacionAcademica(perfilFormacion);
        } catch (error) {
            console.error('Error al obtener la lista de formación académica actualizada:', error);
        }
    };

    const [showCursosModal, setShowCursosModal] = useState(false);
    const [selectedCurso, setSelectedCurso] = useState(null);
    const handleCursosModalOpen = (id) => {
        const cursoSeleccionado = cursosLista?.find((curso) => curso.id === id);
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
        const idiomaSeleccionado = idiomasLista?.find((idioma) => idioma.id === id);
        setSelectedIdioma(idiomaSeleccionado || null);
        setShowIdiomasModal(true);
    };
    const handleIdiomasModalClose = async () => {
        setSelectedIdioma(null);
        setShowIdiomasModal(false);
        try {
            const perfilIdiomas = await obtenerPerfilIdiomas(idPerfil);
            setIdiomas(perfilIdiomas);
        } catch (error) {
            console.error('Error al obtener los idiomas actualizados:', error);
        }
    };

    const [showSistemasModal, setShowSistemasModal] = useState(false);
    const [selectedSistema, setSelectedSistema] = useState(null);
    const handleSistemasModalOpen = (id) => {
        const sistemaSeleccionado = sistemasLista?.find((sistema) => sistema.id === id);
        setSelectedSistema(sistemaSeleccionado || null);
        setShowSistemasModal(true);
    };
    const handleSistemasModalClose = async () => {
        setSelectedSistema(null);
        setShowSistemasModal(false);
        try {
            const perfilSistemas = await obtenerPerfilSistemas(idPerfil);
            setSistemas(perfilSistemas);
        } catch (error) {
            console.error('Error al obtener los sistemas actualizados:', error);
        }
    };

    const [showExpLaboralModal, setShowExpLaboralModal] = useState(false);
    const [selectedExpLaboral, setSelectedExpLaboral] = useState(null);
    const handleExpLaboralModalOpen = (id) => {
        const experienciaLaboralSeleccionado = experienciaLaboralLista?.find((experienciaLaboral) => experienciaLaboral.id === id);
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
        const referenciaPersonalSeleccionado = referenciaPersonalLista?.find((referenciaPersonal) => referenciaPersonal.id === id);
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
        const referenciaLaboralSeleccionado = referenciaLaboralLista?.find((referenciaLaboral) => referenciaLaboral.id === id);
        setSelectedRefLaboral(referenciaLaboralSeleccionado);
        setShowRefLaboralModal(true);
    };
    const handleRefLaboralModalClose = () => {
        setSelectedRefLaboral(null);
        setShowRefLaboralModal(false);
    };

    const loadData = async () => {
        try {
            if(idPerfil > 0)
            {
                const perfil = await obtenerPerfil(idPerfil); 
                setDatosPersonales(perfil);    

                const perfilFormacion = await obtenerPerfilFormacionAcademica(idPerfil);
                setFormacionAcademica(perfilFormacion);
    
                const perfilCursos = await obtenerPerfilCursos(idPerfil);
                setCursos(perfilCursos);
    
                const perfilIdiomas = await obtenerPerfilIdiomas(idPerfil);
                setIdiomas(perfilIdiomas);
    
                const perfilSistemas = await obtenerPerfilSistemas(idPerfil);
                setSistemas(perfilSistemas);
    
                const perfilExpLaboral = await obtenerPerfilExperienciaLaboral(idPerfil);
                setExperienciaLaboral(perfilExpLaboral);
    
                const perfilRefPersonal = await obtenerPerfilReferenciaPersonal(idPerfil);
                setReferenciaPersonal(perfilRefPersonal);
    
                const perfilRefLaboral = await obtenerPerfilReferenciaLaboral(idPerfil);
                setReferenciaLaboral(perfilRefLaboral);
            }

            /* paramétricas */
            const parNivelFormacion = await obtenerParNivelFormacion();
            setParNivelFormacion(parNivelFormacion);

            const parIdioma = await obtenerParIdioma();
            setIdioma(parIdioma);

            const parNivelConocimiento = await obtenerParNivelConocimiento();
            setParNivelConocimiento(parNivelConocimiento);

            const parPrograma = await obtenerParPrograma();
            setParPrograma(parPrograma);

            const parTipoCapacitacion = await obtenerParTipoCapacitacion();
            setParTipoCapacitacion(parTipoCapacitacion);

            const parParentesco = await obtenerParParentesco();
            setParParentesco(parParentesco);

        } catch (error) {
            console.error("Error obteniendo los datos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    const handleImageChange = async (event) => {
        const file = event.target.files[0];  // Obtén el archivo seleccionado
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);  // Vista previa (opcional)
            };
            reader.readAsDataURL(file);

            setArchivo(file);  // Guarda el archivo en el estado
            // Llama automáticamente a la función para enviar el archivo
            try {
                // Ahora pasa 'archivo' en lugar de 'file' directamente
                const resultado = await handleSubmitImage();

            } catch (error) {
                console.error("Error al cargar la imagen:", error);
            }
        } else {
            setSelectedImage(null);  // Si no se selecciona archivo, limpia la vista previa
        }
    };
    const handleSubmitImage = async () => {
        // Verifica que 'archivo' esté presente
        if (!archivo) {
            setError("Debe cargar un archivo válido.");
            return;
        }
        const formData = new FormData();
        formData.append('file', archivo);
        formData.append('ruta', ruta || '/');

        try {
            const respuesta = await cargarImagen(formData);
            openSnackbar(respuesta.mensaje || "Imagen guardada con éxito.");
            setArchivo(null);
            setFileName("");
            setFileType("");
            setPreview(null);
            setError("");

        } catch (error) {
            console.error("Error al subir el archivo:", error.message);
            setError("Error al subir el archivo. Intente nuevamente.");
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosPersonales({
            ...datosPersonales,
            [name]: value,
        });
    };

    const handleGuardarPerfil = async (event) => {
        event.preventDefault(); // Evitar recarga de la página

        const nombres = document.getElementById('nombres').value;
        const apellidoPaterno = document.getElementById('apellidoPadre').value;
        const apellidoMaterno = document.getElementById('apellidoMadre').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const lugarNacimiento = document.getElementById('lugarNacimiento').value;
        const paisNacimiento = document.getElementById('paisNacimiento').value;
        const lugarResidencia = document.getElementById('lugarResidencia').value;
        const paisResidencia = document.getElementById('paisResidencia').value;
        const direccion = document.getElementById('direccion').value;
        const zona = document.getElementById('zona').value;
        const telefono = document.getElementById('telefono').value;
        const telefonoMovil = document.getElementById('telefonoMovil').value;
        const email = document.getElementById('email').value;
        const tipoDocumento = document.getElementById('tipoDocumento').value;
        const numeroDocumento = document.getElementById('numeroDocumento').value;
        const expedidoEn = document.getElementById('expedidoEn').value;
        const fotografia = '';

        const datos = {
            nombres: nombres,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            fechaNacimiento: fechaNacimiento,
            ciudadNacimiento: lugarNacimiento,
            paisNacimiento: paisNacimiento,
            ciudadResidencia: lugarResidencia,
            paisResidencia: paisResidencia,
            direccion: direccion,
            zona: zona,
            telefono: telefono,
            telefonoMovil: telefonoMovil,
            email: email,
            documentoExpedido: expedidoEn,
            numeroDocumento: numeroDocumento,
            fotografia: fotografia,
        };
        try {
            let result = await actualizarPerfil(idPerfil, datos);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                const perfil = await obtenerPerfil(idPerfil);
                setDatosPersonales(perfil);
            });
        } catch (error) {
            console.error('Error al guardar los datos personales', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar los datos personales.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        }
    };
    const handleRegistraPerfil = async (event) => {
        event.preventDefault(); // Evitar recarga de la página

        const nombres = document.getElementById('nombres').value;
        const apellidoPaterno = document.getElementById('apellidoPadre').value;
        const apellidoMaterno = document.getElementById('apellidoMadre').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const lugarNacimiento = document.getElementById('lugarNacimiento').value;
        const paisNacimiento = document.getElementById('paisNacimiento').value;
        const lugarResidencia = document.getElementById('lugarResidencia').value;
        const paisResidencia = document.getElementById('paisResidencia').value;
        const direccion = document.getElementById('direccion').value;
        const zona = document.getElementById('zona').value;
        const telefono = document.getElementById('telefono').value;
        const telefonoMovil = document.getElementById('telefonoMovil').value;
        const email = document.getElementById('email').value;
        const tipoDocumento = document.getElementById('tipoDocumento').value;
        const numeroDocumento = document.getElementById('numeroDocumento').value;
        const expedidoEn = document.getElementById('expedidoEn').value;
        const fotografia = '';

        const datos = {
            nombres: nombres,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            fechaNacimiento: fechaNacimiento,
            ciudadNacimiento: lugarNacimiento,
            paisNacimiento: paisNacimiento,
            ciudadResidencia: lugarResidencia,
            paisResidencia: paisResidencia,
            direccion: direccion,
            zona: zona,
            telefono: telefono,
            telefonoMovil: telefonoMovil,
            email: email,
            documentoExpedido: expedidoEn,
            numeroDocumento: numeroDocumento,
            fotografia: fotografia,
        };
        
        try {
            let result = await agregarPerfil(datos);

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                const perfil = await obtenerPerfil(idPerfil);
                setDatosPersonales(perfil);
            });
        } catch (error) {
            console.error('Error al guardar los datos personales', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar los datos personales.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        }
    };
    const handleGuardarFormacionAcademica = async () => {
        const NivelFormacionId = document.getElementById('NivelFormacionId').value;
        const centroEstudios = document.getElementById('centroEstudios').value;
        const tituloObtenido = document.getElementById('tituloObtenido').value;
        const fechaTitulo = document.getElementById('fechaTitulo').value;
        const ciudad = document.getElementById('ciudad').value;
        const pais = document.getElementById('pais').value;

        const datos = {
            postulanteId: idPerfil,
            parNivelFormacion: NivelFormacionId,
            centroEstudios: centroEstudios,
            tituloObtenido: tituloObtenido,
            fechaTitulo: fechaTitulo,
            ciudad: ciudad,
            pais: pais,
        };

        try {
            let result;
            if (selectedInfoAcademica?.id) {
                result = await actualizarPerfilFormacionAcademica(selectedInfoAcademica.id, datos);
            } else {
                result = await agregarPerfilFormacionAcademica(datos);
            }

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                handleInfoAcademicaModalClose();

                const perfilFormacion = await obtenerPerfilFormacionAcademica(idPerfil);
                setFormacionAcademica(perfilFormacion);
            });
        } catch (error) {
            console.error('Error al guardar la formación académica:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar la formación académica.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleInfoAcademicaModalClose();

                const perfilFormacion = await obtenerPerfilFormacionAcademica(idPerfil);
                setFormacionAcademica(perfilFormacion);
            });
        }
    };
    const handleGuardarCurso = async () => {
        const tipoCapacitacion = document.getElementById('tipoCapacitacion').value;
        const nombres = document.getElementById('nombres').value;
        const centroEstudio = document.getElementById('centroEstudio').value;
        const pais = document.getElementById('pais').value;
        const duracion = document.getElementById('duracion').value;
        const modalidad = document.getElementById('modalidad').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;

        const datos = {
            postulanteId: idPerfil,
            parTipoCapacitacionId: tipoCapacitacion,
            nombres: nombres,
            centroEstudios: centroEstudio,
            pais: pais,
            horasAcademicas: duracion,
            modalidad: modalidad,
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
        };

        try {
            let result;
            if (selectedCurso?.id) {
                result = await actualizarPerfilCurso(selectedCurso.id, datos);
            } else {
                result = await agregarPerfilCurso(datos);
            }

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                handleCursosModalClose();

                const perfilCursos = await obtenerPerfilCursos(idPerfil);
                setIdiomas(perfilCursos);
            });
        } catch (error) {
            console.error('Error al guardar curso:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar el curso.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleCursosModalClose();

                const perfilCursos = await obtenerPerfilCursos(idPerfil);
                setCursos(perfilCursos);
            });
        }
    };
    const handleGuardarIdioma = async () => {
        const idioma = document.getElementById('idioma').value;
        const nivelLectura = document.getElementById('nivelLectura').value;
        const nivelEscritura = document.getElementById('nivelEscritura').value;
        const nivelComprension = document.getElementById('nivelComprension').value;

        const datos = {
            postulanteId: idPerfil,
            parIdiomaId: idioma,
            parNivelConocimientoLecturaId: nivelLectura,
            parNivelConocimientoEscrituraId: nivelEscritura,
            parNivelConocimientoConversacionId: nivelComprension,
        };

        try {
            let result;
            if (selectedIdioma?.id) {
                result = await actualizarPerfilIdioma(selectedIdioma.id, datos);
            } else {
                result = await agregarPerfilIdioma(datos);
            }

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                handleIdiomasModalClose();

                const perfilIdiomas = await obtenerPerfilIdiomas(idPerfil);
                setIdiomas(perfilIdiomas);
            });
        } catch (error) {
            console.error('Error al guardar idioma:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar el idioma.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleIdiomasModalClose();

                const perfilIdiomas = await obtenerPerfilIdiomas(idPerfil);
                setIdiomas(perfilIdiomas);
            });
        }
    };
    const handleGuardarSistema = async () => {
        const programa = document.getElementById('programa').value;
        const nivelConocimiento = document.getElementById('nivelConocimiento').value;

        const datos = {
            postulanteId: idPerfil,
            parProgramaId: programa,
            parNivelConocimientoId: nivelConocimiento,
        };

        try {
            let result;
            if (selectedSistema?.id) {
                result = await actualizarPerfilSistema(selectedSistema.id, datos);
            } else {
                result = await agregarPerfilSistema(datos);
            }

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                handleSistemasModalClose();

                const perfilSistemas = await obtenerPerfilSistemas(idPerfil);
                setSistemas(perfilSistemas);
            });
        } catch (error) {
            console.error('Error al guardar sistema:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar el sistema.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleIdiomasModalClose();

                const perfilSistemas = await obtenerPerfilSistemas(idPerfil);
                setIdiomas(perfilSistemas);
            });
        }
    };
    const handleGuardarExpLaboral = async () => {
        const empresa = document.getElementById('empresa').value;
        const cargo = document.getElementById('cargo').value;
        const sector = document.getElementById('sector').value;
        const nroDependientes = document.getElementById('nroDependientes').value;
        const nombreSuperior = document.getElementById('nombreSuperior').value;
        const cargoSuperior = document.getElementById('cargoSuperior').value;
        const telefono = document.getElementById('telefono').value;
        const principalesFunciones = document.getElementById('principalesFunciones').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;
        const totalExperiencia = document.getElementById('totalExperiencia').value;
        const motivoDesvinculación = document.getElementById('motivoDesvinculación').value;
        const actualmenteTrabajando = document.getElementById('currentlyWorking').value;

        const datos = {
            postulanteId: idPerfil,
            empresa: empresa,
            cargo: cargo,
            sector: sector,
            nroDependientes: nroDependientes,
            nombreSuperior: nombreSuperior,
            cargoSuperior: cargoSuperior,
            telefonoEmpresa: telefono,
            funciones: principalesFunciones,
            fechaInicio: fechaInicio,
            fechaConclusion: fechaFin,
            parProgramaId: totalExperiencia,
            motivoDesvinculacion: motivoDesvinculación,
            actualmenteTrabajando: actualmenteTrabajando,
        };

        try {
            let result;
            if (selectedExpLaboral?.id) {
                result = await actualizarPerfilExperienciaLaboral(selectedExpLaboral.id, datos);
            } else {
                result = await agregarPerfilExperienciaLaboral(datos);
            }

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                handleExpLaboralModalClose();

                const perfilExpLaboral = await obtenerPerfilExperienciaLaboral(idPerfil);
                setExperienciaLaboral(perfilExpLaboral);
            });
        } catch (error) {
            console.error('Error al guardar experiencia laboral:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar la experiencia laboral.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleExpLaboralModalClose();

                const perfilExpLaboral = await obtenerPerfilExperienciaLaboral(idPerfil);
                setExperienciaLaboral(perfilExpLaboral);
            });
        }
    };
    const handleGuardarRefPersonal = async () => {
        const nombres = document.getElementById('nombres').value;
        const empresa = document.getElementById('empresa').value;
        const cargo = document.getElementById('cargo').value;
        const parentesco = document.getElementById('parentesco').value;
        const telefono = document.getElementById('telefono').value;
        const telefonoMovil = document.getElementById('telefonoMovil').value;
        const email = document.getElementById('email').value;

        const datos = {
            postulanteId: idPerfil,
            nombres: nombres,
            cargo: cargo,
            empresa: empresa,
            telefono: telefono,
            telefonoMovil: telefonoMovil,
            parParentescoId: parentesco,
            email: email,
        };

        try {
            let result;
            if (selectedRefPersonal?.id) {
                result = await actualizarPerfilReferenciaPersonal(selectedRefPersonal.id, datos);
            } else {
                result = await agregarPerfilReferenciaPersonal(datos);
            }

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                handleRefPersonalModalClose();

                const perfilRefPersonal = await obtenerPerfilReferenciaPersonal(idPerfil);
                setReferenciaPersonal(perfilRefPersonal);
            });
        } catch (error) {
            console.error('Error al guardar la referencia personal:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar la referencia personal.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleRefPersonalModalClose();

                const perfilRefPersonal = await obtenerPerfilReferenciaPersonal(idPerfil);
                setReferenciaPersonal(perfilRefPersonal);
            });
        }
    };
    const handleGuardarRefLaboral = async () => {
        const nombres = document.getElementById('nombres').value;
        const empresa = document.getElementById('empresa').value;
        const cargo = document.getElementById('cargo').value;
        const relacion = document.getElementById('relacion').value;
        const telefono = document.getElementById('telefono').value;
        const telefonoMovil = document.getElementById('telefonoMovil').value;
        const email = document.getElementById('email').value;

        const datos = {
            postulanteId: idPerfil,
            nombres: nombres,
            cargo: cargo,
            empresa: empresa,
            telefono: telefono,
            telefonoMovil: telefonoMovil,
            relacion: relacion,
            email: email,

        };

        try {
            let result;
            if (selectedRefLaboral?.id) {
                result = await actualizarPerfilReferenciaLaboral(selectedRefLaboral.id, datos);
            } else {
                result = await agregarPerfilReferenciaLaboral(datos);
            }

            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                handleRefLaboralModalClose();

                const perfilRefLaboral = await obtenerPerfilReferenciaLaboral(idPerfil);
                setReferenciaLaboral(perfilRefLaboral);
            });
        } catch (error) {
            console.error('Error al guardar la referencia laboral:', error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al guardar la referencia laboral.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleRefLaboralModalClose();

                const perfilRefLaboral = await obtenerPerfilReferenciaLaboral(idPerfil);
                setReferenciaLaboral(perfilRefLaboral);
            });
        }
    };

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

                                    <input type="radio" name="pcss3t" id="tab2" className="tab-content-2" disabled={idPerfil === 0} />
                                    <label htmlFor="tab2"><i className="icon-picture"></i>Información académica</label>

                                    <input type="radio" name="pcss3t" id="tab3" className="tab-content-3" disabled={idPerfil === 0} />
                                    <label htmlFor="tab3"><i className="icon-cogs"></i>Cursos/Talleres</label>

                                    <input type="radio" name="pcss3t" id="tab4" className="tab-content-4" disabled={idPerfil === 0} />
                                    <label htmlFor="tab4"><i className="icon-globe"></i>Idiomas</label>

                                    <input type="radio" name="pcss3t" id="tab5" className="tab-content-5" disabled={idPerfil === 0} />
                                    <label htmlFor="tab5"><i className="icon-globe"></i>Sistemas</label>

                                    <input type="radio" name="pcss3t" id="tab6" className="tab-content-6" disabled={idPerfil === 0} />
                                    <label htmlFor="tab6"><i className="icon-globe"></i>Experiencia Laboral</label>

                                    <input type="radio" name="pcss3t" id="tab7" className="tab-content-7" disabled={idPerfil === 0} />
                                    <label htmlFor="tab7"><i className="icon-globe"></i>Ref. Personal</label>

                                    <input type="radio" name="pcss3t" id="tab8" className="tab-content-last" disabled={idPerfil === 0} />
                                    <label htmlFor="tab8"><i className="icon-globe"></i>Ref. Laboral</label>

                                    <ul>
                                        <li className="tab-content tab-content-first typography">
                                            <div className="container">
                                                <h2>Datos Generales del Postulante</h2>
                                                <form className="row g-3" onSubmit={handleGuardarPerfil}>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Nombres *</label>
                                                        <input
                                                        type="text"
                                                        id="nombres"
                                                        className="form-control"
                                                        name="nombres"
                                                        defaultValue={datosPersonales?.nombres || ""}
                                                        {...register("nombres", { required: "Apellido es requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Apellido del padre *</label>
                                                        <input
                                                        type="text"
                                                        id="apellidoPadre"
                                                        className="form-control"
                                                        name="apellidoPadre"
                                                        defaultValue={datosPersonales?.apellidoPaterno || ""}
                                                        {...register("apellidoPaterno", { required: "Apellido es requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Apellido de la madre *</label>
                                                        <input
                                                        type="text"
                                                        id="apellidoMadre"
                                                        className="form-control"
                                                        name="apellidoMadre"
                                                        defaultValue={datosPersonales?.apellidoMaterno || ""}
                                                        {...register("apellidoMaterno", { required: "Apellido es requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Fecha de Nacimiento *</label>
                                                        <input
                                                        type="date"
                                                        id="fechaNacimiento"
                                                        className="form-control"
                                                        name="fechaNacimiento"
                                                        defaultValue={datosPersonales?.fechaNacimiento || ""}
                                                        {...register("fechaNacimiento", { required: "Apellido es requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Lugar de Nacimiento *</label>
                                                        <input
                                                        type="text"
                                                        id="lugarNacimiento"
                                                        className="form-control"
                                                        name="ciudadNacimiento"
                                                        defaultValue={datosPersonales?.ciudadNacimiento || ""}
                                                        {...register("ciudadNacimiento", { required: "La Ciudad de nacimiento es un dato requerido" })}
                                                        required
                                                        />
                                                    </div>






                                                    {/* <div>
                                                        <label htmlFor="nombre">Nombre de Seguro</label>
                                                        <input id="nombre" type="text"
                                                            {...register("nombre", { required: "Nombre del seguro es requerido" })} />
                                                        {errors.nombre &&
                                                            <span style={{ color: "red" }}>{errors.nombre.message}</span>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="nombreCorto">Nombre Corto</label>
                                                        <input id="nombreCorto" type="text" {...register("nombreCorto", { required: "Nombre corto es requerido" })} /> {errors.nombreCorto && <span style={{ color: "red" }}>{errors.nombreCorto.message}</span>}
                                                    </div> */}






                                                    <div className="col-md-6">
                                                        <label className="form-label">País de Nacimiento *</label>
                                                        <select id="paisNacimiento" onChange={handleChange} className="form-select" name="paisNacimiento" required>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Otro">Otro</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Lugar de Residencia</label>
                                                        <input
                                                        type="text"
                                                        id="lugarResidencia"
                                                        className="form-control"
                                                        name="ciudadResidencia"
                                                        defaultValue={datosPersonales?.ciudadResidencia || ""}
                                                        {...register("ciudadResidencia", { required: "La Ciudad de residencia es un dato requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">País de Residencia</label>
                                                        <select id="paisResidencia" onChange={handleChange} className="form-select" name="paisResidencia">
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Otro">Otro</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Dirección</label>
                                                        <input
                                                        type="text"
                                                        id="direccion"
                                                        className="form-control"
                                                        name="direccion"
                                                        defaultValue={datosPersonales?.direccion || ""}
                                                        {...register("direccion", { required: "La Dirección es un dato requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Zona</label>
                                                        <input
                                                        type="text"
                                                        id="zona"
                                                        className="form-control"
                                                        name="zona"
                                                        defaultValue={datosPersonales?.zona || ""}
                                                        {...register("zona", { required: "La Zona es un dato requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Teléfono *</label>
                                                        <input
                                                        type="text"
                                                        id="telefono"
                                                        className="form-control"
                                                        name="telefono"
                                                        defaultValue={datosPersonales?.telefono || ""}
                                                        {...register("telefono")}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Teléfono Móvil</label>
                                                        <input
                                                        type="text"
                                                        id="telefonoMovil"
                                                        className="form-control"
                                                        name="telefonoMovil"
                                                        defaultValue={datosPersonales?.telefonoMovil || ""}
                                                        {...register("telefonoMovil", { required: "El teléfono móvil es un dato requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Email *</label>
                                                        <input
                                                        type="text"
                                                        id="email"
                                                        className="form-control"
                                                        name="email"
                                                        defaultValue={datosPersonales?.email || ""}
                                                        {...register("email", { required: "El email es un dato requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Tipo de Documento *</label>
                                                        <select id="tipoDocumento" className="form-select" name="documentoIdentidad" onChange={handleChange} required>
                                                            <option value="CI">Cédula de Identidad</option>
                                                            <option value="Pasaporte">Pasaporte</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Número de Documento *</label>
                                                        <input
                                                        type="text"
                                                        id="numeroDocumento"
                                                        className="form-control"
                                                        name="numeroDocumento"
                                                        defaultValue={datosPersonales?.numeroDocumento || ""}
                                                        {...register("numeroDocumento", { required: "El número de documento de identidad es un dato requerido" })}
                                                        required
                                                        />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="form-label">Expedido en</label>
                                                        <input
                                                        type="text"
                                                        id="expedidoEn"
                                                        className="form-control"
                                                        name="expedidoEn"
                                                        defaultValue={datosPersonales?.documentoExpedido || ""}
                                                        {...register("documentoExpedido", { required: "El número de documento de identidad es un dato requerido" })}
                                                        required
                                                        />
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
                                                                    alt="Vista previa"
                                                                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="col-12">
                                                    { 
                                                    idPerfil === 0 ? (
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                            onClick={handleRegistraPerfil}
                                                        >
                                                            Registrar Perfil
                                                        </button>
                                                        ) : (
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                            onClick={handleGuardarPerfil}
                                                        >
                                                            Actualizar Perfil
                                                        </button>
                                                        )}
                                                    </div>
                                                </form>
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-2 typography">
                                            <div className={Estilos.container}>
                                                <h2>INFORMACIÓN SOBRE FORMACIÓN ACADÉMICA</h2>
                                                { idPerfil > 0 ? (
                                                <>
                                                    <button className={Estilos.addButton} onClick={handleInfoAcademicaModalOpen}>+ ADICIONAR NUEVO</button>

                                                    <PerfilFormacionAcademicaLista
                                                        formacionLista={formacionLista}
                                                        onEditClick={handleInfoAcademicaModalOpen}
                                                        idPerfil={idPerfil}
                                                    />
                                                    <PerfilFormacionAcademicaModal
                                                        show={showInfoAcademicaModal}
                                                        onClose={handleInfoAcademicaModalClose}
                                                        onSave={handleGuardarFormacionAcademica}
                                                        selectedInfoAcademica={selectedInfoAcademica}
                                                        ParNivelFormacion={ParNivelFormacion}
                                                    />
                                                </>
                                                ) : (
                                                    <h3><br/><center>Primero debe registrar sus Datos Personales</center></h3>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-3 typography">
                                            <div className={Estilos.container}>
                                                <h2>CURSOS/TALLERES</h2>
                                                { idPerfil > 0 ? (
                                                <>
                                                    <button className={Estilos.addButton} onClick={handleCursosModalOpen}>+ ADICIONAR NUEVO</button>

                                                    <PerfilCursosLista
                                                        cursosLista={cursosLista}
                                                        onEditClick={handleCursosModalOpen}
                                                        idPerfil={idPerfil}
                                                    />
                                                    <PerfilCursosModal
                                                        show={showCursosModal}
                                                        onClose={handleCursosModalClose}
                                                        onSave={handleGuardarCurso}
                                                        selectedCurso={selectedCurso}
                                                        parTipoCapacitacion={ParTipoCapacitacion}
                                                    />
                                                </>
                                                ) : (
                                                    <h3><br/><center>Primero debe registrar sus Datos Personales</center></h3>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-4 typography">
                                            <div className={Estilos.container}>
                                                <h2>IDIOMAS</h2>
                                                { idPerfil > 0 ? (
                                                <>
                                                    <button className={Estilos.addButton} onClick={handleIdiomasModalOpen}>+ ADICIONAR NUEVO</button>

                                                    <PerfilIdiomasLista
                                                        idiomasLista={idiomasLista}
                                                        onEditClick={handleIdiomasModalOpen}
                                                        idPerfil={idPerfil}
                                                    />
                                                    <PerfilIdiomasModal
                                                        show={showIdiomasModal}
                                                        onClose={handleIdiomasModalClose}
                                                        onSave={handleGuardarIdioma}
                                                        selectedIdioma={selectedIdioma}
                                                        ParIdioma={ParIdioma}
                                                        ParNivelConocimiento={ParNivelConocimiento}
                                                    />
                                                </>
                                                ) : (
                                                    <h3><br/><center>Primero debe registrar sus Datos Personales</center></h3>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-5 typography">
                                            <div className={Estilos.container}>
                                                <h2>SISTEMAS</h2>
                                                { idPerfil > 0 ? (
                                                <>
                                                    <button className={Estilos.addButton} onClick={handleSistemasModalOpen}>+ ADICIONAR NUEVO</button>

                                                    <PerfilSistemasLista
                                                        sistemasLista={sistemasLista}
                                                        onEditClick={handleSistemasModalOpen}
                                                        idPerfil={idPerfil}
                                                    />
                                                    <PerfilSistemasModal
                                                        show={showSistemasModal}
                                                        onClose={handleSistemasModalClose}
                                                        onSave={handleGuardarSistema}
                                                        selectedSistema={selectedSistema}
                                                        ParPrograma={ParPrograma}
                                                        ParNivelConocimiento={ParNivelConocimiento}
                                                    />
                                                </>
                                                ) : (
                                                    <h3><br/><center>Primero debe registrar sus Datos Personales</center></h3>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-6 typography">
                                            <div className={Estilos.container}>
                                                <h2>EXPERIENCIA LABORAL</h2>
                                                { idPerfil > 0 ? (
                                                <>
                                                    <button className={Estilos.addButton} onClick={() => handleExpLaboralModalOpen(null)}>+ ADICIONAR EXPERIENCIA LABORAL</button>

                                                    <PerfilExperienciaLaboralLista
                                                        experienciaLaboralLista={experienciaLaboralLista}
                                                        onEditClick={handleExpLaboralModalOpen}
                                                        idPerfil={idPerfil}
                                                    />
                                                    <PerfilExperienciaLaboralModal
                                                        show={showExpLaboralModal}
                                                        onClose={handleExpLaboralModalClose}
                                                        onSave={handleGuardarExpLaboral}
                                                        selectedExpLaboral={selectedExpLaboral}
                                                    />
                                                </>
                                                ) : (
                                                    <h3><br/><center>Primero debe registrar sus Datos Personales</center></h3>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-7 typography">
                                            <div className={Estilos.container}>
                                                <h2>REFERENCIAS PERSONALES</h2>
                                                { idPerfil > 0 ? (
                                                <>
                                                    <button className={Estilos.addButton} onClick={handleRefPersonalModalOpen}>+ ADICIONAR NUEVO</button>

                                                    <PerfilReferenciaPersonalLista
                                                        referenciaPersonalLista={referenciaPersonalLista}
                                                        onEditClick={handleRefPersonalModalOpen}
                                                        idPerfil={idPerfil}
                                                    />
                                                    <PerfilReferenciaPersonalModal
                                                        show={showRefPersonalModal}
                                                        onClose={handleRefPersonalModalClose}
                                                        onSave={handleGuardarRefPersonal}
                                                        selectedRefPersonal={selectedRefPersonal}
                                                        parParentesco={ParParentesco}
                                                    />
                                                </>
                                                ) : (
                                                    <h3><br/><center>Primero debe registrar sus Datos Personales</center></h3>
                                                )}
                                            </div>
                                        </li>

                                        <li className="tab-content tab-content-last typography">
                                            <div className={Estilos.container}>
                                                <h2>REFERENCIAS LABORALES</h2>
                                                { idPerfil > 0 ? (
                                                <>
                                                    <button className={Estilos.addButton} onClick={handleRefLaboralModalOpen}>+ ADICIONAR NUEVO</button>

                                                    <PerfilReferenciaLaboralLista
                                                        referenciaLaboralLista={referenciaLaboralLista}
                                                        onEditClick={handleRefLaboralModalOpen}
                                                        idPerfil={idPerfil}
                                                    />
                                                    <PerfilReferenciaLaboralModal
                                                        show={showRefLaboralModal}
                                                        onClose={handleRefLaboralModalClose}
                                                        onSave={handleGuardarRefLaboral}
                                                        selectedRefLaboral={selectedRefLaboral}
                                                    />
                                                </>
                                                ) : (
                                                    <h3><br/><center>Primero debe registrar sus Datos Personales</center></h3>
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
};

export default Perfil;