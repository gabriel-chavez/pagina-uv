'use client';
import React from "react";
import { useForm } from "react-hook-form";

const FormularioEjemplo = () => {
    
    const initialData = {
        nombre: "Seguro de Vida",
        nombreCorto: "SV",
    };

    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: initialData, 
    });
    
    const onSubmit = (data) => {
        console.log("Datos enviados:", data);
    };

    const resetForm = () => {
        reset({
            nombre: "Nuevo Seguro",
            nombreCorto: "NS",
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>                
                <div>
                    <label htmlFor="nombre">Nombre de Seguro</label>
                    <input
                        id="nombre"
                        type="text"
                        {...register("nombre", { required: "Nombre del seguro es requerido" })}
                    />
                    {errors.nombre && (
                        <span style={{ color: "red" }}>{errors.nombre.message}</span>
                    )}
                </div>

                
                <div>
                    <label htmlFor="nombreCorto">Nombre Corto</label>
                    <input
                        id="nombreCorto"
                        type="text"
                        {...register("nombreCorto", { required: "Nombre corto es requerido" })}
                    />
                    {errors.nombreCorto && (
                        <span style={{ color: "red" }}>{errors.nombreCorto.message}</span>
                    )}
                </div>

                
                <button type="submit">Enviar</button>
            </form>

            
            <button onClick={resetForm} style={{ marginTop: "10px" }}>
                Restablecer valoress
            </button>
        </div>
    );
};

export default FormularioEjemplo;
