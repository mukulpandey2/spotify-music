import React from 'react'


function SongRow( {track , index, playSong} ) {
    // console.log(track)
    let min = Math.floor((track.duration_ms)/1000/60);
    let sec = Math.floor((track.duration_ms/1000)%60);
    
    return (   
       
        <>
        <tbody>
           <tr className='hover:bg-gray-700 cursor-pointer text-gray-400 px-5' onClick={() => playSong(track.id)}>
                <td>{index + 1}</td>
                <td>
                <td><img src={track.album.images[0].url} alt="" width={45} className=' rounded-sm' /></td>
                <td><h2 className='text-white'>{track.album.name}</h2>
                <span className=' text-[14px] text-gray-400'>{track.album.artists.map(artist => artist.name).join(", ")}</span></td>
                </td>
                <td className='py-3' ><h4>{track.album.name}</h4></td>
                <td>{track.album.release_date}</td>
                <td>{min}:{sec<10 ? `0`+sec : sec}</td>
           </tr>
        </tbody>
            
            {/* <div className='flex items-center hover:bg-gray-900  rounded-md'>

                <div className="songrow-img p-2">
                    <img src={track.album.images[0].url} alt="" width={50} className=' rounded-sm' />
                </div>
                <div className="songrow-name p-2">
                    <h4 className='font-bold'>{track.album.name}</h4>
                    <a className=' text-[14px] font-bold text-gray-500'>{track.album.artists.map(artist => artist.name).join(", ")} - {" "} {track.album.name}</a>
                </div>

            </div> */}





        </>

    )
}

export default SongRow