import React from 'react'
import "./WorkCard.css"
function WorkCard({id, name, img, description, href}) {
  return (
    <div className='galleryelement' id={id}>
        <a href={href} target='_blank'>
            <div className='description'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <img src={img} alt={name} />
        </a>
    </div>
  )
}

export default WorkCard