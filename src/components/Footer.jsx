import React ,{useEffect} from 'react'
import { IoIosShuffle } from "react-icons/io";
import { MdOutlineSkipPrevious } from "react-icons/md";
import {  IoPlayCircleSharp  } from "react-icons/io5";
import {  IoPauseCircleSharp  } from "react-icons/io5";
import { MdOutlineSkipNext } from "react-icons/md";
import { IoRepeat } from "react-icons/io5";
import { CiVolumeHigh } from "react-icons/ci";
import { useStateValue } from '../StateProvider';

const Footer = ({spotify}) => {

  const [{ token, item, playing }, dispatch] = useStateValue();

    useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r,"roifj");
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };
  return (
      <div className="h-[100%] footer flex items-center justify-between px-2 row">
        <div className="footer-left flex items-center">
        <div className="player-img ">
        <img src={item?.album.images[0].url} alt={item?.name}  width={60} height={50}/> 
          
         </div>
         {item ? (  
            <div className="songDesc text-[14px] ps-3">
              <p className='font-bold'>{item?.name}</p>
              <div className='text-gray-500'>{item?.artists.map((artist) => artist.name).join(", ")}</div>
            </div>
        ) : (
          <div className="songDesc text-[14px] ps-3">
              <p className='font-bold'>No song playing</p>
              <div>No artists</div>
            </div>
        )}
        </div>
        <div>
       
        <div className="footer-center flex items-center gap-4 text-[30px] text-gray-400 ">
          <IoIosShuffle className=" cursor-pointer hover:text-white" />
          <MdOutlineSkipPrevious className=" cursor-pointer hover:text-white" onClick={skipNext}/>
          {playing ? (
          < IoPauseCircleSharp 
            onClick={handlePlayPause}
            className=" cursor-pointer text-white" size={40}
          />
        ) : (
          < IoPlayCircleSharp 
            onClick={handlePlayPause}
            className=" cursor-pointer text-white" size={40}
          />
        )}
         
          <MdOutlineSkipNext className=" cursor-pointer hover:text-white" onClick={skipPrevious} />
          <IoRepeat className=" cursor-pointer hover:text-white" />

        </div>
        </div>
        <div className="footer-right flex items-center gap-2">
           <CiVolumeHigh size={25} />
           <input type="range" name="" id="ValumeSlider"  min={0}  max={100} />
        </div>
      </div>
  )
}

export default Footer