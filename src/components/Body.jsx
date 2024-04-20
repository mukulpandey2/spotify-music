import React from 'react'
import Header from './Header'
import { FaSpotify } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { useStateValue } from '../StateProvider'
import SongRow from '../pages/SongRow';

const Body = ({ spotify }) => {
  const [{ user, discover_weekly }, dispatch] = useStateValue();


  const playPlaylist = (id) => {
    spotify.play({
      context_uri: `spotify:playlist:37i9dQZEVXcXsRVMIJ32OX`,
    })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`],
    })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <>
      <div className='header mb-4 '>
        <Header spotify={spotify} />
      </div>
      <div className="banner flex items-center justify-center mb-4 py-5 bg-gray-600 my-[60px]">

        <div className="banner-img me-6">
          <img src={discover_weekly?.images[0].url} alt="" width={200} />
        </div>
        <div className="banner-text">
          <strong>Playlist</strong>
          <h2 className=' text-8xl font-bold mb-4'>{discover_weekly?.name}</h2>
          <h1>{discover_weekly?.description}</h1>
          <div className='flex items-center gap-1'>
            <FaSpotify className='text-green-500' size={22} />
            <p>  Made for  <a href="" className='font-bold hover:underline'> {user?.display_name} </a>30 songs, about 1 hr 30 min</p>
          </div>
        </div>
      </div>


      <div className="songs-container px-4 mb-5">
        <div className="songs-head flex items-center justify-between">
          <div className="left-head flex items-center gap-6">
            <IoPlayCircleSharp className='text-green-500 text-[80px] p-3 cursor-pointer ' onClick={playPlaylist} />
            <CiHeart className='text-gray-400 hover:text-white cursor-pointer' size={30} />
            <IoIosMore className='text-gray-400 hover:text-white cursor-pointer' size={30} />
          </div>
          <div className="right-head flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
            <p>List</p>
            <IoList size={25} />
          </div>
        </div>
      </div>
      <div className='px-6'>
        <table className='w-[100%]'>
          <thead>
            <tr className='border-b-[1px] text-[14px] row'>
              <td className='col pb-2 px-3'>#</td>
              <td className='col pb-2'>Title</td>
              <td className='col pb-2'>Album</td>
              <td className='col pb-2'>Date added</td>
              <td className='col pb-2'><CiClock2 size={20} /></td>
            </tr>
          </thead>

          <tbody>
            {
              discover_weekly?.tracks?.items?.map((songs, index) => (

                <SongRow track={songs.track} playSong={playSong} index={index} key={index} />

              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Body