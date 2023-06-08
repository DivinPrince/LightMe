'use client'
import Form from '@components/Form'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function page() {
  const { data: session } = useSession()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [project, setProject] = useState({
    name: '',
    url: '',
    image: ''
  })
  const uplaodProject = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      const res = await fetch('../api/project/new',{
          method: 'POST',
          body: JSON.stringify({
            name: project.name,
            image: project.image,
            url: project.url,
            userId: session?.user.id
          })
        })
        if (res.ok) {
          console.log(res.ok);
          router.push('./')
        }
      } catch (error) {
        // console.log(res);
        console.log(error.message);
      }finally{
        setIsSubmitting(false)
      }
  }
  return (
    <Form
      type="upload"
      project={project}
      setProject={setProject}
      submitting={isSubmitting}
      submit={uplaodProject}
    />

  )
}
