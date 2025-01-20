"use client";

import { registrar } from "@/services/seguridadService";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const RegisterPage = () => {
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para deshabilitar el formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);
    setSuccessMessage("");

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setErrors(["Las contraseñas no coinciden."]);
      return;
    }

    // Validar que el reCAPTCHA haya sido completado
    if (!recaptchaToken) {
      setErrors(["Por favor, verifica que no eres un robot."]);
      return;
    }

    try {
      setIsSubmitting(true); // Inicia el estado de envío
      // Llamar al servicio de registro
      await registrar({
        Email: email,
        Username: name,
        Password: password,
      });

      // Mostrar mensaje de éxito
      setSuccessMessage("Registro exitoso. Redirigiendo al inicio de sesión...");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      setErrors([error.message]);
      recaptchaRef.current.reset(); // Reinicia el reCAPTCHA en caso de error
      setRecaptchaToken(null);
      setIsSubmitting(false); // Permite nuevos intentos si hubo un error
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Registro de usuario</h3>

          {successMessage && (
            <div className="alert alert-success text-center">{successMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                disabled={isSubmitting} // Deshabilita el campo si está enviando
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={isSubmitting} // Deshabilita el campo si está enviando
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                disabled={isSubmitting} // Deshabilita el campo si está enviando
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                disabled={isSubmitting} // Deshabilita el campo si está enviando
              />
            </div>

            <div className="d-flex justify-content-center mb-3">
              <ReCAPTCHA
                sitekey="6LcvLjciAAAAAALicqZR92XT9u9E_KHCDXxvPbgg"
                onChange={handleRecaptchaChange}
                ref={recaptchaRef}
                disabled={isSubmitting} // Deshabilita el reCAPTCHA si está enviando
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting} // Deshabilita el botón si está enviando
              >
                {isSubmitting ? "Procesando..." : "Registrarse"}
              </button>
            </div>
          </form>

          {errors.length > 0 && (
            <div className="alert alert-danger mt-3">
              <ul className="mb-0">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-center mt-3">
            <Link href="/login" className={`text-muted ${isSubmitting ? "disabled" : ""}`}>
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
