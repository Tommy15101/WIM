import styled from 'styled-components';

export const MusicContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr .3fr 1fr .8fr;
    grid-template-columns: 1fr 2fr 1fr;
    border: 2px solid green;
    border-radius: 10px;
    box-shadow: 5px 8px 20px #1DB954;
    background-color: aliceblue;
`
export const SpotifyLogo = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #1DB954
;
`
export const SpotifyTitle = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #191414
    h1 {
        font-size: 30px;
    }
`
export const SpotifyLogButton = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        padding: 15px;
        border-radius: 20px;
        font-weight: bolder;
        background-color: #1DB954;
        color: white;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover {
            transform: scale(1.1);
        }
    }
    p {
        font-size: 8px;
    }
`
export const SubTitle = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1DB954;
    h3 {
        word-spacing: 10px;
        letter-spacing: 4px;
        color: white;
    }
`
export const MusicControlls = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #1DB954;
`
export const ArtistSong = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #1DB954;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    h3 {
        color: white;
    }
    img {
        width: 50px;
        border-radius: 8px;
    }
`
export const PleaseLogin = styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    color: #1DB954;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
        font-size: 30px;
        word-spacing: 10px;
        letter-spacing: 4px;
    }
`