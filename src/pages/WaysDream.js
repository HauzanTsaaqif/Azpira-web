import '../css/waysdream.css';
import FootBar from '../component/Footbar1';
import NavBar from '../component/Navbar1';
import GPT3Prompt from '../component/Gpt'

import React, { useState, useEffect  } from 'react';
import axios from 'axios';

function WaysDream() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');


    const [clickedIndex, setClickedIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [descIndex, setDescIndex] = useState('');
    const [linkVid, setLinkVid] = useState('');
    const [visible, setVisible] = useState(true);
    
  let array, array1;

    const evalBtn = () => { window.location.href = '/chatbot-evaluation?username='+username}
    const commuBtn = () => { window.location.href = '/community-page?username='+username}

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://evanescent-evening-range.glitch.me/get-langkah?username=${username}`)
          .then(res => res.json())
          .then(data => setData(data))
          .catch(err => console.log(err));
      }, [username]);


    const handleButtonClick = (index, item) => {
        setLoading(true)
        setClickedIndex(index);
        const splitWord = item.split(' ');
        const finalWord = splitWord.slice(2).join(' ');

        const prompt = "Saya "+ data[0].usia +", jelaskan untuk saya " + finalWord + ", dengan cita- cita saya yaitu " + data[0].cita_cita + "dan tambahkan rekomendasi 1 link vidio youtube yang berkaitan dengan hal tersebut, berikan hanya link saja yang dipisahkan tanda kurung. Jelaskan dengan bahasa " + data[0].pilihan_bahasa;
        const endpoint = "https://api.openai.com/v1/completions";
        const API_KEY = process.env.AZFI_APP_API_KEY;
        const model_engine = "text-davinci-003";

        axios
        .post(
            endpoint,
            {
            model: model_engine,
            prompt: prompt,
            max_tokens: 300,
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
            const wordsArray = result.split(' ');
            wordsArray.pop();
            const arrayFinal = wordsArray.join(' ');
            console.log(arrayFinal);
            setDescIndex(arrayFinal);

            const splitWord = result.split('(');
            const finalResult2 = splitWord[splitWord.length - 1];
            const link = finalResult2.replace(')', '');
            const embedLink = link.replace("watch?v=", "embed/");
            setLinkVid(embedLink);

            setLoading(false);
            } else {
            throw new Error('API request failed');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);
      
  return (
    <div className="generateways">
      <NavBar />
      {visible ? null:
      <div className='container-generate'>

        <h2>Mulai langkah, mencapai cita!</h2>
        
        <di className="hide">
        {array = data[0].langkah_langkah}
        {array1 = array.split(";")}
        </di>

        <div className='container-ways'>

        {array1.slice(0, 10).map((item, index) => (
        item !== '' && (
          <div key={index} className={`buttonIndex ${clickedIndex === index ? 'active' : ''}`}>
            {clickedIndex === index ? 
            ( <div> 
            <div className='ways-button-blue' onClick={() => handleButtonClick(index)}>{item}</div>
            <div className='container-desc'>
            {loading ? 
            <div className="loading-animation">
            <div className="loader"></div> </div>:
            <div>
                <p>{descIndex}</p>
                <iframe
                    width="100%"
                    src={linkVid}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            }
            </div>
            </div>) 
              : 
            <div>
                <div className='ways-button' onClick={() => handleButtonClick(index, item)}>{item}</div>
                <div className='desc'><p>Keterangan lebih lengkap</p></div>
            </div>
        }
          </div>
        )
      ))}

        {array1.slice(10, 12).map((item, index) => (
            item !== '' && (
                <div key={index}>
                <div className='ways-button'>{item}</div>
                </div>
            )
        ))}
        
        <button onClick={evalBtn} className='evaluation-button'>Buktikan Pemahamanmu</button>
        <button onClick={commuBtn} className='community-button'>Bertemu Dengan Pemimpi Lain</button>

        </div>
      </div>
      }
      <FootBar />
      <GPT3Prompt />
    </div>
  );
}

export default WaysDream;
