import UserNavbar from '../component/Navbar_user.js'
import '../css/UploadPage.css'
import NoImage from '../assets/no_image.svg'
import Footbar from '../component/Footbar1.js'
import { useState } from 'react';


function UploadPage (){
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("")
    const [input_image, setInputImage] = useState("")
    const [input_desc, setDescription] = useState("")

    const cancelBtn = () =>{ window.location.href = '/ways-dream?username='+username; }
    const uploadBtn = () =>{ window.location.href = '/community-page?username='+username;}

    return<>
        <UserNavbar />
        <form action="" className='upload-photo-form'>
            <input type="text" id='judul' placeholder='Masukkan judul'/>
            <select name="usia" id="content-type">
                <option value="">Pilih...</option>
                <option value="">Tekonologi</option>
                <option value="">Sosial</option>
                <option value="">Kesehatan</option>
                <option value="">Pendidikan</option>
                <option value="">Seni</option>
            </select>
            <div className="file-input-container">
                <input type="file" id="file-input" />
                <label htmlFor="file-input">
                    <img src={NoImage} alt="Choose File" />
                </label>
                <h3>Upload foto</h3>
            </div>
            <textarea placeholder='Masukkan deskripsi...' id="image-desc" name="image-description" rows="4" cols="50">
            </textarea>
            <div className='confirmation-btns'>
                <button className='cancel' onClick={cancelBtn}>Batal</button>
                <button className='upload' onClick={uploadBtn}>Upload</button>
            </div>
        </form>
        <Footbar />
    </>
}

export default UploadPage