import apiClient from '../config/api-config';
/* Convocatorias */
export const obtenerConvocatorias = async () => {
  try {
    const response = await apiClient.get(`/api/Convocatoria/vigentes`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const obtenerConvocatoria = async (id) => {
  if (!id) {
    throw new Error("El ID de la convocatoria es obligatorio.");
  }

  try {
    const response = await apiClient.get(`/api/Convocatoria/${id}`);
    if (response?.data?.datos) {
      return response.data.datos;
    } else {
      throw new Error("La respuesta no contiene datos válidos.");
    }
  } catch (error) {
    console.error("🚨 Error al obtener la convocatoria:", error.message || error);
    throw error.response?.data || { message: "Error desconocido al obtener la convocatoria." };
  }
};


/* Perfil */
export const obtenerPerfil = async (id) => {
  try {
    const response = await apiClient.get(`/api/Postulante/${id}`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const agregarPerfil = async (perfil) => {
  try {
    const response = await apiClient.post('/api/Postulante', perfil);
    return response.data;
  } catch (error) {
    console.error("Error al agregar datos personales:", error.response?.data || error.message);
    throw error;
  }
};

export const actualizarPerfil = async (id, perfil) => {
  if (!id) {
    throw new Error("El ID del perfil es requerido.");
  }
  if (!perfil || typeof perfil !== "object") {
    throw new Error("El perfil debe ser un objeto válido.");
  }
  
  try {
    const response = await apiClient.put(`/api/Postulante/${id}`, perfil);
    
    // Validación de la respuesta
    if (!response || !response.data) {
      throw new Error("La respuesta de la API es inválida o está vacía.");
    }

    // Validación del estado HTTP
    if (response.status < 200 || response.status >= 300) {
      throw new Error(
        `Error en la actualización: Código de estado ${response.status}`
      );
    }

    return response.data;
  } catch (error) {
    // Manejo detallado de errores
    if (error.response) {
      console.error(
        "Error en la respuesta de la API:",
        error.response.data || error.response.statusText
      );
      throw new Error(
        error.response.data?.mensaje || "Error al actualizar los datos."
      );
    } else if (error.request) {
      console.error("Error en la solicitud: No se recibió respuesta.");
      throw new Error("No se pudo conectar con el servidor.");
    } else {
      console.error("Error desconocido:", error.message);
      throw error;
    }
  }
};
export const guardarImagen = async (archivo) => {
  const formData = new FormData();
  formData.append('file', archivo); 

  try {
      const response = await apiClient.post('/api/Postulante/guardar-imagen', formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      });
      return response.data;
  } catch (error) {
      console.error('Error en guardarImagen:', error.message);
      throw error; // Relanza el error para manejarlo en otro lugar
  }
};
export const registrarPostulacion = async (postulacion) => {
  try {
    const response = await apiClient.post('/api/Postulacion', postulacion);
    return response.data;
  } catch (error) {
    console.error("Error al agregar la postulación:", error.response?.data || error.message);
    throw error;
  }
};

/* Formación Académica */
export const obtenerPerfilFormacionAcademica = async (id) => {
  try {
    const response = await apiClient.get(`/api/FormacionAcademica/ObtenerPorPostulante/${id}`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const agregarPerfilFormacionAcademica = async (formacionAcademica) => {
  try {
    const response = await apiClient.post('/api/FormacionAcademica', formacionAcademica);
    return response.data;
  } catch (error) {
    console.error("Error al agregar formación académica:", error.response?.data || error.message);
    throw error;
  }
};
export const eliminarPerfilFormacionAcademica = async (id) => {
  try {
    const response = await apiClient.delete(`/api/FormacionAcademica/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar formación académica:", error.response?.data || error.message);
    throw error;
  }
};
export const actualizarPerfilFormacionAcademica = async (id, formacionAcademica) => {
  try {
    const response = await apiClient.put(`/api/FormacionAcademica/${id}`, formacionAcademica);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar formación académica:", error.response?.data || error.message);
    throw error;
  }
};

/* Cursos */
export const obtenerPerfilCursos = async (id) => {
  try {
    const response = await apiClient.get(`/api/Capacitacion/ObtenerPorPostulante/${id}`);
    return response.data.datos; // Asegúrate de que 'datos' existe.
  } catch (error) {
    console.error("Error al obtener los cursos:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Error desconocido al obtener los cursos.");
  }
};
export const agregarPerfilCurso = async (capacitacion) => {
  try {
    const response = await apiClient.post('/api/Capacitacion', capacitacion);
    return response.data;
  } catch (error) {
    // Extraer información del error
    const { response, config } = error;

    if (response) {
      // Errores relacionados con la respuesta del servidor
      console.error("Error al agregar capacitación:", response.data);
      console.error(`📍 Endpoint: ${config?.baseURL || ''}${config?.url || ''}`);
      console.error("🛠️ Datos enviados:", config?.data);
    } else if (error.request) {
      // Errores relacionados con la solicitud (sin respuesta del servidor)
      console.error("Error en la solicitud, sin respuesta del servidor.");
    } else {
      // Errores al configurar la solicitud
      console.error("Error al configurar la solicitud:", error.message);
    }

    throw error; // Lanza el error para manejarlo en el nivel superior
  }
};

export const eliminarPerfilCurso = async (id) => {
  try {
    const response = await apiClient.delete(`/api/Capacitacion/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar capacitación:", error.response?.data || error.message);
    throw error;
  }
};
export const actualizarPerfilCurso = async (id, capacitacion) => {
  try {
    const response = await apiClient.put(`/api/Capacitacion/${id}`, capacitacion);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar capacitación:", error.response?.data || error.message);
    throw error;
  }
};

/* Idiomas */
export const obtenerPerfilIdiomas = async (id) => {
  try {
    const response = await apiClient.get(`/api/ConocimientoIdioma/ObtenerPorPostulante/${id}`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const agregarPerfilIdioma = async (conocimientoIdioma) => {
  try {
    const response = await apiClient.post('/api/ConocimientoIdioma', conocimientoIdioma);
    return response.data;
  } catch (error) {
    console.error("Error al agregar conocimiento de idioma:", error.response?.data || error.message);
    throw error;
  }
};
export const eliminarPerfilIdioma = async (id) => {
  try {
    const response = await apiClient.delete(`/api/ConocimientoIdioma/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar conocimiento de idioma:", error.response?.data || error.message);
    throw error;
  }
};
export const actualizarPerfilIdioma = async (id, conocimientoIdioma) => {
  try {
    const response = await apiClient.put(`/api/ConocimientoIdioma/${id}`, conocimientoIdioma);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar conocimiento de idioma:", error.response?.data || error.message);
    throw error;
  }
};

/* Sistemas */
export const obtenerPerfilSistemas = async (id) => {
  try {
    const response = await apiClient.get(`/api/ConocimientoSistemas/ObtenerPorPostulante/${id}`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const agregarPerfilSistema = async (sistema) => {
  try {
    const response = await apiClient.post('/api/ConocimientoSistemas', sistema);
    return response.data;
  } catch (error) {
    console.error("Error al agregar sistema:", error.response?.data || error.message);
    throw error;
  }
};
export const eliminarPerfilSistema = async (id) => {
  try {
    const response = await apiClient.delete(`/api/ConocimientoSistemas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar sistema:", error.response?.data || error.message);
    throw error;
  }
};
export const actualizarPerfilSistema = async (id, sistema) => {
  try {
    const response = await apiClient.put(`/api/ConocimientoSistemas/${id}`, sistema);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar sistema:", error.response?.data || error.message);
    throw error;
  }
};

/* Experiencia Laboral */
export const obtenerPerfilExperienciaLaboral = async (id) => {
  try {
    const response = await apiClient.get(`/api/ExperienciaLaboral/ObtenerPorPostulante/${id}`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const agregarPerfilExperienciaLaboral = async (sistema) => {
  try {
    const response = await apiClient.post('/api/ExperienciaLaboral', sistema);
    return response.data;
  } catch (error) {
    console.error("Error al agregar experiencia laboral:", error.response?.data || error.message);
    throw error;
  }
};
export const eliminarPerfilExperienciaLaboral = async (id) => {
  try {
    const response = await apiClient.delete(`/api/ExperienciaLaboral/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar experiencia laboral:", error.response?.data || error.message);
    throw error;
  }
};
export const actualizarPerfilExperienciaLaboral = async (id, sistema) => {
  try {
    const response = await apiClient.put(`/api/ExperienciaLaboral/${id}`, sistema);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar experiencia laboral:", error.response?.data || error.message);
    throw error;
  }
};

/* Referencia Personal */
export const obtenerPerfilReferenciaPersonal = async (id) => {
  try {
    const response = await apiClient.get(`/api/ReferenciaPersonal/ObtenerPorPostulante/${id}`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const agregarPerfilReferenciaPersonal = async (sistema) => {
  try {
    const response = await apiClient.post('/api/ReferenciaPersonal', sistema);
    return response.data;
  } catch (error) {
    console.error("Error al agregar referencia personal:", error.response?.data || error.message);
    throw error;
  }
};
export const eliminarPerfilReferenciaPersonal = async (id) => {
  try {
    const response = await apiClient.delete(`/api/ReferenciaPersonal/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar referencia personal:", error.response?.data || error.message);
    throw error;
  }
};
export const actualizarPerfilReferenciaPersonal = async (id, sistema) => {
  try {
    const response = await apiClient.put(`/api/ReferenciaPersonal/${id}`, sistema);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar referencia personal:", error.response?.data || error.message);
    throw error;
  }
};

/* Referencia Laboral */
export const obtenerPerfilReferenciaLaboral = async (id) => {
  try {
    const response = await apiClient.get(`/api/ReferenciaLaboral/ObtenerPorPostulante/${id}`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const agregarPerfilReferenciaLaboral = async (sistema) => {
  try {
    const response = await apiClient.post('/api/ReferenciaLaboral', sistema);
    return response.data;
  } catch (error) {
    console.error("Error al agregar referencia laboral:", error.response?.data || error.message);
    throw error;
  }
};
export const eliminarPerfilReferenciaLaboral = async (id) => {
  try {
    const response = await apiClient.delete(`/api/ReferenciaLaboral/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar referencia laboral:", error.response?.data || error.message);
    throw error;
  }
};
export const actualizarPerfilReferenciaLaboral = async (id, sistema) => {
  try {
    const response = await apiClient.put(`/api/ReferenciaLaboral/${id}`, sistema);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar referencia laboral:", error.response?.data || error.message);
    throw error;
  }
};

/* Paramétricas */
export const obtenerParIdioma = async () => {
  try {
    const response = await apiClient.get(`/api/ParIdioma`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const obtenerParNivelConocimiento = async () => {
  try {
    const response = await apiClient.get(`/api/ParNivelConocimiento`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const obtenerParNivelFormacion = async () => {
  try {
    const response = await apiClient.get(`/api/ParNivelFormacion`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const obtenerParParentesco = async () => {
  try {
    const response = await apiClient.get(`/api/ParParentesco`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const obtenerParPrograma = async () => {
  try {
    const response = await apiClient.get(`/api/ParPrograma`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};
export const obtenerParTipoCapacitacion = async () => {
  try {
    const response = await apiClient.get(`/api/ParTipoCapacitacion`);
    return response.data.datos;
  } catch (error) {
    throw error;
  }
};