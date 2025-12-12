import React from 'react'

const cards = ({ image, name }) => {
    return (
        <div className='border-2 h-20 w-17 flex flex-col items-center justify-start p-2 rounded-md select-none relative box-border'>
            <img src={image} alt="" />
            <div className='absolute bottom-0 w-full  text-center text-sm  font-semibold'>{name}</div>
        </div>
    )
}

export default cards