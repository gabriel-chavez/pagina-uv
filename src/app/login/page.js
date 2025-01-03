"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [errors, setErrors] = useState([]);
  const [usuario, setUsuario] = useState("lchavez");
  const [password, setPassword] = useState("123");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      usuario,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      console.log("page.js:", responseNextAuth);
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    const callbackUrl =
      new URL(window.location.href).searchParams.get("callbackUrl") || "/";
    router.push(callbackUrl);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center  bg-light"
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
                placeholder="123123"
                name="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
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
            <a href="#" className="text-muted">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
