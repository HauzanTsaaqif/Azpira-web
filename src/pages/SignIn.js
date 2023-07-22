import '../css/Form.css'
import Navbar from '../component/Navbar1'
import Footbar from '../component/Footbar1'
import { useState } from 'react';


function SignIn (){ 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Kirim data ke server menggunakan fetch atau library lainnya
        fetch('https://evanescent-evening-range.glitch.me/login-azpira', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            console.log('Login berhasil');
            alert(data.message);
            window.location.href = '/selection-page?username=' + username;
          } else {
            console.log('Login gagal');
            alert(data.message);
          }
        })
        .catch(err => console.log(err));
      };

    return <div className='main-container-login'>
        <Navbar />
        <div className='form-container' >
            <h2>Masuk Akun</h2>
            <h3>Nama Pengguna</h3>
            <input className='inputUsername' placeholder='Isi nama disini' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <h3>Password</h3>
            <input type='password' className='inputPass'placeholder='Isi password disini' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Masuk akun</button>
            <div id='center-container'>
                <h3 id='center'>Belum punya akun?<a id = 'center-a' href='/sign-up-page'>daftar akun</a></h3>
            </div>
        </div>
        <div id='footer'>
            <Footbar />
        </div>
        
    </div>
}

export default SignIn