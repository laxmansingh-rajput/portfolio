import React from 'react'
import { useEffect, useState } from 'react'
import experience from '../data/experience.js'
import certifications from '../data/certifications.js'
import { zoom, topDown } from '../controller/animation.js'

const achivements = () => {
  const [curr, setcurr] = useState(1)
  const [List, setList] = useState(() => {
    return Object.values(certifications)
  })
  const [animate, setanimate] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setanimate(true)
    }, 100);
  }, [])

  return (
    <div className={'min-h-screen w-full relative pt-40 font-mono p-2 ' + topDown(animate)}>

      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#2f251b] opacity-5 z-40"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#2f251b] opacity-5 z-40"></div>
      <div className="absolute bottom-55 right-56 w-25 h-25 rounded-full bg-[#2f251b] opacity-5 z-40"></div>
      <div className="absolute bottom-90 left-30 w-25 h-25 rounded-full bg-[#2f251b] opacity-5 z-40"></div>
      <div className="absolute top-155 left-156 w-25 h-25 rounded-full bg-[#2f251b] opacity-5 z-40"></div>

      <div className={'flex flex-col items-center justify-center w-full absolute top-18 left-0 gap-1 text-[#3b3024]' + zoom(animate)}>
        <div className='text-2xl font-bold'>
          My Journey
        </div>
        <div className='font-medium text-sm text-[#5a4b3a]'>
          Certificates & Experience
        </div>
      </div>

      <div className='w-full h-auto flex flex-col items-center justify-center gap-9'>

        <div className='w-full flex items-center justify-center gap-3'>
          <button
            className={
              ' px-4 py-1 rounded-full cursor-pointer shadow-md font-semibold  transition-all ease-in duration-100 flex items-center gap-1 ' +
              (curr == 1
                ? 'bg-[#9C948B] text-[#2e241a]'
                : 'bg-[#d3ccc3] text-[#4a3c2a] hover:bg-[#c6beb5]')
            }
            onClick={
              () => {
                setcurr(1)
                setList(Object.values(certifications))
              }
            }
          >
            <div>Certificates</div>
            <div>({Object.values(certifications).length})</div>
          </button>

          <button
            className={
              ' px-4 py-1 rounded-full cursor-pointer shadow-md font-semibold  transition-all ease-in duration-100 flex items-center gap-1  ' +
              (curr == 2
                ? 'bg-[#9C948B] text-[#2e241a]'
                : 'bg-[#d3ccc3] text-[#4a3c2a] hover:bg-[#c6beb5]')
            }
            onClick={
              () => {
                setcurr(2)
                setList(Object.values(experience))
              }
            }
          >
            <div>Experience</div>
            <div>({Object.values(experience).length})</div>
          </button>
        </div>

        <div className='w-full min-h-[400px] flex flex-col items-center p-4'>
          {
            (List.length == 0) && <div className='text-md font-bold text-[#2e241a] bg-[#d3ccc3]  border border-[#6b5a45] rounded-xl p-6 shadow-md
             w-1/2 max-[1100px]:w-2/3 max-[750px]:w-full text-center '>
              No formal experience yet. Actively seeking an internship opportunity to gain industry exposure
            </div>
          }
          {
            List.map((element, i) => (
              <div className={`relative flex min-[600px]:pl-12 mb-10 w-1/2 max-[1100px]:w-2/3 max-[750px]:w-full z-50 cursor-pointer group`} onClick={() => window.open(element.link)}>

                <span className="absolute left-[6px] top-2 w-4 h-4 bg-[#4a3c2a] rounded-full max-[600px]:hidden" />

                <div className="bg-[#d3ccc3]  border border-[#6b5a45] rounded-xl p-6 shadow-md">

                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-md font-bold text-[#2e241a] group-hover:underline transition-all ease-in duration-1000">
                      {
                        element.name
                      }
                    </h2>
                    <span className="text-sm text-[#5a4b3a]">
                      {
                        element.year
                      }
                    </span>
                  </div>

                  <p className="text-sm text-[#4a3c2a] mb-2 font-semibold">
                    {element.subtitle}
                  </p>

                  <p className="text-[#3b3024] leading-relaxed text-sm">
                    {element.discription}
                  </p>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div >
  )
}

export default achivements
