import '../css/navbar.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
        <div className='icon-navbar'>
            <img src={logo} className='logo-navbbar'/>
            <h1 className='title-navbar'>AZFIRA</h1>
        </div>
      <Link to="/login-page"><button className='login-button'>LOGIN</button></Link>
    </div>
  );
}

export default NavBar;