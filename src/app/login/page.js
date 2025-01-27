"use client";
export const dynamic = 'force-dynamic';
import { useRef } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from 'next/link';
import ReCAPTCHA from "react-google-recaptcha";

const LoginPage = () => {
  const [errors, setErrors] = useState([]);
  const [usuario, setUsuario] = useState("");  
  const [password, setPassword] = useState(""); 
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const router = useRouter();
  const recaptchaRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);

    // if (!recaptchaToken) {
    //   setErrors(["Por favor, verifica que no eres un robot."]);
    //   return;
    // }

    const responseNextAuth = await signIn("credentials", {
      usuario,
      password,
      //recaptchaToken,
      redirect: false,
    });
    console.log(responseNextAuth);
    if (responseNextAuth?.error) {
      recaptchaRef.current.reset();  
      setRecaptchaToken(null);
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    const callbackUrl =
      new URL(window.location.href).searchParams.get("callbackUrl") || "/convocatorias/perfil";
    router.push(callbackUrl);
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Inicio de sesión</h3>

          {/* Formulario de Login */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Usuario
              </label>
              <input
                type="text"
                id="usuario"
                placeholder=""
                name="usuario"
                className="form-control"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder=""
                name="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="d-flex justify-content-center mb-3">
              <ReCAPTCHA
                sitekey="6LcvLjciAAAAAALicqZR92XT9u9E_KHCDXxvPbgg"
                onChange={handleRecaptchaChange}
                ref={recaptchaRef}
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-block">
                Iniciar sesión
              </button>
            </div>
          </form>

          {/* Mostrar errores */}
          {errors.length > 0 && (
            <div className="alert alert-danger mt-3">
              <ul className="mb-0">
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-center mt-3">
            <Link href="/recuperar-contrasena" className="text-muted">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;