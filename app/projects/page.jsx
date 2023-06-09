'use client'
import ProjectCard from '@components/ProjectCard'
import React,{useEffect,useState} from 'react'
const ProjectLists = ({data,handleLink}) =>{
    return (
        <div className='promp_layout project_contain'>
            {data.map(project =>(
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))

            }
        </div>
    )
}


export default function page() {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        const fetchProjects = async () =>{
            const res = await fetch('/api/project')
            const data = await res.json()

            setProjects(data)
        }

        fetchProjects()
    },[])
  return (
    <section className='w-full'>
        <ProjectLists
            data={projects} 
            handleLink={()=>{}}
        />
    </section>

  )
  

}

