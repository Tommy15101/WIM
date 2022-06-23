import React, { useState, useEffect } from 'react'
import axios from "axios";
import { QuotesContainer, PrayIcon } from './QuotesStyled';
import { FaPrayingHands } from 'react-icons/fa';

export const Quotes = () => {
  const [quote, setQuote] = useState('');

  const options = {
    method: 'GET',
    url: 'https://famous-quotes4.p.rapidapi.com/random',
    params: {category: 'all', count: '2'},
    headers: {
      'X-RapidAPI-Key': 'ea5c328494mshba8b54aa6a32e92p179f6ajsn134403061209',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios.request(options).then(function (response) {
      let quote = response.data[1];
      setQuote(quote)
    }).catch(function (error) {
      console.error(error);
    });  
  }, [])
  return (
    <QuotesContainer>
      <PrayIcon><FaPrayingHands /></PrayIcon>
      <h3> - {quote.author}</h3>
      <cite>{quote.text}</cite>
    </QuotesContainer>
  )
}
