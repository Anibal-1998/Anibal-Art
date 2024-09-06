import React, {useEffect, useState} from 'react'
// import projects from "../../data/projects"
import WorkCard from './WorkCard/WorkCard'
import "./Main.css"
function Main ({ projects = [] }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setLoading])
  return (
    <>
    {
      loading ? (
        <div className='wrapper'>
          <main className='gallery'>
            <div className='spinner'><img src="/img/logo.svg" alt="Loading..." /></div>
          </main>
        </div>
      ) : (
        <div className='wrapper'>
          <main className='gallery'>
              {projects.map((project)=>(
                <WorkCard {...project} key={project.id} />
              ))}
          </main>
        </div>
      )
    }
    </>
  )
}

export default Main