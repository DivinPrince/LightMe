"use client"
import menu from '../public/assets/icons/menu.svg'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/assets/images/dpcode.jpg'
import { AiOutlineUpload, AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Provider from './Provider'

export default function Nav() {
    const { data: session } = useSession();
    // const session = {
    //     user: {
    //         email: 'dpcode36@gmail.com',
    //         name: 'dpcodes',
    //         image: img
    //     }
    // }
    const [islogedIN, setIslogedIN] = useState(true)
    const [provids, setProvids] = useState(null)
    const [toogleDrop, setToogleDrop] = useState(false)
    const [toogleDropin, setToogleDropIn] = useState(false)
    useEffect(() => { 
        const setProviders = async () => {
            const response = await getProviders()
            setProvids(response)
        }
        setProviders()
    }, [])
    return (
        <nav className='flex-between items-center w-full mb-16 pt-3'>
            {/* <link rel="stylesheet" href="" /> */}
            <Link href='/' className='logo'>
                <h1>Light Me.</h1>
            </Link>
            {/* desk nav */}
            <div className='desktop_nav relative'>
                {session?.user ? (
                    <div className='sub_nav md:gap-5'>
                        <Link href='/upload'>
                            <AiOutlineUpload size='30px' fill='white' strokeWidth='10px' />
                        </Link>
                        <Link href='/profile'>
                            <Image
                                src={session?.user.image}
                                alt='profile'
                                width={47}
                                height={47}
                                className='profile'
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        <button
                            type='button'
                            onClick={() => setToogleDropIn((prev) => !prev)}
                            className='outline_btn btn'
                        >
                            Sign In
                        </button>
                        {provids && toogleDropin && (
                            <>
                                <div className='dropdown'>
                                    <h1 className='text-center'>Sign In with</h1>
                                    {provids &&
                                        Object.values(provids).map(provider => (
                                            <div
                                            key={provider.id}
                                                className='dropdown_link social_icon'
                                                onClick={() => signIn(provider.id)}
                                            >
                                                {provider.id == 'google' ? (
                                                    <AiFillGoogleCircle size={23} />
                                                ) : (
                                                    <AiFillGithub size={23}/>
                                                )
                                                    
                                                }
                                                <p>{provider.id}</p>
                                            </div>

                                        ))
                                    }
                                </div>
                            </>
                        )

                        }
                    </>
                )
                }
            </div>
            <div className="mobile_nav sm:hidden flex relative">
                {session?.user ? (
                    <>
                        <Image
                            src={menu}
                            alt='menu'
                            width={27}
                            height={27}
                            className='cursor-pointer'
                            onClick={() => {
                                setToogleDrop((prev) => !prev)
                            }}
                        />
                        {toogleDrop && (
                            <div className='dropdown'>
                                <Link
                                    href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToogleDrop(false)}

                                >
                                    My Profile
                                </Link>
                                <Link
                                    href='/upload'
                                    className='dropdown_link'
                                    onClick={() => setToogleDrop(false)}

                                >
                                    Upload Project
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <button
                            type='button'
                            onClick={() => setToogleDropIn((prev) => !prev)}
                            className='outline_btn'
                        >
                            Sign In
                        </button>
                        {provids && toogleDropin && (
                            <>
                                <div className='dropdown'>
                                    <h1 className='text-center'>Sign In with</h1>
                                    {provids &&
                                        Object.values(provids).map(provider => (
                                            <div
                                                key={provider.id}
                                                className='dropdown_link social_icon'
                                                onClick={() => signIn(provider.id)}
                                            >
                                                {provider.id == 'google' ? (
                                                    <AiFillGoogleCircle size={23} />
                                                ) : (
                                                    <AiFillGithub size={23}/>
                                                )
                                                    
                                                }
                                                <p>{provider.id}</p>
                                            </div>

                                        ))
                                    }
                                </div>
                            </>
                        )

                        }
                    </>
                )

                }
            </div>

        </nav >
    )
}
