import React from 'react'
import Image from 'next/image'

export default function ProjectCard({project}) {
  return (
    <div>
        <Image 
            src={project.creator.image}
            alt='owner'
            width={40}
            height={40}
        />
    </div>
  )
}
