import React, { FC, ReactElement } from 'react'


enum Direction {
    default, reverse
}

type TwoColumnProps = {
    heading: string;
    text: string;
    image: any; // TODO: define type
    direction: Direction;
}

const TwoColumn : FC<TwoColumnProps> = ({ heading, text, image, direction}) : ReactElement => {
  return (
      <div>
          <h2>{heading}</h2>
          <p>{ text}</p>
    </div>
  )
}

export default TwoColumn