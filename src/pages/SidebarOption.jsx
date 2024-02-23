import React from 'react'

const SidebarOption = ({title = "mukul"  , Icon}) => {


  return (
    <div >
      <div className='flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer ease-in pb-3'>
      {Icon && <Icon/>}
      {Icon ? <h4 className='font-bold'>{title}</h4> : <p className='pb-0'>{title}</p>}
      </div>
    </div>
  )
}

export default SidebarOption