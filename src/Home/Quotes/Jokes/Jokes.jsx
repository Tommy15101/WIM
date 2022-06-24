import React, { useEffect, useState } from 'react';
import axios from "axios";
import { JokesContainer, JokesTitle, JokesSetup, JokesPunchline } from './JokesStyled';

export const Jokes = () => {

  const [ joke, setJoke ] = useState([]);

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': 'ea5c328494mshba8b54aa6a32e92p179f6ajsn134403061209',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

useEffect(() => {
    axios.request(options).then(function (response) {
      let joke = response.data.body[0]
        setJoke(joke)
    }).catch(function (error) {
        console.error(error);
    });
}, []);

  return (
    <JokesContainer>
      <JokesTitle>
        <h3>Remember To Laugh</h3>
      </JokesTitle>

      <JokesSetup>
        <p>{joke.setup}</p>
      </JokesSetup>
      
      <JokesPunchline>
        <cite>{joke.punchline}</cite>
      </JokesPunchline>
    </JokesContainer>
  )
}
