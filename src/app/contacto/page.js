'use client';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.fullname.trim()) {
      tempErrors.fullname = 'Por favor, ingrese su nombre.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Por favor, ingrese su correo.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Correo no válido.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Debe ingresar un mensaje.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      console.log('Datos enviados:', formData);

      setFormData({ fullname: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);  
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Contáctanos</h2>
              <p className="text-center text-muted mb-4">
                ¿Tienes alguna consulta? Llena el siguiente formulario y nos pondremos en contacto contigo.
              </p>
              
              {submitted && (
                <div className="alert alert-success text-center">
                  🎉 ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                    id="fullname"
                    name="fullname"
                    placeholder="Tu nombre"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                  {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    placeholder="nombre@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enviar mensaje
                  </button>
                </div>
              </form>

              <div className="mt-5 text-center">
                <h5>Síguenos en nuestras redes sociales</h5>
                <div className="social-icons mt-3">
                  <a href="https://www.facebook.com/univida" target="_blank" rel="noopener noreferrer" className="text-primary me-3 fs-3">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/univida" target="_blank" rel="noopener noreferrer" className="text-danger me-3 fs-3">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/univida" target="_blank" rel="noopener noreferrer" className="text-info me-3 fs-3">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.youtube.com/univida" target="_blank" rel="noopener noreferrer" className="text-danger fs-3">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center text-muted">
            <p>📞 Teléfono: (591-2) 2151000</p>
            <p>📧 Email: atencionalcliente@univida.bo</p>
            <p>📍 Dirección: Av. Camacho, esquina Calle Bueno, Edificio La Urbana, piso 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
