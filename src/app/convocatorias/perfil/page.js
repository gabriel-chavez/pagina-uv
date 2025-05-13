"use client";

import EncabezadoConvocatoria from "@/components/common/EncabezadoConvocatoria";
import Estilos from '@/estilos/InfoAcademica.module.css';
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

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

import {
    obtenerPerfil,
    agregarPerfil,
    actualizarPerfil,
    guardarImagen,
    obtenerImagen,
    obtenerPerfilFormacionAcademica,
    agregarPerfilFormacionAcademica,
    actualizarPerfilFormacionAcademica,
    obtenerPerfilCursos,
    agregarPerfilCurso,
    actualizarPerfilCurso,
    obtenerPerfilIdiomas,
    agregarPerfilIdioma,
    actualizarPerfilIdioma,
    obtenerPerfilSistemas,
    agregarPerfilSistema,
    actualizarPerfilSistema,
    obtenerPerfilExperienciaLaboral,
    agregarPerfilExperienciaLaboral,
    actualizarPerfilExperienciaLaboral,
    obtenerPerfilReferenciaPersonal,
    agregarPerfilReferenciaPersonal,
    actualizarPerfilReferenciaPersonal,
    obtenerPerfilReferenciaLaboral,
    agregarPerfilReferenciaLaboral,
    actualizarPerfilReferenciaLaboral,
    obtenerParNivelFormacion,
    obtenerParIdioma,
    obtenerParNivelConocimiento,
    obtenerParPrograma,
    obtenerParTipoCapacitacion,
    obtenerParParentesco
} from '@/services/convocatoriaService';


import { signIn, signOut, useSession } from "next-auth/react";

