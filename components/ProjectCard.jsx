import React from 'react'
import Image from 'next/image'

export default function ProjectCard({project}) {
  return (
    <div className='prompt_card'>
        <Image 
            src={project.image}
            alt='owner'
            width={800}
            height={40}
        />
    </div>
  )
}
