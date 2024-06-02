import Hero from '@/blocks/Hero';
import TwoColumn from '@/blocks/TwoColumn';
import { blocks } from '@/blocks/blockList';
// import { Block } from 'payload/types';
import React, { FC, ReactElement } from 'react';
// import {Block} from 'payload'

type ReusableContentBlockType = Extract<Page['layout'][0], { blockType: 'reusableContentBlock' }>

const blockComponents = {
  hero: Hero,
  twoColumn: TwoColumn,
}

export type BlocksProp = ReusableContent['layout'][0] | ReusableContentBlockType | RelatedPostsBlock

type Props = {
  blocks: BlocksProp[]
  disableOuterSpacing?: true
  hero?: Page['hero']
  disableGutter?: boolean
  disableGrid?: boolean
  heroTheme?: Page['hero']['theme']
  layout?: 'page' | 'post'
  customId?: string | null
}

type RenderBlocksProps = {
  layout?: any;
}

const RenderBlocks : FC<RenderBlocksProps> = props => {
  
  return (
    <div>rendered blocks</div>
  )
  // return (
  //     <div>
  //     {
  //       layout.map((block, i) => {
  //         const thisBlock = blocks[block.blockType];
  //         if (thisBlock) {
  //           return <thisBlock key={i} {..block} />
  //         }
  //       }) 
  //       }
  //   </div>
  // );
}

export default RenderBlocks;