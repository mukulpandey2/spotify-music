import React from 'react'
import { useStateValue } from '../StateProvider';
import SidebarOption from './SidebarOption';
import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";


const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();




  return (

    <div>
      <div className='head'>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" width={150} height={50} className='p-3 cursor-pointer' alt="" />
      </div>
      <hr />
      <div className='ps-5 py-3'>
        <SidebarOption Icon={IoHome} title='Home' />
        <SidebarOption Icon={IoSearch} title='Search' />
        <SidebarOption Icon={IoLibrary} title='Your Library' />
      </div>
      <hr />
      <div className='plalists ps-5 py-3'>
        <h4 className='font-bold pb-2'> PlayLists</h4>

        <div className='playlisrs-details overflow-y-scroll  h-[320px] cursor-pointer'>
          {
            playlists?.items?.map((playlist , index) => {
              return (
                <div className='flex items-center hover:bg-gray-900 rounded-md' key={index}>

                  <div className="playlists-img p-2">
                    <img src={playlist.images[0].url} alt="" width={50} className=' rounded-sm' />
                  </div>
                  <div className="playlists-name p-2">
                    <h4 className='font-bold'>{playlist.name}</h4>
                    <p className=' text-[14px] font-bold text-gray-500'>{playlist.owner.display_name}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


    </div>

  )
}

export default Sidebar