import { blocks } from '@/blocks/blockList';
import { Block } from 'payload/types';
import React, { FC, ReactElement } from 'react';
// import {Block} from 'payload'



type RenderBlocksProps = {
    layout: Block[];
} 

const RenderBlocks : FC<RenderBlocksProps> = ({layout}) : ReactElement => {
  return (
      <div>
          render block
    </div>
  )
}

export default RenderBlocks