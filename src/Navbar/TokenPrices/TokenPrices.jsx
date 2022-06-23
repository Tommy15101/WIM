import React from 'react'
import { Image, MainContainer, SingleContainer } from './TokenPricesStyled'
import Marquee from 'react-fast-marquee';

export const TokenPrices = (props) => {


  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  return (
    <>
      <Marquee speed={100} loop={0} gradientColor={[255, 200, 200]}>
        <MainContainer>
          {props.token.map(coin => {
              return (
                <>
                <SingleContainer key={coin.id}>
                    <Image><img src={coin.image}/></Image>
                    <div>$ {formatter.format(coin.current_price)}</div>
                </SingleContainer>         
                </>
              )})}  
        </MainContainer>
      </Marquee>
   </>
  )
}
