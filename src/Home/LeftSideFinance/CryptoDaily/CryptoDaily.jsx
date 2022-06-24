import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CryptoDailyContainer, LogoColumn, ChangeColumn, VolumeColumn } from './CryptoDailyStyled'

export const CryptoDaily = (props) => {

  return (
    <CryptoDailyContainer>
      <table style={{width: "100%"}}>
        <thead>
            <tr>
              <th style={{width: "25%", borderBottom: "2px solid lightgrey"}}>Token</th>
              <th style={{width: "25%", borderBottom: "2px solid lightgrey"}}>24hrs </th>
              <th style={{width: "50%", borderBottom: "2px solid lightgrey"}}>Market Cap</th>
            </tr>
          </thead>
          {props.topTen.map(e => {
            return (
                <>
                  <tr>
                    <td><img src={e.Logo}/></td>
                    <td style={e.SevDChange.includes('-') ? { color: "red" } : { color: "green" }}>
                      {e.SevDChange}
                    </td>                
                    <td>{e.MarketCapital}</td>
                </tr>
              </>
            )
          })
        }
      </table>
    </CryptoDailyContainer>
  )
}