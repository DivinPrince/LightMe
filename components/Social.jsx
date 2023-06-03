import Image from 'next/image'
import React from 'react'

export default function social(props) {
    return (
        <a href="" className={props.index % 2 ? 'icon': 'icon grid1' }>
            <Image
                src={props.img}
                width={50}
                height={50}
                alt="" 
            />
        </a>
    )
}
