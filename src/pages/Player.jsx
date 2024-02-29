import React from 'react'
import Body from '../components/Body';
import Sidebar from './Sidebar';
import Footer from '../components/Footer';

function Player({spotify}) {
    
  return (
    <>
    <div className='flex w-[100%] h-[88vh]'>
      <div className='w-[20%] text-white  bg-black'>
      <Sidebar />
      </div>
      <div className='w-[80%] h-[88vh] text-white bg-gradient-to-t from-black to-gray-500 overflow-y-scroll'>
      <Body spotify={spotify}/>
      </div>
    </div>
    <div className='w-[100%] h-[80px] text-white absolute bottom-0 bg-gray-900'>
    <Footer spotify={spotify}/>
    </div>
    </>
  )
}

export default Player