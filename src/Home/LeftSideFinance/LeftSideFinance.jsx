import React, { useState, useEffect } from 'react'
import { LeftSideFinanceContainer } from './LeftSideFinanceStyled';
import { CryptoDaily } from './CryptoDaily/CryptoDaily';
import { BTCChart } from './BTCChart/BTCChart';
import axios from 'axios';

export const LeftSideFinance = () => {

    const [ topTen, setTopTen ] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://live-crypto-prices.p.rapidapi.com/pricefeed',
        headers: {
          'X-RapidAPI-Key': 'ea5c328494mshba8b54aa6a32e92p179f6ajsn134403061209',
          'X-RapidAPI-Host': 'live-crypto-prices.p.rapidapi.com'
        }
      };

    useEffect(() => {        
        axios.request(options).then(function (response) {
            let topTen = response.data.result.slice(0,14);
            // console.log(response.data.result)

            for( let i = 0; i < topTen.length; i++ ) {
              if (topTen[i].Symbol.includes('USDT') || 
                  topTen[i].Symbol.includes('BUSD') || 
                  topTen[i].Symbol.includes('DAI') 
                ) {
                topTen.splice(i, 1);
              }
            }

            setTopTen(topTen);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

  return (
    <LeftSideFinanceContainer>
        <CryptoDaily topTen={topTen}/>
        <BTCChart topTen={topTen}/>
    </LeftSideFinanceContainer>
  )
}
