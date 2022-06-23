import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MusicContainer, SpotifyLogo, SpotifyTitle, SpotifyLogButton, SubTitle , MusicControlls, ArtistSong, PleaseLogin} from './MusicStyled'
import { BsSpotify } from 'react-icons/bs'
import ReactPlayer from "react-player";

export const Music = () => {

  /* ----- CONSTANTS ----- */
  const CLIENT_ID = "bfab1815fafc4159bf296befcc940d59"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  /* ----- STATE ----- */
  const [ token, setToken ] = useState("");
  const [ currentArtist, setCurrentArtist ] = useState([]);
  const [ currentSong, setCurrentSong ] = useState([]);
  const [ albumImage, setAlbumImage ] = useState([]);
  const [ currentUser, setCurrentUser ] = useState([]);
  const [ playTrack, setPlayTrack ] = useState([]);

  /* ----- SPOTIFY HASH ACCESS TOKEN ----- */
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
    /* ----- PLAYLIST SPOTIFY REQUEST ----- */
    if(token) {
      axios.get("https://api.spotify.com/v1/playlists/4YmiHp5tPr3Gy3L4TMMOnd", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data) // All Data

          console.log(response.data.tracks.items[0].track.artists[0].name) // Artist Name
          let currentArtist = response.data.tracks.items[0].track.artists[0].name;
          setCurrentArtist(currentArtist)

          console.log(response.data.tracks.items[0].track.name) // Song Name
          let currentSong = response.data.tracks.items[0].track.name;
          setCurrentSong(currentSong)

          console.log(response.data.images[0].url) // Album Image
          let albumImage = response.data.images[0].url;
          setAlbumImage(albumImage)

          console.log(response.data.tracks.items[0].track.preview_url);
          let playTrack = response.data.tracks.items[0].track.preview_url;
          setPlayTrack(playTrack)
      })

      /* USERS SPOTIFY REQUEST */
      axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          // console.log(response.data)
          console.log(response.data.display_name) // Users Name

          let currentUser = response.data.display_name;
          setCurrentUser(currentUser)
      })

    }
  }, []);

  /* ----- SPOTIFY LOGOUT BUTTON ----- */
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <MusicContainer>
      <SpotifyLogo><BsSpotify /></SpotifyLogo>
      <SpotifyTitle><h1>SPOTIFY</h1></SpotifyTitle>
      
      <SpotifyLogButton>
      {!token ? 
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}><button>Login</button></a>
        :
        <button onClick={logout}><p>{currentUser}</p>Log Out</button>
      }
      </SpotifyLogButton>
      
      <SubTitle><h3>Most Played Tunes</h3></SubTitle>
      {token ?
        <>
          <MusicControlls>
            <ReactPlayer 
              url={playTrack}
              width="70%"
              height="50px"
              controls={true}
              playing={false}
            />
          </MusicControlls>
          <ArtistSong>
            <h3>{currentArtist}</h3>
            <h3>{currentSong}</h3>
            <img src={albumImage} alt=""/>
          </ArtistSong>
        </>
      :
      <PleaseLogin>
        <h3>Please Log in</h3>
      </PleaseLogin>
      }

    </MusicContainer>
  )
}
