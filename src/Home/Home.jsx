import React from 'react'
import { Music } from './Music/Music'
import { HomeWrapper, EmptyHomeCell, EmptyHomeCellTwo } from './HomeStyled'
import { Forex } from './Forex/Forex'
import { Quotes } from './Quotes/Quotes'

export const Home = () => {

  return (
    <>
        <HomeWrapper>
          <Forex />
          <EmptyHomeCell />
          <Music />
          <EmptyHomeCellTwo />
          <EmptyHomeCell />
          <Quotes />
          <EmptyHomeCell />
          <EmptyHomeCell />
          <EmptyHomeCell />
        </HomeWrapper>
    </>
  )
}