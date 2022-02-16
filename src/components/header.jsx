import logo from '../media/logo.png'
import React from 'react';
import useUser from '../hooks/useUser';
import { useRoute } from "wouter";
import { Link } from "react-router-dom";

const Header = () => {

  const {isLogged, logout} = useUser()
  const [match] = useRoute("/login");

  const handleClick = e => {
    e.preventDefault()
    logout()
  }

  const renderLoginButtons = ({isLogged}) => {
    return (
      
        <ul className= 'navbar'>
          <li>
            <img src={logo} alt='imagen' className='h-20 mx-8' />
          </li>
          <li className='bg-transparent hover:bg-green-600 text-back font-semibold hover:text-white py-2 px-4 border-double border-4 border-black hover:border-transparent rounded-lg m-8'>
            {
              isLogged ?
                <Link to='#' onClick={handleClick}> Logout </Link>
                : <Link to='/login'> Login </Link>  
            }
          </li>
        </ul>
    )
  }

  const content = match
    ? null
    : renderLoginButtons({isLogged})

  return (
    <header >
      {content}
    </header>
  )
};

export default Header;