import styled from 'styled-components';

export const QuotesContainer = styled.div`
    grid-row-start: 2;
    grid-row-end: 4;
    border: 2px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 5px 8px 20px blue;
    display: flex;
    flex-direction: column-reverse;
    align-itmes: center;
    justify-content: space-evenly;
    padding: 20px;
    margin-top: 20px;
    cite {
        word-spacing: 5px;
        letter-spacing: 2px;
    }
`
export const PrayIcon = styled.div`
    color: blue;
    font-size: 50px;
    position: absolute;
    bottom: 30px;
    right: 50px;
`