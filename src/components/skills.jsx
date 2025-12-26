import React from "react";
import { useEffect, useState } from "react";
import Cards from "./cards";
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import cpp from '../assets/cpp.svg'
import nodeJs from '../assets/nodeJs.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import express from '../assets/express.svg'
import mogo from '../assets/mogo.svg'
import sql from '../assets/sql.svg'
import docker from '../assets/docker.svg'
import jenkins from '../assets/jenkins.svg'
import kube from '../assets/kube.svg'
import git from '../assets/git.svg'
import aws from '../assets/aws.svg'
import postman from '../assets/nginx.svg'

const Skills = () => {
    const [animate, setanimate] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setanimate(true)
        }, 100);
        sessionStorage.setItem('prev', '#EFE9E3')
    }, [])

    return (
        <div
            className={`min-h-screen w-full flex items-center text-black/70 overflow-hidden max-[635px]:flex-col max-[635px]:overflow-scroll  max-[635px]:pt-30 max-[635px]:pb-15 justify-center font-mono relative gap-6 transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}

        >
            <div className="absolute w-full text-2xl font-bold top-18 left-0 text-center  ">
                Skills
            </div>

            <div className={`flex flex-col items-center justify-center gap-5 transition-all duration-700 delay-200
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>

                <div className="relative  h-55 w-70 hover:scale-105 transition-all ease-in duration-300 rounded-md pb-6 p-3 grid grid-cols-2 grid-rows-2 gap-2 bg-[#BFD7EA] ">

                    <div className="flex items-center justify-center">
                        <Cards image={cpp} name={'c++'} />
                    </div>

                    <div className="flex items-center justify-center">
                        <Cards image={html} name={'html'} />
                    </div>

                    <div className="flex items-center justify-center">
                        <Cards image={css} name={'css'} />
                    </div>

                    <div className="flex items-center justify-center">
                        <Cards image={javascript} name={'JS'} />
                    </div>

                    <div className="absolute bottom-0 left-0 h-6 box-border w-full text-center text-[15px] font-semibold underline">
                        Languages
                    </div>

                </div>

                <div className=" relative  h-55 w-70 hover:scale-105 transition-all ease-in duration-300 rounded-md pb-6 p-3 grid grid-cols-2 grid-rows-2 gap-2 bg-[#BFD7EA] ">
                    <div className="flex items-center justify-center">
                        <Cards image={nodeJs} name={'Node.js'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={react} name={'React.js'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={express} name={'Express.js'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={tailwind} name={'Tailwind css'} />
                    </div>
                    <div className=" text-center text-[15px] font-semibold underline absolute w-full bottom-0 left-0 ">
                        Frameworks & Libraries
                    </div>
                </div>
            </div>

            <div className={`flex flex-col items-center justify-center gap-5 transition-all duration-700 delay-300
                ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>

                <div className="h-32 w-70 hover:scale-105 transition-all ease-in duration-300 rounded-md relative p-4 grid grid-cols-2 bg-[#BFD7EA]  ">
                    <div className="flex items-center justify-center">
                        <Cards image={mogo} name={'Mongodb'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={sql} name={'My sql'} />
                    </div>
                    <div className=" text-center text-[15px] font-semibold underline absolute w-full bottom-0 left-0 ">
                        Databases
                    </div>
                </div>

                <div className=" h-78 w-70 hover:scale-105 transition-all ease-in duration-300 rounded-md relative p-4 grid grid-cols-2 grid-rows-3 bg-[#BFD7EA]  ">
                    <div className="flex items-center justify-center">
                        <Cards image={docker} name={'Docker'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={git} name={'Git'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={kube} name={'Kubernetes'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={jenkins} name={'Jenkins'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={aws} name={'Aws'} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Cards image={postman} name={'Nginx'} />
                    </div>
                    <div className=" text-center text-[15px] font-semibold underline absolute w-full bottom-0 left-0 ">
                        Devops & tools
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
