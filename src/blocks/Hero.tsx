import React, { FC, ReactElement } from 'react'

type HeroProps = {
    heading: string;
    text: string;
    backgroundImage: any; // TODO: define type
}

const Hero: FC<HeroProps> = ({ heading, text, backgroundImage}) : ReactElement => {
  return (
      <div>
          <h2>{heading}</h2>
          <p>{ text }</p>
    </div>
  )
}

export default Hero