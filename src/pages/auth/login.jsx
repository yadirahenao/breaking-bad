import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    
    const [, navigate] = useLocation()
    const { login, isLogged } = useUser()
    
    useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
  }, [isLogged, navigate])

    const submitForm = (e)=>{
        e.preventDefault();
        login({username, password})
  };

    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-10'>
            <h1 className='text-xl font-bold text-gray-900'>Iniciar sesión</h1>
            <form
                className='flex flex-col'
                onSubmit={submitForm}>
                <input
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className="p-2 border border-green-200 focus:outline-none focus:border-green-800 rounded-md shadow-sm"
                    required />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="p-2 border border-green-200 focus:outline-none focus:border-green-800 rounded-md shadow-sm"
                    required />
                    
            <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>                    
                <Link to='/'>Iniciar sesión</Link>
            </button>
            </form>
            <span>¿No tienes una cuenta?</span>
            <Link to='/login/register'>
                <span className='text-green-700'>Regístrate</span>
            </Link>
        </div>
    );
};

export default Login;