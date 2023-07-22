import '../css/selectionpage.css';
import profil_azfi from '../assets/profil_Azfi.svg'

import { Link } from 'react-router-dom';

function SelectionPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    const yesBtn = () => { window.location.href = '/generate-ways?username='+username}
    const noBtn = () => { window.location.href = '/chatbot-dreams?username='+username}

  return (
    <div className="selectionpage">
        <div className='container-azfi'>
            <div className='container-profil'>
                <img src={profil_azfi}/>
                <h2>Azfi</h2>
            </div>
            <div className='chatbox'>
                <div className='message'><p>Halo Hauzan, perkenalkan Saya Azfi</p></div>
                <div className='message'><p>Aku disini untuk membantumu dalam menggapai cita-citamu</p></div>
                <div className='message'><p>Apakah Kamu sudah memiliki cita-cita?</p></div>
            </div>
        </div>
        <div className='container-button'>
            <button className='false-button' onClick={noBtn}>Belum</button>
            <button className='true-button' onClick={yesBtn}>Sudah</button>
        </div>
    </div>
  );
}

export default SelectionPage;
