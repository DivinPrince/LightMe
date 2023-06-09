import Link from 'next/link'
// import Image from 'next/image'
import img from '../public/assets/images/dpcode.jpg'
import React from 'react'

import Social from '@components/Social'
import socials from '@components/constants/socials'

import { useSession } from 'next-auth/react'

export default function page() {
  let SocialLinks = socials.map(social => (
    <Social
      key={social.img}
      index={socials.indexOf(social)}
      {...social}
    />
  ))
  // const { data: session } = useSession();
  const session = {
    user: {
      email: 'dpcode36@gmail.com',
      name: 'dpcodes',
      image: img
    }
  }
  return (
    <section className='w-full flex-col flex-center'>
      <h1 className='head_text'>Discover & Share</h1>
      <br className='max-md:hidden' />
      <span className='head_text orange_gradient text-center'>Projects With Friends</span>
      <p className='desc text-center'>
        Light Me is open_source website that will help you light your Projects
        to help you rise.
      </p>
      <div className='flex mt-5 gap-4'>

        {session.user ? (
          <>
            <Link href="/upload">
              <button className='glassmorphism project_nav'>
                upload →
              </button>
            </Link>
            <Link href="/projects">
              <button className='glassmorphism project_nav'>
                view projects →
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="">
              <button className='glassmorphism project_nav'>
                view projects
              </button>
            </Link>
          </>
        )

        }
      </div>
      <div className="icons">
        {SocialLinks}
      </div>
    </section>
  )
}
