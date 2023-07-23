import React, { Component } from 'react';
import axios from 'axios';

class GPT3Prompt extends Component {
  generatePrompt = () => {
    const endpoint = "https://api.openai.com/v1/completions";
    const API_KEY = "sk123";
    const model_engine = "text-davinci-003";
    const prompt =
      "saya tinggal di Purwakarta di Ciganea, berikan saya saran rumah yang ramah lingkungan yang berkelanjutan sesuai dengan daerah tempat tinggal saya, jelaskan dengan 5 poin yaitu mengenai material rumah, energi rumah, sanitasi, pengelolaan limbah, dan ventilasi";

    axios
      .post(
        endpoint,
        {
          model: model_engine,
          prompt: prompt,
          max_tokens: 1000,
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
        } else {
          throw new Error('API request failed');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.generatePrompt}>
          Generate
        </button>
      </div>
    );
  }
}

export default GPT3Prompt;