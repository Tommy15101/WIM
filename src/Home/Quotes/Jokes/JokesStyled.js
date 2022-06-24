import styled from 'styled-components';

export const JokesContainer = styled.div`
    width: 100%;
    height: 100%;
    border-top: 2px solid grey;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
    padding-top: 10px;
`
export const JokesTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
        font-size: 20px;
    }
`
export const JokesSetup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-size: 15px;
    }
`

export const JokesPunchline = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`