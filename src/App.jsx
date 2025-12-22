import { useState, useEffect, useRef } from 'react'
import './App.css'
import About from './components/about'
import Nav from './components/nav'
import Skills from './components/skills'
import Projects from './components/projects.jsx'
import Achivements from './components/achivements.jsx'
import Contacts from './components/contacts.jsx'

function App() {
  const [index, setindex] = useState(() => {
    const ind = localStorage.getItem('index')
    if (ind) return Number(ind)
    return 0
  })

  const [scrollPercentage, setscrollPercentage] = useState(0)
  const [canChange, setcanChange] = useState(1)
  const [animate, setanimate] = useState(false)

  const touchStartY = useRef(null)

  const list = [
    <About setindex={setindex} />,
    <Skills setindex={setindex} />,
    <Projects setindex={setindex} />,
    <Achivements setindex={setindex} />,
    <Contacts setindex={setindex} />
  ]

  const colors = ['#F9F8F6', '#EFE9E3', '#D9CFC7', '#C9B59C', '#B8A082']

  const [prevColor, setprevColor] = useState(() => {
    const color = localStorage.getItem('prev')
    return color || '#ffff'
  })

  useEffect(() => {
    setTimeout(() => {
      setprevColor(colors[index])
    }, 200)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index])

  useEffect(() => {
    if (scrollPercentage === 0) {
      setcanChange(0)
    } else if (scrollPercentage === 100) {
      setcanChange(2)
    } else if (scrollPercentage < 100 && scrollPercentage > 0) {
      setcanChange(1)
    } else {
      setcanChange(3)
    }
  }, [scrollPercentage, index])

  useEffect(() => {
    setTimeout(() => setanimate(true), 800)

    const helper = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight

      const scrollPercent =
        (scrollTop / (docHeight - winHeight)) * 100

      setscrollPercentage(Math.round(scrollPercent))
    }

    helper()
    window.addEventListener('scroll', helper)
    return () => window.removeEventListener('scroll', helper)
  }, [index])

  return (
    <div
      className="min-h-screen w-full transition-colors duration-500 relative overflow-hidden max-[900px]:overflow-y-scroll"
      style={{ backgroundColor: prevColor }}

      onWheel={(e) => {
        if (!animate) return

        if (e.deltaY > 0 && (canChange === 2 || Number.isNaN(scrollPercentage))) {
          let newVal = Math.min(index + 1, list.length - 1)
          setindex(newVal)
          localStorage.setItem('index', newVal)
          setanimate(false)
          setcanChange(1)
          setTimeout(() => setanimate(true), 800)
        }

        if (e.deltaY < 0 && (canChange === 0 || Number.isNaN(scrollPercentage))) {
          let newVal = Math.max(index - 1, 0)
          setindex(newVal)
          localStorage.setItem('index', newVal)
          setanimate(false)
          setcanChange(1)
          setTimeout(() => setanimate(true), 800)
        }
      }}

      onTouchStart={(e) => {
        touchStartY.current = e.touches[0].clientY
      }}

      onTouchEnd={(e) => {
        if (!animate || touchStartY.current === null) return

        const touchEndY = e.changedTouches[0].clientY
        const deltaY = touchStartY.current - touchEndY

        if (deltaY > 0 && (canChange === 2 || Number.isNaN(scrollPercentage))) {
          let newVal = Math.min(index + 1, list.length - 1)
          setindex(newVal)
          localStorage.setItem('index', newVal)
          setanimate(false)
          setcanChange(1)
          setTimeout(() => setanimate(true), 800)
        }

        if (deltaY < 0 && (canChange === 0 || Number.isNaN(scrollPercentage))) {
          let newVal = Math.max(index - 1, 0)
          setindex(newVal)
          localStorage.setItem('index', newVal)
          setanimate(false)
          setcanChange(1)
          setTimeout(() => setanimate(true), 800)
        }

        touchStartY.current = null
      }}
    >
      <Nav bg={prevColor} index={index} setindex={setindex} />

      {list[index]}

      <div className="main absolute bottom-0 w-full h-13 flex items-center justify-center transition-colors duration-500">
        <div className="h-full flex items-center justify-center gap-2">
          {list.map((_, i) => (
            <div
              key={i}
              className={`rounded-full border border-gray-400/30 cursor-pointer hover:bg-black/30 transition-all duration-300 ease-out ${
                i === index
                  ? 'h-3 w-3 bg-black/40 scale-110'
                  : 'h-2 w-2 bg-black/10'
              }`}
              onClick={() => {
                setindex(i)
                localStorage.setItem('index', i)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
