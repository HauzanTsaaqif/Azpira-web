import Navbar from '../component/Navbar1'
import Footbar from '../component/Footbar1'
import '../css/HomePage.css'
import nextIcon from '../assets/double_arrow.svg'
import thumbnail from '../assets/thumbnail.png'

function HomePage(){
    
    return <div className='main-container'>

        <Navbar />
        <div className='thumbnail-container'>
            <img id='thumbnail' src={thumbnail}></img>
            <h2 className='thumbnail-header'>INDONESIA <label className='thumbnail-header diff'>EMAS </label>2045...</h2> 
            <p className='article'>adalah sebuah omong kosong!!!<br/>
jika anak muda Indonesia masih banyak yang bingung, <label className='article bold'>bagaimana cara yang spesifik untuk mencapai cita-citanya</label></p>  
        </div>
        <div className='btn-container'>
            <form action="/home-page-3/">
                <button type='submit' className='next-btn'><a href='/home-page-2'></a><img src={nextIcon}></img></button> 
            </form>
        </div>
        <Footbar className = "footbar"/>

    </div>
}

export default HomePage