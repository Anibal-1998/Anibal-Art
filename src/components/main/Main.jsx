import React from 'react'
// import projects from "../../data/projects"
import WorkCard from './WorkCard/WorkCard'
import "./Main.css"
function Main ({ projects = [] }) {
  return (
    <main className='gallery'>
        {projects.map((project)=>(
          <WorkCard {...project} key={project.id} />
        ))}
    </main>
  )
}

export default Main