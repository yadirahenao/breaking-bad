import logo1 from '../media/logo1.png';
import logo2 from '../media/logo2.png';
import React, {useContext} from 'react';
import useUser from '../hooks/useUser';
import { useRoute } from "wouter";
import { Link, useNavigate } from "react-router-dom";
import Context from '../context/userContext';

const Header = () => {

  const {isLogged, logout} = useUser()
  const [match] = useRoute("/login");
  const { id, setId, name, lastName, setName, setLastName } =
    useContext(Context);  
  const navigate = useNavigate();

  const handleClick = (e) => {
    setId(null);
    setName(null);
    setLastName(null);
    navigate("/login");
  };

  const renderLoginButtons = () => {
    return (
      <ul className="navbar">
        <li>
          <li>
            <img src={logo1} alt="imagen" className="h-20 ml-8 " />
          </li>
          <li>
            <img src={logo2} alt="imagen" className="h-20" />
          </li>
        </li>
        <li className="flex justify-center">
          <li>
            <p className="font-sans">
              {name} {lastName}
            </p>
          </li>
          <li className="bg-transparent hover:bg-green-600 text-back font-semibold hover:text-white py-2 px-4 border-double border-4 border-black hover:border-transparent rounded-lg m-8">
            {id !== null ? (
              <button onClick={() => handleClick()}>Logout</button>
            ) : (
              <Link to="/login"> Login </Link>
            )}
          </li>
        </li>
      </ul>
    );
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