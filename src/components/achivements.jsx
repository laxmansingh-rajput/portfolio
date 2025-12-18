import React from 'react'
import { useEffect, useState } from 'react'

const achivements = () => {
  const [curr, setcurr] = useState(1)

  return (
    <div className='min-h-screen w-full relative pt-40 font-mono '>

      <div className='flex flex-col items-center justify-center w-full absolute top-18 left-0 gap-1 text-[#3b3024]'>
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
              'border border-[#6b5a45] px-4 py-1 rounded-full font-semibold flex items-center gap-1 transition ' +
              (curr == 1
                ? 'bg-[#9c948b] text-[#2e241a]'
                : 'bg-[#e7dfd6] text-[#4a3c2a]')
            }
            onClick={() => setcurr(1)}
          >
            <div>Certificates</div>
            <div>(1)</div>
          </button>

          <button
            className={
              'border border-[#6b5a45] px-4 py-1 rounded-full font-semibold flex items-center gap-1 transition ' +
              (curr == 2
                ? 'bg-[#a1763a] text-[#2e241a]'
                : 'bg-[#e7dfd6] text-[#4a3c2a]')
            }
            onClick={() => setcurr(2)}

          >
            <div>Experience</div>
            <div>(1)</div>
          </button>
        </div>

        <div className='w-full h-[400px] flex flex-col items-center '>
          <div className="relative pl-12 mb-10 w-1/2">

            <span className="absolute left-[6px] top-2 w-4 h-4 bg-[#4a3c2a] rounded-full" />

            <div className="bg-[#e7dfd6] border border-[#6b5a45] rounded-xl p-6 shadow-md">

              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-[#2e241a]">
                  Oracle DevOps
                </h2>
                <span className="text-sm text-[#5a4b3a]">
                  2025
                </span>
              </div>

              <p className="text-sm text-[#4a3c2a] mb-2">
                Oracle Certification
              </p>

              <p className="text-[#3b3024] leading-relaxed">
                Completed Oracle DevOps certification covering CI/CD,
                cloud deployment, and automation fundamentals.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default achivements
