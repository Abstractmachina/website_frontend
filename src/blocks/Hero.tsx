import { Page } from '@/types/payload-types'
import React, { FC, ReactElement } from 'react'

// type HeroProps = {
//     heading: string;
//     text: string;
//     backgroundImage: any; // TODO: define type
// }

type HeroProps = Extract<Page['layout'], {blockType: 'hero'}>

const Hero: FC<HeroProps> = ({ heading, text, backgroundImage}) => {
  return (
      <div>
          <h2>{heading}</h2>
          <p>{ text }</p>
    </div>
  )
}

export default Hero