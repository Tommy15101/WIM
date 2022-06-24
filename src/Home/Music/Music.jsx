import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MusicContainer, SpotifyLogo, SpotifyTitle, SpotifyLogButton, SubTitle , MusicControlls, PleaseLogin, SpotifyUser} from './MusicStyled'
import { BsSpotify } from 'react-icons/bs'
import SpotifyPlayer from 'react-spotify-web-playback'

export const Music = () => {

  /* ----- CONSTANTS ----- */
  const CLIENT_ID = "bfab1815fafc4159bf296befcc940d59"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
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
      axios.get("https://api.spotify.com/v1/playlists/6lWu3fX3OhF8hlPIxuGbVZ", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {

          let currentArtist = response.data.tracks.items[0].track.artists[0].name;
          setCurrentArtist(currentArtist)

          let currentSong = response.data.tracks.items[0].track.name;
          setCurrentSong(currentSong)

          let albumImage = response.data.images[0].url;
          setAlbumImage(albumImage)

          let playTrack = response.data.uri;
          setPlayTrack(playTrack)
      })

      /* USERS SPOTIFY REQUEST */
      axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
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
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}><button>Login</button></a>
        :
        <button onClick={logout}>Log Out</button>
      }
      </SpotifyLogButton>
      
      <SubTitle><h3>{token ? "Most Played Tunes" : ""}</h3></SubTitle>
      {token ?
        <>
          <MusicControlls>
            <SpotifyPlayer 
              token={token}
              uris={playTrack ? [playTrack] : []}
            />
          </MusicControlls>
          <SpotifyUser>
            <p>{currentUser} Spotify Premium</p>
          </SpotifyUser>
        </>
      :
      <PleaseLogin>
        <h3>Please Log in</h3>
      </PleaseLogin>
      }

    </MusicContainer>
  )
}
