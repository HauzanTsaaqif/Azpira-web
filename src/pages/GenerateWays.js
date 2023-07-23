import '../css/generateways.css';
import FootBar from '../component/Footbar1';
import NavBar from '../component/Navbar1';
import axios from 'axios';
import React, { useState, useEffect  } from 'react';

import { Link } from 'react-router-dom';
import UserNavbar from '../component/Navbar_user';

function GenerateWays() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  const [inputDream, setInputDream] = useState('');
  const [waysDream, setWaysDream] = useState('');
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://evanescent-evening-range.glitch.me/get-data?username=${username}`)
          .then(res => res.json())
          .then((data) => {setData(data)})
          .catch(err => console.log(err));
      }, [username]);


  const generateWayDream = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    setLoading2(true);
    if (inputDream === null || inputDream.trim() === '') {
      alert("Kamu belum memasukkan cita-cita kamu");
    }else{
    setLoading(true);
    const prompt =
      "Saya bercita- cita menjadi seorang "+ inputDream +", dan saya seorang "+ data[0].usia +", berikan saya 10 langkah yang lengkap dengan point-point angka, langkah langkah yang berisi tentang bagaimana cara menggapai cita-cita saya, pisahkan setiap langkah dengan tanda semicolon dan setelah poin poin tersebut, berikan saya nama perusahaan yang terkait dengan cita cita saya serta berikan juga rekomendasi website komunitas yang bisa mendukung cita-cita saya, keduanya dipisahkan juga semicolon. Tolong sampaikan dengan bahasa " + data[0].pilihan_bahasa;

    console.log(prompt);

    const endpoint = "https://api.openai.com/v1/completions";
    const API_KEY = process.env.AZFI_APP_API_KEY;
    const model_engine = "text-davinci-003";

    axios
      .post(
        endpoint,
        {
          model: model_engine,
          prompt: prompt,
          max_tokens: 600,
          temperature: 0,
          n: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const result = response.data.choices[0].text.trim();
          console.log(result);
          setWaysDream(result);
          setLoading(false);
        } else {
          throw new Error('API request failed');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  }

  const handleSubmit = () =>{
    if (waysDream.length > 0) {
        fetch('https://evanescent-evening-range.glitch.me/data-langkah-dreams', {
          method: 'POST',
          body: JSON.stringify({ username, inputDream, waysDream }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log('Data berhasil dimasukkan:', data);
            window.location.href = '/ways-dream?username='+username;
          })
          .catch(err => console.log(err));     
    }else{
      alert("Perhatian, anda belum mulai beraksi");
    }
  }

  

  const arrayWaysDream = waysDream.split(';');

  return (
    <div className="generateways">
      <UserNavbar />
      <div className='container-generate'>
        <h2>Apa cita-cita kamu?</h2>
        <input className='input-dreams' value={inputDream} onChange={(e) => setInputDream(e.target.value)}/>

        <button className='generate-button' onClick={generateWayDream}>Mulai Beraksi</button>

        <div className='container-result'>

        {loading2 ? (
          loading ? (
            <div className="loading-animation">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              {arrayWaysDream.map((item, index) => (
                item !== '' && <p key={index}>{item}</p>
              ))}
            </>
          )
        ) : (
          <p>Kamu belum memasukkan mimpimu</p>
        )}

        </div>

        <button className='next-button' onClick={handleSubmit}>Lanjutkan</button>
      </div>
      <FootBar />
    </div>
  );
}

export default GenerateWays;
