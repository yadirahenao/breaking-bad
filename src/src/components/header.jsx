import logo from '../media/logo.png'
import Search from './search';

const Header = ({ nameButton, link }) => {
  return (
    <header>
      <ul className = 'navbar'>
        <li>
          <img src={logo} alt='imagen' className='logo' />
        </li> 
        <li>
          {/* <Search/> */}
        </li>
        <li>
          <button className='bg-transparent hover:bg-green-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded'>   
            <a href={ link }>{ nameButton}</a>  
          </button>
        </li>
        
      </ul>
    </header>
  );
};

export default Header;