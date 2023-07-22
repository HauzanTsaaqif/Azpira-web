import Navbar from '../component/Navbar1.js'
import Footbar from '../component/Footbar1.js'
import '../css/HomePage.css'
import nextIcon from '../assets/double_arrow.svg'
import '../css/HomePage_1.css'

function HomePage(){
    
    return <div className='main-container-1'>

        <Navbar />
        <h1 className='slogan'>DEMOKRATISASI<br/><label className='slogan diff'>PENDIDIKAN</label></h1>
        <div className='btn-container'>
            <form action="/home-page-2/">
                <button type='submit' className='next-btn'><a href='/home-page-2'></a><img src={nextIcon}></img></button>    
            </form>
        </div>
        <Footbar className = "footbar"/>

    </div>
}

export default HomePage