import axios from 'axios'
import { CldUploadButton } from 'next-cloudinary'
import React from 'react'

export default function Form({ type, project, setProject, submitting, submit }) {
    const upload = (e) => {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        console.log(e.target.files[0])
        reader.addEventListener("load", e => {
            let file = reader.result
            setProject({ ...project, image: file })
            console.log(project);
        })
    }
    // console.log(project);
    return (
        <div>
            <h1 className='head_text'> {type} Project</h1>
            {/* <div className='form_container'>
                <div className='form_group'>
                    <label htmlFor='name'>Project Name</label>
                    <input type='text' name='name' id='name' onChange={(e) => setProject(e.target.value)} value={project.name} />
                </div>
                <div className='form_group'>
                    <label htmlFor='description'>Project Description</label>
                    <textarea name='description' id='description' onChange={(e) => setProject(e.target.value)} value={project.description}></textarea>
                </div>
                <div className='form_group'>
                    <label htmlFor='url'>Project Url</label>
                    <input type='text' name='url' id='url' onChange={(e) => setProject(e.target.value)} value={project.url} />

                </div>
                <form 
                    action=""


                ></form>
            </div> */}
            <form
                className='glassmorphism'
                onSubmit={submit}
            >
                <input type="text"
                    value={project.name}
                    onChange={(e) => setProject({ ...project, name: e.target.value })}
                    className='form_input'
                    placeholder="Project Name"
                />
                <input type="text"
                    value={project.url}
                    onChange={(e) => { setProject({ ...project, url: e.target.value }) }}
                    className='form_input'
                    placeholder="Project Url"
                />
                <input type="button"
                    onClick={() => { document.getElementById('file').click() }}
                    className='form_input'
                    value="Project Image"
                />

                <button
                    type="submit"
                     className='black_btn'
                >
                    upload
                </button>
                <input type="file" id="file" onClick={(e) => upload(e)} />
            </form>

        </div>
    )
}