import  '../css/Navbar_user.css'
import logo from '../assets/logo.svg'
import Usr_NoPict from '../assets/user_noPict.svg'
import { Link } from 'react-router-dom';

function UserNavbar(){
    return <nav className='usr-navbar'>
        <div className='icon-navbar'>
            <img src={logo} className='logo-navbbar'/>
            <h1 className='title-navbar'>AZFIRA</h1>
        </div>
        <div className='navbar-avatar'>
            <Link to="/"><img id = "usr-avatar" src={Usr_NoPict} alt="User Picture" ></img></Link>
        </div>
        
    </nav>
}

export default UserNavbar