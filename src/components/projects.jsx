import React, { useEffect, useState } from 'react'
import details from '../data/Projectdetails.js'

const Projects = () => {
  const [projectIndex, setprojectIndex] = useState(0)

  useEffect(() => {
    console.log(details)
  }, [])
  const project = Object.values(details)
  const currentProject = project[projectIndex]
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-10 px-8 pt-24 font-mono relative">

      <div className="absolute top-10 text-[36px] font-bold tracking-wide (text-black/70)">
        Projects
      </div>

      <div className="w-full max-w-6xl flex gap-8">
        <div className="h-auto w-1/3 rounded-xl bg-[#EFE9E3]/40 shadow-lg overflow-auto p-4 flex flex-col gap-5 pt-17 relative ">
          <div className='absolute top-2 left-0 flex items-center p-4 font-bold text-xl h-12 w-full border-b-2 text-black/70'>
            All Projects({project.length})
          </div>
          {Object.values(details).map((project, i) => (
            <div
              key={i}
              onClick={() => setprojectIndex(i)}
              className={`rounded-lg px-3 py-2 cursor-pointer transition-all duration-300
                ${projectIndex === i
                  ? 'bg-[#C9B59C] shadow-md scale-[1.02]'
                  : 'bg-[#F9F8F6] hover:bg-[#d9cabb]  opacity-70 hover:opacity-100'
                }`}
            >
              <div className="text-xl font-semibold text-black/80 mb-2">
                {project.name}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((element, indexStack) => (
                  <div
                    key={indexStack}
                    className={"px-2 py-0.5 rounded-md text-[12px] bg-black/70 text-white  hover:bg-black transition-colors duration-300" + ((indexStack > 2) ? " hidden" : "")}
                  >
                    {element}
                  </div>
                ))}
                {
                  <div
                    className={"px-2 py-0.5 rounded-md text-[12px] bg-black/70 text-white  hover:bg-black transition-colors duration-300" + ((project.tech.length < 3) ? " hidden" : "")}
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

        <div className="h-[480px] w-1/2 rounded-xl bg-[#EFE9E3]/40 shadow-lg flex flex-col items-center justify-center p-2">
          <div className='video  w-full h-1/2 shrink-0 overflow-hidden rounded-md'>
            <iframe className="h-full w-full " src={currentProject.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="h-full w-full rounded-lg flex items-center justify-center text-black/70 text-sm " dangerouslySetInnerHTML={{ __html: currentProject.discription }}>
          </div>
          {/* <div className='flex gap-1 text-sm w-full flex-wrap'>
            {currentProject.tech.map((element, indexStack) => (
              <div
                key={indexStack}
                className="px-2 py-0 w-auto rounded-md text-[12px] cursor-pointer bg-black/80 text-white tracking-wide hover:bg-black transition-colors duration-300 flex items-center justify-center shrink-0 "
              >
                {element}
              </div>
            ))}
          </div> */}
        </div>


      </div>
    </div>
  )
}

export default Projects
