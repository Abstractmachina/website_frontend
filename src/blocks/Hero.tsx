import { Media, Page } from '@/types/payload-types'
import React, { FC, ReactElement } from 'react'
import Image from 'next/image';

type HeroProps = Extract<Page['layout'], { blockType: 'hero' }>

// type BackgroundImage = Extract<Page['layout']>

const Hero: FC<HeroProps> = ({ heading, text, backgroundImage }) => {
    
    const imgProps = backgroundImage as Media;

    const bgImageUrl = `bg-[url('${process.env.NEXT_PUBLIC_BACKEND_URL}${imgProps.url})]`;

    console.log(bgImageUrl);
  return (
      <div className=' relative h-80 overflow-hidden'>
          <h2 className='m-8 text-white text-4xl'>{heading}</h2>
          <p className='mx-8 text-white text-xs'>{text}</p>
          <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imgProps.url}`} alt={imgProps.alt}
          width={imgProps.width ? imgProps.width : 0}
              height={imgProps.height ? imgProps.height : 0}
          className='w-full absolute top-0 -z-10'/>
    </div>
  )
}

export default Hero