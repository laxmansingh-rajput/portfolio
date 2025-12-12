import React from "react";
import Cards from "./cards";
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import cpp from '../assets/cpp.svg'
import nodeJs from '../assets/nodeJs.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import express from '../assets/express.svg'
const Skills = () => {

    return (
        <div className="h-full w-full flex items-center justify-center font-mono relative gap-6">
            <div className="absolute w-full text-[35px] font-bold top-15 left-0 text-center ">
                Skills
            </div>
            <div className="relative border-2 h-60 w-60 rounded-md pb-6 p-3 grid grid-cols-2 grid-rows-2 gap-2">

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

                <div className="absolute bottom-0 left-0 h-6 box-border w-full text-center text-md underline">
                    Languages
                </div>

            </div>

            <div className=" relative border-2 h-60 w-60 rounded-md pb-6 p-3 grid grid-cols-2 grid-rows-2 gap-2">
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
                <div className=" text-center text-md underline absolute w-full bottom-0 left-0 ">
                    Frameworks & Libraries
                </div>
            </div>
            <div className=" border-2 h-60 w-60 rounded-md relative p-4 ">
                <div className=" text-center text-md underline absolute w-full bottom-0 left-0 ">
                    Databases
                </div>
            </div>
            <div className=" border-2 h-60 w-60 rounded-md relative p-4 ">
                <div className=" text-center text-md underline absolute w-full bottom-0 left-0 ">
                    Devops & tools
                </div>
            </div>
        </div >
    );
};

export default Skills;
