export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // token:'BQDjLk0LVzSta5pGUV75Vz3jaTDq5BEcB3Ao1ej1RDqZpn9Np4E6Idld8MuHMBAqP8hfFa0zLJIjTs4Kg592LEozl3-KLc1ORa09DfNxh-Fs2HiDGAo3WgzT366dbv8ETyy10sA_gHlLfQMFmKhRt25PjexORVN-xThmqjzzYOoH9jSgcpuKmitCUBD3rWoDmpwpW2YAFBzU273yAypI',
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
