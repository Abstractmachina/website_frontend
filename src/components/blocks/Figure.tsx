import { Media, Project } from '@/types/payload-types';
import React, { FC } from 'react'
import Image from 'next/image';


type figureProps = Extract<Project['layout'], { blockType: 'hero' }>;

const Figure: FC<figureProps> = ({ description, image }) => {
    
    const img = image as Media;

  return (
      <div className='relative mb-8'>
      <Image
        className=''
          src={img.url!}
          alt={img.alt}
          width={img.width ? img.width : 0}
          height={img.height ? img.height : 0}
        // fill
        // layout='responsive'
          style={{objectFit:"cover"}}
        />
          <div className='text-sm mt-1 mb-4'>Figure: <span className='italic'>{description ? description : img.alt}</span></div>
    </div>
  )
}

export default Figure