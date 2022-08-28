import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFormData from "../../hooks/useFormData";
import Input from "../../components/input";
import { gql, useMutation } from '@apollo/client';

const SAVE_USER = gql`
  mutation SaveUser($input: UserInput) {
    saveUser(input: $input)
  }
`;

const Register = () => {
  const { form, updateFormData } = useFormData();
  // Apollo Hook
  const [saveUser] = useMutation(SAVE_USER);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await saveUser({
        variables: {
          input: {
            name: form.current[0].value,
            lastName: form.current[1].value,
            mail: form.current[2].value,
            pass: form.current[3].value,
          },
        },
      });
      alert(data.saveUser);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <h1 className="text-3xl font-bold my-4">Regístrate</h1>
      <form
        className="flex flex-col"
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div className="grid grid-cols-2 gap-5">
          <Input label="Nombre:" name="nombre" type="text" required />
          <Input label="Apellido:" name="apellido" type="text" required />
          <Input label="Correo:" name="correo" type="email" required />
          <Input label="Contraseña:" name="password" type="password" required />
        </div>
        <button type="submit">enviar</button>
      </form>
      <span>¿Ya tienes una cuenta?</span>
      <Link to="/login">
        <span className="text-green-700">Inicia sesión</span>
      </Link>
    </div>
  );
};

export default Register;