import { Media, Project } from '@/types/payload-types';
import React, { FC } from 'react'
import Image from 'next/image';


type figureProps = Extract<Project['layout'], { blockType: 'hero' }>;

const Figure: FC<figureProps> = ({ description, image }) => {
    
    const img = image as Media;

  return (
      <div className='relative w-full'>
          <Image
          src={img.url!}
          alt={img.alt}
          width={img.width ? img.width : 0}
          height={img.height ? img.height : 0}
        //   fill
        //   style={{objectFit:"cover"}}
        />
          <div className='text-sm'>Figure: <span className='italic'>{description ? description : img.alt}</span></div>
    </div>
  )
}

export default Figure