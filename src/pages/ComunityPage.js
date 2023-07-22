import '../css/ComunityPage.css'
import Footbar from '../component/Footbar1.js'
import UserNavbar from '../component/Navbar_user.js'
import ComunityNavbar from '../component/Navbar_comunity'
import Feed from '../component/Feed.js'
import { Link } from 'react-router-dom'

import PlusButton from '../assets/plus_icon.svg'

function ComunityPage(){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    return <div className='comunity-page-container'>
        <UserNavbar />
        <ComunityNavbar />
        <div className='add-photo-icon'>
            <Link to="/upload-page"><img src={PlusButton} alt="" /></Link>
        </div>
        
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        
        <div id='comPage_footer'>
        <Footbar />
        </div>
    </div>  
}

export default ComunityPage