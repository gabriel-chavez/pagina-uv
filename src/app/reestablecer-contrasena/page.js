"use client";
export const dynamic = 'force-dynamic';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { reestablecerContrasena } from "@/services/seguridadService";

const ReestablecerContrasena = () => {
    const [nuevaContrasena, setNuevaContrasena] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(null);
    const [token, setToken] = useState(null);
    const router = useRouter();

    // Extraer el token de la URL usando window.location
    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const tokenFromUrl = urlParams.get("token");
            if (tokenFromUrl) {
                setToken(tokenFromUrl);
            } else {
                setErrors(["No se encontró un token válido."]);
            }
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors([]);
        setSuccess(null);

        if (!token) {
            setErrors(["Token no encontrado."]);
            return;
        }

        try {
            const res = await reestablecerContrasena({
                Token: token,
                NuevaContraseña: nuevaContrasena
            });
            setSuccess(res.mensaje);
            setNuevaContrasena("");
        } catch (error) {
            setErrors([error.message]);
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center bg-light"
            style={{ height: "calc(100vh - 100px)" }}
        >
            <div className="card shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
                <div className="card-body">
                    <h3 className="text-center mb-4">Reestablecer Contraseña</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nuevaContrasena" className="form-label">
                                Nueva Contraseña
                            </label>
                            <input
                                type="password"
                                id="nuevaContrasena"
                                name="nuevaContrasena"
                                className="form-control"
                                value={nuevaContrasena}
                                onChange={(event) => setNuevaContrasena(event.target.value)}
                                required
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-block">
                                Reestablecer Contraseña
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

                    {success && (
                        <div className="alert alert-success mt-3">
                            {success}
                        </div>
                    )}

                    <div className="text-center mt-3">
                        <Link href="/login" className="text-muted">
                            Volver a iniciar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReestablecerContrasena;
