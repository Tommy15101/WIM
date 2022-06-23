import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Home } from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
import axios from 'axios';

function App() {

  const [ token, setToken ] = useState([]);

  useEffect(() => {

    axios
    .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(response => {
      let token = response.data.slice(0,10);
      setToken(response.data.slice(0,10));
    }).catch(error => console.log(error));
  }, [1000])

  return (
    <>
      <GlobalStyle />
      <Navbar token={token}/>
      <Home />
    </>
  );
}

export default App;
