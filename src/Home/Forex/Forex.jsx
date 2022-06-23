import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ForexContainer, GoldSilverPlatinumContainer, InterestRatesContainer, Table, MajorCurrenciesContainer } from './ForexStyled'

export const Forex = () => {
    const [ economics, setEconomics ] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://live-metal-prices.p.rapidapi.com/v1/latest',
        headers: {
          'X-RapidAPI-Key': 'ea5c328494mshba8b54aa6a32e92p179f6ajsn134403061209',
          'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
        }
      };

    useEffect(() => {
        // too many requests?? May need a new provider //
        
        // axios.request(options).then(function (response) {
        //     let economics = response.data.rates;
        //     setEconomics(economics)
        //     console.log(economics)
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }, [])

  return (
    <ForexContainer>
        <GoldSilverPlatinumContainer>
            <Table>
                <thead>
                    <tr>
                        <th>Gold</th>
                        <th>Silver</th>
                        <th>Platinum</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>${economics['XAU']}</td>
                        <td>${economics['XAG']}</td>
                        <td>${economics['PL']}</td>
                        <td>{}</td>
                    </tr>
                </tbody>
            </Table>
        </GoldSilverPlatinumContainer>

        <InterestRatesContainer>Interest Rates Major Currencies</InterestRatesContainer>
        <MajorCurrenciesContainer>Major Currencies Container</MajorCurrenciesContainer>
    </ForexContainer>
  )
}