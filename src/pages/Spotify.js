export const authEndPoint = "https://accounts.spotify.com/authorize";
const clientId = "f11795ec6db14d5cae5b28250386caea";
const redirectUri = "http://localhost:3000/";
const Scope = [
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-top-read",
  "user-read-recently-played",
  "user-modify-playback-state",
];
export const getToken = () =>{
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);

    return initial;
  }, {});  
};


export const getUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${Scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;

