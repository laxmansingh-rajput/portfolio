import React, { useEffect, useState } from 'react'
import details from '../data/Projectdetails.js'
import live from '../assets/live.svg'
import gh from '../assets/github.svg'
import di from '../assets/dockerImage.svg'
import { zoom, topDown } from '../controller/animation.js'

const Projects = () => {
  const [projectIndex, setprojectIndex] = useState(0)
  const [animate, setanimate] = useState(false)
  const [animateProjects, setanimateProjects] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setanimate(true)
    }, 100);
    setTimeout(() => {
      setanimateProjects(true)
    }, 100);
  }, [])

  const project = Object.values(details)
  const currentProject = project[projectIndex]
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 md:gap-10 px-4 md:px-8 pt-20 md:pt-24 pb-8 font-mono relative">

      <div className={"absolute top-8 md:top-14 text-2xl md:text-[36px] font-bold tracking-wide text-black/70 " + zoom(animate)}>
        Projects
      </div>

      <div className={"w-full max-w-6xl flex flex-col lg:flex-row gap-6 md:gap-8 " + zoom(animate)}>
        <div className="max-[1000px]:h-auto w-full lg:w-1/3  rounded-xl bg-[#EFE9E3]/40 shadow-lg  p-4 flex flex-col gap-3 md:gap-5 pt-14 md:pt-17
         relative ">
          <div className='absolute top-2 left-0 flex flex-col justify-center gap-1 p-4 font-bold text-lg md:text-xl h-12 w-full text-black/70'>
            <div>
              All Projects({project.length})
            </div>
            <div className='w-full border-1'></div>
          </div>
          {Object.values(details).map((project, i) => (
            <div
              key={i}
              onClick={() => setprojectIndex(i)}
              className={`rounded-lg px-3 py-2 cursor-pointer transition-colors duration-300
            ${topDown(animateProjects)}
                ${projectIndex === i
                  ? ' bg-[#C9B59C] shadow-md scale-[1.02]'
                  : ' bg-[#F9F8F6] hover:bg-[#d9cabb] opacity-70 hover:opacity-100'
                } `}
              style={{
                transitionDelay: animateProjects ? `${i * 200}ms` : '0ms'
              }}

            >
              <div className="text-base md:text-xl font-semibold text-black/80 mb-2">
                {project.name}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((element, indexStack) => (
                  <div
                    key={indexStack}
                    className={"px-2  py-0.5 rounded-sm text-[10px] md:text-[12px] bg-black/70 text-white hover:bg-black transition-colors duration-300" + ((indexStack > 2) ? " hidden" : "")}
                  >
                    {element}
                  </div>
                ))}
                {
                  <div
                    className={"px-2 py-0.5 rounded-sm text-[10px] md:text-[12px] bg-black/70 text-white hover:bg-black transition-colors duration-300" + ((project.tech.length < 3) ? " hidden" : "")}
                  >
                    {
                      "+" + (project.tech.length - 3)
                    }
                  </div>
                }
              </div>
            </div>
          ))}
        </div>

        <div className=" h-[500px] max-[770px]: w-full lg:w-2/3 rounded-xl bg-[#EFE9E3]/40 shadow-lg flex flex-col items-center justify-start gap-1 p-4 relative pt-20 pb-14 max-[1000px]:pb-18 max-[1000px]:h-auto">
          <div className='absolute top-2 left-0 flex flex-col justify-center items-center gap-1 font-bold text-lg md:text-xl h-12 w-full text-black/70'>
            <div>
              Description
            </div>
            <div className='w-full border-1'></div>
          </div>
          <div className="relative h-[230px] max-[650px]:w-9/10  w-2/3  aspect-video rounded-xl overflow-hidden shadow-lg mb-4 md:mb-6 bg-gray-900 flex">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={currentProject.url}
              title="Project Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="w-full h-auto text-black/70 text-sm shrink-0" dangerouslySetInnerHTML={{ __html: currentProject.discription }}>
          </div>
          <div className='flex items-center pt-2 gap-1 text-xs md:text-sm w-full flex-wrap'>
            {currentProject.tech.map((element, indexStack) => (
              <div
                key={indexStack}
                className="px-2 py-0.5 w-auto rounded-sm text-[12px] md:text-[14px] cursor-pointer bg-black/80 text-white tracking-wide hover:bg-black transition-colors duration-300 flex items-center justify-center shrink-0"
              >
                {element}
              </div>
            ))}
          </div>
          <div className='h-10 w-full absolute bottom-1 max-[1000px]:bottom-5 left-0 flex items-center justify-end gap-2 p-4'>
            <img
              src={live}
              title="Live Project"
              className="h-6 md:h-7 cursor-pointer hover:scale-110 transition-all ease-in duration-200"
              onClick={() => window.open(currentProject.link, '_blank')}
            />

            <img
              src={gh}
              title="GitHub Repository"
              className="h-6 md:h-7 cursor-pointer hover:scale-110 transition-all ease-in duration-200"
              onClick={() => window.open(currentProject.github, '_blank')}
            />

            <img
              src={di}
              title="Docker Image"
              className="h-6 md:h-7 cursor-pointer hover:scale-110 transition-all ease-in duration-200"
              onClick={() => window.open(currentProject.dockerHub, '_blank')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects