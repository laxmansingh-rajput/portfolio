import React from 'react'
import { useState, useEffect } from 'react'
import me from '../assets/me.jpeg'
import ln from '../assets/linkedIn.svg'
import gh from '../assets/github.svg'
import gm from '../assets/gmail.svg'
import lc from '../assets/leetcode.svg'
const About = ({ setindex }) => {
    const [animate, setanimate] = useState(false)
    useEffect(() => {
        setInterval(() => {
            setanimate(true)
        }, 10);
    }, [])

    return (
        <div className='h-full w-full flex items-center justify-center gap-10 font-mono overflow-hidden '
            onScroll={
                () => {
                    setindex(1)
                    console.log('heheh')
                }
            }>
            <div className={' h-110 w-120 flex flex-col gap-3 p-5 transition-transform duration-700 ease-out ' +
                (animate ? 'translate-x-0' : '-translate-x-600')}>
                <div className='text-6xl font-bold  box-border '>
                    about.
                </div>
                <div className='text-[20px] text-black/70 font-medium '>
                    Hi, I’m Laxman Singh Rajput
                </div>
                <div className='text-[20px] text-black/70 font-medium '>
                    A Full-Stack Web Developer and a B.Tech student at Medi-Caps University, Indore.
                </div>
                <div className='text-[20px] text-black/70 font-medium '>
                    I build modern, scalable web applications using the MERN stack, and I have foundational knowledge of DevOps tools like Docker, Kubernetes, AWS, and Jenkins.
                </div>
                <div className='flex gap-3 w-full'>
                    <img src={ln} className='h-10 cursor-pointer hover:scale-95 transition-all ease-out select-none ' onClick={() => {
                        window.location.href = "https://www.linkedin.com/in/laxman-singh-rajput-5a58352b7/";
                    }} alt="" />
                    <img src={gh} className='h-10 cursor-pointer hover:scale-95 transition-all ease-out select-none ' onClick={() => {
                        window.location.href = "https://github.com/laxmansingh-rajput";
                    }} alt="" />
                    <img src={gm} className='h-10 cursor-pointer hover:scale-95 transition-all ease-out select-none ' onClick={() => {
                        window.location.href = "mailto:laxmansinghrajput5417@gmail.com";
                    }} alt="" />
                    <img src={lc} className='h-10 cursor-pointer hover:scale-95 transition-all ease-out select-none ' onClick={() => {
                        window.location.href = "https://leetcode.com/u/Laxmansinghrajput/";
                    }} alt="" />
                </div>
            </div>
            <div
                className={
                    'select-none border-3 h-110 w-90 overflow-hidden rounded-xl transition-transform duration-800 ease-out ' +
                    (animate ? 'translate-x-0' : 'translate-x-600')
                }
            >
                <img src={me} className=' object-contain' alt="" />
            </div>
        </div>
    )
}

export default About