import React from 'react'
import "./WorkCard.css"
function WorkCard({id, name, img, description}) {
  return (
    <div className='galleryelement' id={id}>
        <a href="#">
            {/* <div className='description'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div> */}
            <img src={img} alt={name} />
        </a>
    </div>
  )
}

export default WorkCard