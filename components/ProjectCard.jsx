import React from 'react'
import Image from 'next/image'
import { comment_ico,visit_ico,github_ico } from '@public/assets'

export default function ProjectCard({ project }) {
  return (
    <div class="project_card">
      <div class="social">
        <a href={project.url}>
          <Image
           src={visit_ico} 
           width={0}
           height={0}
           alt="" 
          />
        </a>
        <a href="">
          <Image
           src={github_ico} 
           alt="" 
           width={0}
           height={0}
          />
        </a>
      </div>
      <div class="project_img">
        <Image
         src={project.image} 
         alt="" 
         width={0}
         height={0}
         className='profile'
        />
      </div>
      <div class="project_details">
        <div class="owner_img">
          <Image
           src={project.creator.image} 
           alt="" 
           width={0}
           height={0}
          />
        </div>
        <div class="project_contents">
          <h1>{project.name}</h1>
          <p>{project.creator.email}</p>
        </div>
      </div>
    </div>
  )
}
