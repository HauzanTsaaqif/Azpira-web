import Navbar from '../component/Navbar1'
import Footbar from '../component/Footbar1'
import '../css/HomePage.css'
import nextIcon from '../assets/double_arrow.svg'
import mockup from '../assets/mockup.svg'

function HomePage(){
    
    return <div className='main-container'>

        <Navbar />
        <div className='thumbnail-container  homepage3'>
            <p className='article' id='mockup-article'>AZPIRA MENAWARKAN LAYANAN YANG DAPAT 
MENEMANI DAN MEMBANTU ANAK MUDA
INDONESIA SECARA SPESIFIK<br/><label id='mockup-article-diff'>DALAM MERAIH,<br/>
APAPUN CITA-CITANYA!</label></p>
            <img id='mockup-img' src={mockup}></img>
        </div>
        <div className='btn-container'>
            <form action="/sign-up-page/">
                <button type='submit' className='next-btn'><a href='/home-page-2'></a><img src={nextIcon}></img></button> 
            </form>
        </div>
        <Footbar className = "footbar"/>

    </div>
}

export default HomePage