"use client";
export const dynamic = 'force-dynamic';

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { recuperarContrasena } from "@/services/seguridadService";

const RecuperarContrasena = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(null);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors([]);
        setSuccess(null);

        try {
            const res = await recuperarContrasena({ Email: email })
            console.log(res);
            setSuccess(res.mensaje);
            setEmail("");
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
                    <h3 className="text-center mb-4">Recuperar Contraseña</h3>

                    <form onSubmit={handleSubmit}>
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
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-block">
                                Enviar enlace de recuperación
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

export default RecuperarContrasena;
