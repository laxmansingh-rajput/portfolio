import React from 'react'

const cards = ({ image, name }) => {
    return (
        <div className=' bg-white h-20 w-25 flex flex-col items-center justify-start p-1 pb-3 rounded-md select-none relative box-border'
         >
            <img src={image} className='h-15' alt="" />
            <div className='absolute bottom-[-2px] w-full  text-center text-[13px]  font-semibold'>{name}</div>
        </div>
    )
}

export default cards