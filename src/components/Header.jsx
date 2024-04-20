import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useStateValue } from '../StateProvider';

const Header = () => {
    const [ {user}] = useStateValue();
  return (
        <div className=' relative'>
            <div className='fixed top-0 right-0 left-[20vw] px-4 pt-2 flex items-center justify-between'>
               
                <div className="search-bar flex text-black items-center gap-2 px-5 bg-white py-3  w-[300px] rounded-full">
                <IoSearch  size={20}/>
                <input type="text" placeholder='What do you want to play? ' className='outline-none w-[100%]' />
                </div>
                <div className="user flex items-center gap-3 ">
                    <IoIosNotificationsOutline className='p-1 bg-black text-gray-400 hover:text-white rounded-full cursor-pointer' size={40} />
                    <img src={user?.images[0].url} alt={user?.display_name} width={40} className=' rounded-full'/> 
                </div>
            </div>
        </div>
        
  )
}

export default Header