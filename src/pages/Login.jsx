import React from 'react'
import {accessUrl} from './Spotify'
 
    
const Login = () => {
  return (
    <div>
        <div  className=' w-[100vw] h-[100vh] flex bg-black'>

        <div className='flex flex-col items-center justify-center'>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" className='w-[50%]' alt="" />
            <a href={accessUrl} className='bg-green-500 px-6 py-3 rounded-full text-white font-bold'>Go to Spotify</a>
        </div>
        </div>
    </div>
  )
}

export default Login;