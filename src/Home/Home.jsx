import React from 'react'
import { Music } from './Music/Music'
import { HomeWrapper, EmptyHomeCell, EmptyHomeCellTwo } from './HomeStyled'
import { LeftSideFinance } from './LeftSideFinance/LeftSideFinance'
import { Quotes } from './Quotes/Quotes'

export const Home = () => {

  return (
    <>
        <HomeWrapper>
          <LeftSideFinance />
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