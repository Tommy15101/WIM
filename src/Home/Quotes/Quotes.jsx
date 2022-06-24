import React from "react";
import { QuotesContainer } from './QuotesStyled';
import { Wisdom } from "./Wisdom/Wisdom";
import { Jokes } from "./Jokes/Jokes";

export const Quotes = () => {
  return (
    <>
        <QuotesContainer>
            <Wisdom />
            <Jokes />
        </QuotesContainer>
    </>
  )
}
