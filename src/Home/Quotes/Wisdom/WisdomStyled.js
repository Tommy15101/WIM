import styled from 'styled-components';

export const WisdomContainer = styled.div`
    width: 100%;
    height: 100%;
    border-bottom: 2px solid grey;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr;
`
export const WisdomTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
        font-size: 20px;
    }
`
export const WisdomText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-size: 15px;
    }
`

export const WisdomAuthor = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`