import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from './pages/Player';
import { getTokenFromResponse } from "./pages/Spotify"
import Login from "./pages/Login";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null)
  const [{ token }, dispatch] =useStateValue();

  useEffect(() => {
   
    const hash = getTokenFromResponse();
    window.location.hash = "";
   let _token = hash.access_token
    if (_token) {
      dispatch({
        type:"SET_TOKEN",
        token: _token
      })
      // setToken(_token)
      spotify.setAccessToken(_token);

     spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
         playlists: playlists,
        });
     })
     spotify.getPlaylist('37i9dQZEVXcXsRVMIJ32OX').then((response) => {
      dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly:response
      })
     })
     spotify.getMyTopArtists().then((response) =>
     dispatch({
       type: "SET_TOP_ARTISTS",
       top_artists: response,
     })
   );

   dispatch({
     type: "SET_SPOTIFY",
     spotify: spotify,
   });
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
         user: user,
        });
      });
      

    }
  }, []);
  // console.log("user" , user)
  // console.log("token" , token)


  return (
    <div className="app">
     {
      token ? <Player spotify={spotify}/> : <Login/>
     }
    </div>
  );
}

export default App;