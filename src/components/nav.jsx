import React from 'react'
import { useState, useEffect } from 'react';
const Nav = ({ bg }) => {



    return (
        <div className='flex items-center justify-end fixed top-0 lef-0 h-12 w-full box-border p-4 gap-5 pr-15 z-50 text-md
        font-mono max-[800px]:pr-4 max-[800px]:gap-3 text-[15px] shadow-sm transition-colors duration-500 '
            style={{ backgroundColor: bg }}
        >
            <span className='hover:cursor-pointer'>About</span>
            <span className='hover:cursor-pointer'>Skills</span>
            <span className='hover:cursor-pointer'>Project</span>
            <span className='hover:cursor-pointer'>Achivement</span>
            <span className='hover:cursor-pointer'>Contact</span>
        </div>
    )
}

export default Nav