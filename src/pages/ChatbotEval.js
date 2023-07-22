import '../css/chatboteval.css';
import profil_azfi from '../assets/profil_Azfi.svg'
import profil_user from '../assets/foto_profil/1.jpeg'

import message_icon from '../assets/message-icon.svg'

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatbotEval() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    const [inputUser, setInputUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState([]);
    const [cita, setCita] = useState("");

    let num = 1;

    useEffect(() => {
      fetch(`https://evanescent-evening-range.glitch.me/get-chatbot?username=${username}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [username]);

    console.log(data)

    const [conversations, setConversations] = useState([
        {
          role: 'user',
          content: 'Buatkan satu studi case yang harus dijawab oleh user secara kritis jika user bercita-cita sebagai '+ cita +', berikan hanya satu soal dan jangan berikan jawabannya',
        },
      ]);

    if (data.length > 0  && data.length >2){
      setCita(data[0].cita_cita)
    }

      const API_KEY = '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';
      const model_id = 'gpt-3.5-turbo';
    
      const chatgpt_conversation = async (conversationLog) => {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: model_id,
            messages: conversationLog,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
    
        const updatedConversationLog = [...conversationLog];
        updatedConversationLog.push({
          role: response.data.choices[0].message.role,
          content: response.data.choices[0].message.content.trim(),
        });
    
        return updatedConversationLog;
      };
    
      const handleUserInput = () => { 
        if (num === 3) {
          setVisible(false);
          console.log("Ha");
        }
        num +=1;
        setLoading(false);
        chatgpt_conversation([...conversations, { role: 'user', content: inputUser }])
          .then((updatedConversations) => {
            setConversations(updatedConversations);
            setInputUser(''); 
            setLoading(true);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      
      useEffect(() => {
          handleUserInput();
      }, []);

      console.log(conversations);

      const reAction = () =>{
        window.location.href = '/chatbot-evaluation';
      }

      const endAction = () =>{
        window.location.href = '/ways-dream';
      }

  return (
    <div className="chatbotdreams">
        <div className='container-chatbot'>

        {conversations.map((item, index) => (
            index > 1 && ( // Melewati indeks 0 dan 1
              <div key={index} className={`box-message ${item.role === 'user' ? 'user' : 'assistant'}`}>
                <div className='akun-dash'>
                  {item.role === 'user' ? (
                    <img src={profil_user} alt="User" className="avatar" />
                  ) : (
                    <img src={profil_azfi} alt="Asfi"/>
                  )}
                  <h2>{item.role === 'user' ? 'Hauzan' : 'Asfi'}</h2>
                </div>
                {item.content.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )
          ))}

        {loading ? null : 
            <div className="loading-animation">
              <div className="loader"></div>
            </div>}

        {visible ? 
        <div className="message-bar">
          <input
            type="text"
            className="input-message"
            defaultValue={inputUser} 
            onChange={(e) => setInputUser(e.target.value)}
          />
          <button className="message-btn" onClick={() => handleUserInput()}>
            <img src={message_icon} />
          </button>
        </div> :
        <div className='container-end'>
            <button className='re-button' onClick={reAction}>Ulangi Sesi</button>
            <button className='end-button' onClick={endAction}>Selesaikan Sesi</button>
        </div>  
        }
      </div>
    </div>
  );
}

export default ChatbotEval;
