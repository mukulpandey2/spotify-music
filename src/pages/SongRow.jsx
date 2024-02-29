import React from 'react'


function SongRow( {track , index, playSong} ) {
    // console.log(track)
    let min = Math.floor((track.duration_ms)/1000/60);
    let sec = Math.floor((track.duration_ms/1000)%60);
    
    return (   
       
        <>
           <tr className='hover:bg-gray-700 cursor-pointer text-gray-300'  onClick={() => playSong(track.id)} key={index}>
                <td className='px-3'>{index + 1}</td>
                <td>
                    <div className='flex items-center '>
                    <td className='pe-3 py-2'><img src={track.album.images[0].url} alt="" width={45} className=' rounded-sm ' /></td>
                    <div>
                    <p className='text-white pe-6 hover:underline'>{track.album.name.length > 35 ? track.album.name.slice(0, 35) + "..." : track.album.name + ' ' }</p>
                    <a className='text-[14px] text-gray-400 hover:underline'>{track.album.artists.map(artist => artist.name).join(", ")}</a>

                    </div>
                    </div>
                </td>
                
                <td className='pe-6 hover:underline'><h4>{track.album.name.length > 35 ? track.album.name.slice(0, 35) + "..." : track.album.name + ' ' }</h4></td>
                <td>{track.album.release_date}</td>
                <td>{min}:{sec<10 ? `0`+sec : sec}</td>
           </tr>
    
        </>

    )
}

export default SongRow