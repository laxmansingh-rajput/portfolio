import { useState,useEffect } from 'react'
import './App.css'
import About from './components/about'
import Nav from './components/nav'
import Skills from './components/skills'
import Projects from './components/projects.jsx'
import Achivements from './components/achivements.jsx'
import Contacts from './components/contacts.jsx'
function App() {
  const [index, setindex] = useState(1)
  const list = [<About setindex={setindex} />, <Skills setindex={setindex} />, <Projects setindex={setindex} />, <Achivements setindex={setindex} />, <Contacts setindex={setindex} />]
  const colors = ['#F9F8F6', '#EFE9E3', '#D9CFC7', '#C9B59C']
  const [prevColor, setprevColor] = useState(
    () => {
      const color = localStorage.getItem('prev')
      if (color) {
        return color
      }
      return '#ffff'
    }
  )
  useEffect(() => {
    setTimeout(() => {
      setprevColor(colors[index])
    }, 200);
  }, [index])

  return (
    <div className={`relactive h-screen w-screen bg-[${prevColor}] transition-colors ease-in duration-500 overflow-hidden`}>
      <Nav />
      {
        list[index]
      }
    </div>
  )
}

export default App