const Perfil = () => {

    const router = useRouter();
    const { data: session, status } = useSession();
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const [datosPersonales, setDatosPersonales] = useState({});
    const [idPerfil, setIdPerfil] = useState(0);

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

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: datosPersonales,
    });


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
            const perfilFormacion = await obtenerPerfilFormacionAcademica();
            setFormacionAcademica(perfilFormacion.datos);
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
            const perfilIdiomas = await obtenerPerfilIdiomas();
            setIdiomas(perfilIdiomas.datos);
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
            const perfilSistemas = await obtenerPerfilSistemas();
            setSistemas(perfilSistemas.datos);
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


    useEffect(() => {

        if (status === "loading") {
            return;
        }
        if (!session) {
            router.push('/login');
        } else {
            CargarDatos();
        }
    }, [session, status, router]);

    useEffect(() => {
        if (datosPersonales) {
            if (datosPersonales.fotografia) {
                const fetchImage = async () => {
                    try {
                        const url = await obtenerImagen(datosPersonales.fotografia);
                        setSelectedImage(url);
                    } catch (error) {
                        console.error('Error al obtener la imagen:', error);
                    }
                };
                fetchImage();
            }

            reset(datosPersonales);
        }
    }, [datosPersonales, reset]);

    if (status === "loading") {
        return <div>Cargando...</div>;
    }
    if (!datosPersonales) {
        return <div>Cargando...</div>;
    }




    const CargarDatos = async () => {


        const perfil = await obtenerPerfil();
        if (Number.isInteger(perfil.datos.id)) {
            setIdPerfil(perfil.datos.id);
        }
        setDatosPersonales(perfil.datos);
        console.log(datosPersonales)


        const perfilFormacion = await obtenerPerfilFormacionAcademica();

        setFormacionAcademica(perfilFormacion.datos);

        const perfilCursos = await obtenerPerfilCursos();
        setCursos(perfilCursos.datos);

        const perfilIdiomas = await obtenerPerfilIdiomas();
        setIdiomas(perfilIdiomas.datos);

        const perfilSistemas = await obtenerPerfilSistemas();
        setSistemas(perfilSistemas.datos);

        const perfilExpLaboral = await obtenerPerfilExperienciaLaboral();
        setExperienciaLaboral(perfilExpLaboral.datos);

        const perfilRefPersonal = await obtenerPerfilReferenciaPersonal();
        setReferenciaPersonal(perfilRefPersonal.datos);

        const perfilRefLaboral = await obtenerPerfilReferenciaLaboral();
        setReferenciaLaboral(perfilRefLaboral.datos);


        /* paramétricas */
        const parNivelFormacion = await obtenerParNivelFormacion();
        setParNivelFormacion(parNivelFormacion.datos);

        const parIdioma = await obtenerParIdioma();
        setIdioma(parIdioma.datos);

        const parNivelConocimiento = await obtenerParNivelConocimiento();
        setParNivelConocimiento(parNivelConocimiento.datos);

        const parPrograma = await obtenerParPrograma();
        setParPrograma(parPrograma.datos);

        const parTipoCapacitacion = await obtenerParTipoCapacitacion();
        setParTipoCapacitacion(parTipoCapacitacion.datos);

        const parParentesco = await obtenerParParentesco();
        setParParentesco(parParentesco.datos);


    };

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
            setSelectedImage(null);
        }
    };
    const handleSubmitImage = async () => {

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

    const handleActualizarPerfil = async (data) => {

        let imageUrl = '';
        if (archivo) {
            try {    
                console.log("asdasd")            
                const imageResponse = await guardarImagen(archivo);
                imageUrl = imageResponse.datos;
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: error?.mensaje ,
                    icon: 'error',
                    confirmButtonText: 'Intentar nuevamente',
                });
                 return;
            }
        }
        let datosPerfil = { ...data, Fotografia: imageUrl };

        try {
            let result = await actualizarPerfil(datosPerfil);
            Swal.fire({
                title: '¡Éxito!',
                text: result.mensaje,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            }).then(async () => {
                setDatosPersonales(result.datos);
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        }
    };
    const handleRegistraPerfil = async (data) => {

         let imageUrl = '';
        if (archivo) {
            try {    
                console.log("asdasd")            
                const imageResponse = await guardarImagen(archivo);
                imageUrl = imageResponse.datos;
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: error?.mensaje ,
                    icon: 'error',
                    confirmButtonText: 'Intentar nuevamente',
                });
                 return;
            }
        }


        try {
            let datosPerfil = { ...data, Fotografia: imageUrl };
            console.log(datosPerfil);
            const result = await agregarPerfil(datosPerfil);

            if (Number.isInteger(result.datos.id)) {
                setIdPerfil(result.datos.id);
            }
            Swal.fire({
                title: "¡Éxito!",
                text: result.mensaje,
                icon: "success",
                confirmButtonText: "Aceptar",
            });
        } catch (error) {
            console.error('Error al guardar los datos personales', error);
            console.log(error)
            Swal.fire({
                title: 'Error',
                text: error.mensaje,
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        }
    };
    const handleGuardarFormacionAcademica = async () => {
        const NivelFormacionId = document.getElementById('nivelFormacion').value;
        const centroEstudios = document.getElementById('centroEstudios').value;
        const tituloObtenido = document.getElementById('tituloObtenido').value;
        const fechaTitulo = document.getElementById('fechaTitulo').value;
        const ciudad = document.getElementById('ciudad').value;
        const pais = document.getElementById('pais').value;

        const datos = {
            parNivelFormacionId: NivelFormacionId,
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

                const perfilFormacion = await obtenerPerfilFormacionAcademica();
                setFormacionAcademica(perfilFormacion.datos);
            });
        } catch (error) {
            console.error('Error al guardar la formación académica:', error);
            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleInfoAcademicaModalClose();
                const perfilFormacion = await obtenerPerfilFormacionAcademica();
                setFormacionAcademica(perfilFormacion.datos);
            });
        }
    };
    const handleGuardarCurso = async () => {
        const tipoCapacitacion = document.getElementById('tipoCapacitacion').value;
        const nombreCurso = document.getElementById('nombreCurso').value;
        const centroEstudio = document.getElementById('centroEstudio').value;
        const pais = document.getElementById('pais').value;
        const duracion = document.getElementById('duracion').value;
        const modalidad = document.getElementById('modalidad').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;

        const datos = {
            parTipoCapacitacionId: tipoCapacitacion,
            nombre: nombreCurso,
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

                const perfilCursos = await obtenerPerfilCursos();
                setCursos(perfilCursos.datos);
            });
        } catch (error) {
            console.error('Error al guardar curso:', error);

            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleCursosModalClose();

                const perfilCursos = await obtenerPerfilCursos();
                setCursos(perfilCursos.datos);
            });
        }
    };
    const handleGuardarIdioma = async () => {
        const idioma = document.getElementById('idioma').value;
        const nivelLectura = document.getElementById('nivelLectura').value;
        const nivelEscritura = document.getElementById('nivelEscritura').value;
        const nivelComprension = document.getElementById('nivelComprension').value;

        const datos = {
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

                const perfilIdiomas = await obtenerPerfilIdiomas();
                setIdiomas(perfilIdiomas.datos);
            });
        } catch (error) {
            console.error('Error al guardar idioma:', error);
            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleIdiomasModalClose();

                const perfilIdiomas = await obtenerPerfilIdiomas();
                setIdiomas(perfilIdiomas.datos);
            });
        }
    };
    const handleGuardarSistema = async () => {
        const programa = document.getElementById('programa').value;
        const nivelConocimiento = document.getElementById('nivelConocimiento').value;

        const datos = {
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

                const perfilSistemas = await obtenerPerfilSistemas();
                setSistemas(perfilSistemas.datos);
            });
        } catch (error) {
            console.error('Error al guardar sistema:', error);
            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleSistemasModalClose();

                const perfilSistemas = await obtenerPerfilSistemas();
                setSistemas(perfilSistemas.datos);
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
        const telefonoEmpresa = document.getElementById('telefonoEmpresa').value;
        const principalesFunciones = document.getElementById('principalesFunciones').value;
        const fechaInicio = document.getElementById('fechaInicio').value;
        const fechaFin = document.getElementById('fechaFin').value;
        //const totalExperiencia = document.getElementById('totalExperiencia').value;
        const motivoDesvinculación = document.getElementById('motivoDesvinculación').value;
        const actualmenteTrabajando = document.getElementById('currentlyWorking').checked;

        const datos = {
            empresa: empresa,
            cargo: cargo,
            sector: sector,
            nroDependientes: nroDependientes,
            nombreSuperior: nombreSuperior,
            cargoSuperior: cargoSuperior,
            telefonoEmpresa: telefonoEmpresa,
            funciones: principalesFunciones,
            fechaInicio: fechaInicio,
            fechaConclusion: fechaFin,
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

                const perfilExpLaboral = await obtenerPerfilExperienciaLaboral();
                setExperienciaLaboral(perfilExpLaboral.datos);
            });
        } catch (error) {
            console.error('Error al guardar experiencia laboral:', error);
            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleExpLaboralModalClose();

                const perfilExpLaboral = await obtenerPerfilExperienciaLaboral();
                setExperienciaLaboral(perfilExpLaboral.datos);
            });
        }
    };
    const handleGuardarRefPersonal = async () => {
        const nombres = document.getElementById('nombresParentesco').value;
        const empresa = document.getElementById('empresa').value;
        const cargo = document.getElementById('cargo').value;
        const parentesco = document.getElementById('parentesco').value;
        const telefono = document.getElementById('telefonoParentesco').value;
        const telefonoMovil = document.getElementById('telefonoMovilParentesco').value;
        const email = document.getElementById('emailParentesco').value;

        const datos = {
            nombre: nombres,
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

                const perfilRefPersonal = await obtenerPerfilReferenciaPersonal();
                setReferenciaPersonal(perfilRefPersonal.datos);
            });
        } catch (error) {
            console.error('Error al guardar la referencia personal:', error);
            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleRefPersonalModalClose();

                const perfilRefPersonal = await obtenerPerfilReferenciaPersonal();
                setReferenciaPersonal(perfilRefPersonal.datos);
            });
        }
    };
    const handleGuardarRefLaboral = async () => {
        const nombres = document.getElementById('nombresReferencia').value;
        const empresa = document.getElementById('empresa').value;
        const cargo = document.getElementById('cargo').value;
        const relacion = document.getElementById('relacion').value;
        const telefono = document.getElementById('telefonoReferencia').value;
        const telefonoMovil = document.getElementById('telefonoMovilReferencia').value;
        const email = document.getElementById('emailReferencia').value;

        const datos = {
            nombre: nombres,
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

                const perfilRefLaboral = await obtenerPerfilReferenciaLaboral();
                setReferenciaLaboral(perfilRefLaboral.datos);
            });
        } catch (error) {
            console.error('Error al guardar la referencia laboral:', error);
            Swal.fire({
                title: 'Error',
                text: error?.response?.data?.mensaje || 'Hubo un problema al guardar el curso. Intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            }).then(async () => {
                handleRefLaboralModalClose();

                const perfilRefLaboral = await obtenerPerfilReferenciaLaboral();
                setReferenciaLaboral(perfilRefLaboral.datos);
            });
        }
    };

    const onSubmitHandler = idPerfil > 0 ? handleActualizarPerfil : handleRegistraPerfil;

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
                            {status != 'loading' ? (
                                <>

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
                                                        <form className="row g-3" onSubmit={handleSubmit(onSubmitHandler)}>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Nombres *</label>
                                                                <input
                                                                    type="text"
                                                                    id="nombres"
                                                                    className="form-control"
                                                                    {...register("nombres", { required: "El campo 'Nombres' es obligatorio." })}
                                                                />
                                                                {errors.nombres && <span style={{ color: "red" }}>{errors.nombres.message}</span>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Apellido del padre *</label>
                                                                <input
                                                                    type="text"
                                                                    id="apellidoPaterno"
                                                                    className="form-control"
                                                                    {...register("apellidoPaterno", { required: "Apellido es obligatorio" })}

                                                                />
                                                                {errors.apellidoPaterno && <span style={{ color: "red" }}>{errors.apellidoPaterno.message}</span>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Apellido de la madre *</label>
                                                                <input
                                                                    type="text"
                                                                    id="apellidoMaterno"
                                                                    className="form-control"
                                                                    {...register("apellidoMaterno", { required: "Apellido es requerido" })}

                                                                />
                                                                {errors.apellidoMaterno && <span style={{ color: "red" }}>{errors.apellidoMaterno.message}</span>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Fecha de Nacimiento *</label>
                                                                <input
                                                                    type="date"
                                                                    id="fechaNacimiento"
                                                                    className="form-control"
                                                                    {...register("fechaNacimiento", { required: "Fecha de nacimiento requerido" })}

                                                                />
                                                                {errors.fechaNacimiento && <span style={{ color: "red" }}>{errors.fechaNacimiento.message}</span>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Lugar de Nacimiento *</label>
                                                                <input
                                                                    type="text"
                                                                    id="ciudadNacimiento"
                                                                    className="form-control"
                                                                    {...register("ciudadNacimiento", { required: "La Ciudad de nacimiento es un dato requerido" })}

                                                                />
                                                                {errors.ciudadNacimiento && <span style={{ color: "red" }}>{errors.ciudadNacimiento.message}</span>}
                                                            </div>


                                                            <div className="col-md-6">
                                                                <label className="form-label">País de Nacimiento *</label>
                                                                <select
                                                                    id="paisNacimiento"
                                                                    className="form-select"
                                                                    {...register("paisNacimiento", { required: "El país de nacimiento es obligatorio" })}
                                                                >
                                                                    <option value="Bolivia">Bolivia</option>
                                                                    <option value="Otro">Otro</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Lugar de Residencia</label>
                                                                <input
                                                                    type="text"
                                                                    id="ciudadResidencia"
                                                                    className="form-control"
                                                                    {...register("ciudadResidencia")}

                                                                />

                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">País de Residencia</label>
                                                                <select
                                                                    id="paisResidencia"
                                                                    className="form-select"
                                                                    {...register("paisResidencia", { required: "El país de residencia es obligatorio" })}
                                                                >
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
                                                                    {...register("direccion")}

                                                                />

                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Zona</label>
                                                                <input
                                                                    type="text"
                                                                    id="zona"
                                                                    className="form-control"
                                                                    {...register("zona")}

                                                                />

                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Teléfono</label>
                                                                <input
                                                                    type="number"
                                                                    id="telefono"
                                                                    className="form-control"
                                                                    {...register("telefono")}

                                                                />

                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Teléfono Móvil *</label>
                                                                <input
                                                                    type="number"
                                                                    id="telefonoMovil"
                                                                    className="form-control"
                                                                    {...register("telefonoMovil", { required: "El teléfono móvil es requerido" })}
                                                                />
                                                                {errors.telefonoMovil && <span style={{ color: "red" }}>{errors.telefonoMovil.message}</span>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Email *</label>
                                                                <input
                                                                    type="text"
                                                                    id="email"
                                                                    className="form-control"
                                                                    {...register("email", { required: "El email es un dato requerido" })}

                                                                />
                                                                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
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
                                                                    type="number"
                                                                    id="numeroDocumento"
                                                                    className="form-control"
                                                                    {...register("numeroDocumento", { required: "El número de documento de identidad es un dato requerido" })}

                                                                />
                                                                {errors.numeroDocumento && <span style={{ color: "red" }}>{errors.numeroDocumento.message}</span>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label className="form-label">Expedido en</label>
                                                                <input
                                                                    type="text"
                                                                    id="documentoExpedido"
                                                                    className="form-control"
                                                                    {...register("documentoExpedido")}

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
                                                                        <button type="submit" className="btn btn-primary">
                                                                            Registrar Perfil
                                                                        </button>
                                                                    ) : (
                                                                        <button type="submit" className="btn btn-primary">
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
                                                        {idPerfil > 0 ? (
                                                            <>
                                                                <button className={Estilos.addButton} onClick={handleInfoAcademicaModalOpen}>+ ADICIONAR NUEVO</button>

                                                                <PerfilFormacionAcademicaLista
                                                                    formacionLista={formacionLista}
                                                                    setFormacionAcademica={setFormacionAcademica}
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
                                                            <h3><br /><center>Primero debe registrar sus Datos Personales</center></h3>
                                                        )}
                                                    </div>
                                                </li>

                                                <li className="tab-content tab-content-3 typography">
                                                    <div className={Estilos.container}>
                                                        <h2>CURSOS/TALLERES</h2>
                                                        {idPerfil > 0 ? (
                                                            <>
                                                                <button className={Estilos.addButton} onClick={handleCursosModalOpen}>+ ADICIONAR NUEVO</button>

                                                                <PerfilCursosLista
                                                                    cursosLista={cursosLista}
                                                                    setCursos={setCursos}
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
                                                            <h3><br /><center>Primero debe registrar sus Datos Personales</center></h3>
                                                        )}
                                                    </div>
                                                </li>

                                                <li className="tab-content tab-content-4 typography">
                                                    <div className={Estilos.container}>
                                                        <h2>IDIOMAS</h2>
                                                        {idPerfil > 0 ? (
                                                            <>
                                                                <button className={Estilos.addButton} onClick={handleIdiomasModalOpen}>+ ADICIONAR NUEVO</button>

                                                                <PerfilIdiomasLista
                                                                    idiomasLista={idiomasLista}
                                                                    setIdiomas={setIdiomas}
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
                                                            <h3><br /><center>Primero debe registrar sus Datos Personales</center></h3>
                                                        )}
                                                    </div>
                                                </li>

                                                <li className="tab-content tab-content-5 typography">
                                                    <div className={Estilos.container}>
                                                        <h2>SISTEMAS</h2>
                                                        {idPerfil > 0 ? (
                                                            <>
                                                                <button className={Estilos.addButton} onClick={handleSistemasModalOpen}>+ ADICIONAR NUEVO</button>

                                                                <PerfilSistemasLista
                                                                    sistemasLista={sistemasLista}
                                                                    setSistemas={setSistemas}
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
                                                            <h3><br /><center>Primero debe registrar sus Datos Personales</center></h3>
                                                        )}
                                                    </div>
                                                </li>

                                                <li className="tab-content tab-content-6 typography">
                                                    <div className={Estilos.container}>
                                                        <h2>EXPERIENCIA LABORAL</h2>
                                                        {idPerfil > 0 ? (
                                                            <>
                                                                <button className={Estilos.addButton} onClick={() => handleExpLaboralModalOpen(null)}>+ ADICIONAR EXPERIENCIA LABORAL</button>

                                                                <PerfilExperienciaLaboralLista
                                                                    experienciaLaboralLista={experienciaLaboralLista}
                                                                    setExperienciaLaboral={setExperienciaLaboral}
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
                                                            <h3><br /><center>Primero debe registrar sus Datos Personales</center></h3>
                                                        )}
                                                    </div>
                                                </li>

                                                <li className="tab-content tab-content-7 typography">
                                                    <div className={Estilos.container}>
                                                        <h2>REFERENCIAS PERSONALES</h2>
                                                        {idPerfil > 0 ? (
                                                            <>
                                                                <button className={Estilos.addButton} onClick={handleRefPersonalModalOpen}>+ ADICIONAR NUEVO</button>

                                                                <PerfilReferenciaPersonalLista
                                                                    referenciaPersonalLista={referenciaPersonalLista}
                                                                    setReferenciaPersonal={setReferenciaPersonal}
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
                                                            <h3><br /><center>Primero debe registrar sus Datos Personales</center></h3>
                                                        )}
                                                    </div>
                                                </li>

                                                <li className="tab-content tab-content-last typography">
                                                    <div className={Estilos.container}>
                                                        <h2>REFERENCIAS LABORALES</h2>
                                                        {idPerfil > 0 ? (
                                                            <>
                                                                <button className={Estilos.addButton} onClick={handleRefLaboralModalOpen}>+ ADICIONAR NUEVO</button>

                                                                <PerfilReferenciaLaboralLista
                                                                    referenciaLaboralLista={referenciaLaboralLista}
                                                                    setReferenciaLaboral={setReferenciaLaboral}
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
                                                            <h3><br /><center>Primero debe registrar sus Datos Personales</center></h3>
                                                        )}
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <h3><br /><center>Debe estar autenticado.</center></h3>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Perfil;