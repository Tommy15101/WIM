import React, { useState, useEffect } from 'react'
import { LeftSideFinanceContainer } from './LeftSideFinanceStyled';
import { CryptoDaily } from './CryptoDaily/CryptoDaily';
import { Blank } from './Blank/Blank';

export const LeftSideFinance = () => {

  return (
    <LeftSideFinanceContainer>
        <CryptoDaily />
        <Blank />
    </LeftSideFinanceContainer>
  )
}
