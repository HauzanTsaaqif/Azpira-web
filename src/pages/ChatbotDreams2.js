import '../css/chatbotdreams.css';
import profil_azfi from '../assets/profil_Azfi.svg'
import profil_user from '../assets/foto_profil/1.jpeg'

import message_icon from '../assets/message-icon.svg'

import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatbotDreams() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    const [inputUser, setInputUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(true);

    const [conversations, setConversations] = useState([
        {
          role: 'assistant',
          content: 'Masih bingung sama cita-cita kamu?',
        },{
            role: 'assistant',
            content: 'Tenang, Asfi bakal bantu kamu buat nyari tau cita-cita kamu',
        },{
            role: 'assistant',
            content: 'Kalo gitu, boleh tau nggak apa keahlian atau hobi kamu?',
        }
      ]);

      const API_KEY = process.env.AZFI_APP_API_KEY;
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
        setVisible(false);
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
      }, []);

      console.log(conversations);

      const reAction = () =>{
        window.location.href = '/chatbot-dreams?username='+username;
      }

      const endAction = () =>{
        window.location.href = '/generate-ways?username='+username;
      }

  return (
    <div className="chatbotdreams">
        <div className='container-chatbot'>

        {conversations.map((item, index) => (
        <div key={index} className={`box-message ${item.role === 'user' ? 'user' : 'assistant'}`}>
            <div className='akun-dash'>
            {item.role === 'user' ? (
            <img src={profil_user} alt="User" className="avatar" />
            ) : (
            <img src={profil_azfi} alt="Asfi" className="avatar" />
            )}
            <h2>{item.role === 'user' ? 'Hauzan' : 'Asfi'}</h2>
            </div>
            {item.content.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
            ))}
        </div>
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

export default ChatbotDreams;
