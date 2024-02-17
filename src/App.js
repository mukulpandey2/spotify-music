
import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import { getToken } from './pages/Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './pages/Player';
import { useStateContextValue } from './StateProvider';

const spotify = new SpotifyWebApi();

// console.log(spotify, "spotifypreview")

function App() {
  const [token, setToken] = useState(null);

  const [{user}, dispatch] = useStateContextValue();
  



  useEffect(() =>{
    
    const hash = getToken();
    // window.location.hash="";
    const _token = hash.access_token;

    setToken(_token)
    if(_token){
      spotify.setAccessToken(token)

      spotify.getMe().then((user) => {
        console.log("user" , user)
        // dispatch({
        //   type: "SET_USER",
        //   user: user,
        // });
      });
      
    }

    // console.log(token)
  } ,[])
  
  return (
    <div>
      {
        token ? <Player/>: <Login/>    
      
        
      }   
     
      
    </div>
  );
}

export default App;
