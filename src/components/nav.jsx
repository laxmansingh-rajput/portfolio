import React from 'react'
import { useState, useEffect } from 'react';
const Nav = ({ bg, index, setindex }) => {
    const list = ['About', 'Skills', 'Projects', 'Achivement', 'Contact']
    return (
        <div className='flex items-center justify-end fixed top-0 left-0 h-12  w-full box-border p-4 gap-5 pr-15 z-50 text-md
        font-mono max-[800px]:pr-4 max-[800px]:gap-3 text-md max-[500px]:text-[12px] max-[500px]:justify-center shadow-sm transition-colors duration-500 '
            style={{ backgroundColor: bg }}
        >
            {
                list.map(
                    (_, i) => (
                        <span className={'hover:cursor-pointer transition-all  ' + ((index == i) ? " underline" : " ")}
                            onClick={
                                () => {
                                    setindex(i)
                                    sessionStorage.setItem('index', i)
                                }}>
                            {list[i]}</span>
                    ))
            }
        </div>
    )
}

export default Nav