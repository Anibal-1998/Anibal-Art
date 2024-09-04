import React, {useState} from 'react'
import projects from "../../../data/projects.json"
import Main from '../Main';
function WorkCardContainer(){
    const [project, setProject] = useState(projects);
    
  return (
    <Main projects={project}/>
  )
}

export default WorkCardContainer