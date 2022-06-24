import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CryptoDailyContainer, LogoColumn, ChangeColumn, VolumeColumn } from './CryptoDailyStyled'

export const CryptoDaily = () => {
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
            console.log(response.data.result)

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
    <CryptoDailyContainer>
      <table style={{width: "100%"}}>
          <tr>
            <th style={{width: "25%"}}>Token</th>
            <th style={{width: "25%"}}>24hr Change</th>
            <th style={{width: "50%"}}>24hr Volume</th>
          </tr>
          {topTen.map(e => {
            return (
                <>
                  <tr>
                    <td><img src={e.Logo}/></td>
                    <td style={e.SevDChange.includes('-') ? { color: "red" } : { color: "green" }}>
                      {e.SevDChange}
                    </td>                
                    <td>{e.Volume24h}</td>
                </tr>
              </>
            )
          })
        }
      </table>
    </CryptoDailyContainer>
  )
}