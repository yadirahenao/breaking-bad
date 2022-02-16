import React from "react";
import { Link } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import Input from "../../components/input";

const Register = () => {
  const { form, updateFormData } = useFormData();

  const submitForm = (e)=>{
    e.preventDefault();
  };

    return (
      <div className='flex flex-col h-full w-full items-center justify-center'>
      <h1 className='text-3xl font-bold my-4'>Regístrate</h1>
      <form
        className='flex flex-col'
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div className='grid grid-cols-2 gap-5'>
          <Input label='Nombre:' name='nombre' type='text' required />
          <Input label='Apellido:' name='apellido' type='text' required />                 
          <Input label='Correo:' name='correo' type='email' required />
          <Input label='Contraseña:' name='password' type='password' required />
        </div>        
      </form>
      <span>¿Ya tienes una cuenta?</span>
      <Link to='/login'>
        <span className='text-green-700'>Inicia sesión</span>
      </Link>
    </div>
  );
};


export default Register;