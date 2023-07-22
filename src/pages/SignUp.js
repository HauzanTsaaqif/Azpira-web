import '../css/Form.css'
import Navbar from '../component/Navbar1'
import Footbar from '../component/Footbar1'
import { useState } from 'react';

function SignUp (){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [usia, setUsia] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerified] = useState('');
    const [bahasa, setBahasa] = useState('');
    const [profilInput, setProfilInput] = useState('');

    const handleSubmit = () =>{
        if (username !== "" && password !== "" &&  password === verPassword){
            fetch('https://evanescent-evening-range.glitch.me/data-account-azfira', {
              method: 'POST',
              body: JSON.stringify({ username, email, usia, password, bahasa, profilInput }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(data => {
                console.log('Data berhasil dimasukkan:', data);
                alert("Account berhasil dibuat");
                window.location.href = '/login-page';
              })
              .catch(err => console.log(err));}
            else{
                alert("Verifikasi password salah, tolong periksa kembali password");
            }
    }

    return <div className='main-container-login' id='sign-up-form'>
        <Navbar />
        <div className='form-container' id='signup' >
            <h2>Daftar Akun</h2>
            <h3>Nama Pengguna</h3>
            <input className='input-usrnm' placeholder='Isi nama anda' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <h3>Alamat Email</h3>
            <input className='input-usrnm' placeholder='Isi alamat Email anda' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h3>Usia</h3>
            <select name="usia" id="usia_id" value={usia} onChange={(e) => setUsia(e.target.value)}>
                <option value="Anak Sekolah Menengah Pertama">13-16</option>
                <option value="Anak Sekolah Menengah Atas">17-19</option>
                <option value="Kuliah dan sudah dewasa">Diatas 20 tahun</option>
            </select>
            <h3>Password</h3>
            <input type="password" className='input-pass' placeholder='Masukkan password anda' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <h3>Verifikasi Password</h3>
            <input type="password" className='ver-pass' placeholder='Masukkan kembali password anda' value={verPassword} onChange={(e) => setVerified(e.target.value)}/>

            <h3>Pilihan Bahasa</h3>
            <select name="bahasa" id="bahasa_id" value={bahasa} onChange={(e) => setBahasa(e.target.value)}>
                <option value="indonesia">Bahasa Indonesia</option>
                <option value="jawa">Bahasa Jawa</option>
                <option value="sunda">Bahasa Sunda</option>
            </select>

            <h3>Foto Profil</h3>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" value={profilInput} onChange={(e) => setProfilInput(e.target.value)}></input>
            <button onClick={handleSubmit}>Buat Akun</button>
        </div>
            <Footbar/>

    </div>
}

export default SignUp