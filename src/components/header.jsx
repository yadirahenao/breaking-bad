import logo from '../media/logo.png'

const Header = ({ nameButton, link }) => {
  return (
    <header>
      <ul className = 'navbar'>
        <li>
          <img src={logo} alt='imagen' className='logo mx-8' />
        </li>        
        <li>
          <button className='bg-transparent hover:bg-green-600 text-back font-semibold hover:text-white py-2 px-4 border-double border-4 border-black hover:border-transparent rounded-lg m-8'>   
            <a href={ link }>{ nameButton}</a>  
          </button>
        </li>
        
      </ul>
    </header>
  );
};

export default Header;