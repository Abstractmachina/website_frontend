import Hero from '@/components/blocks/Hero';
import RecentBlogPostsBlock from '@/components/blocks/RecentBlogPosts';
import SimpleRichText from '@/components/blocks/SimpleRichText';
import TwoColumn from '@/components/blocks/TwoColumn';
// import { Block } from 'payload/types';
import React, { FC, ReactElement } from 'react';
import Figure from './blocks/Figure';
import VideoBlock from './blocks/VideoBlock';
// import {Block} from 'payload'

// type ReusableContentBlockType = Extract<Page['layout'][0], { blockType: 'reusableContentBlock' }>

const blockComponents : { [key: string]: any } = {
  hero: Hero,
  twoColumn: TwoColumn,
  simpleRichText: SimpleRichText,
  recentBlogPosts: RecentBlogPostsBlock,
  figure: Figure,
  videoBlock: VideoBlock
}

type RenderBlocksProps = {
  layout?: any;
}

const RenderBlocks: FC<RenderBlocksProps> = ({ layout}) => {
  
  const hasBlocks = layout && Array.isArray(layout) && layout.length > 0
  
  if (hasBlocks) {

    return (
      <div className='w-full'>
      {
        layout.map((block, i:number) => {
          const ThisBlock = blockComponents[block.blockType];
          if (ThisBlock) {
            return <ThisBlock key={i} {...block} />
          }
        }) 
        }
    </div>
  );
  }
  return null;
}

export default RenderBlocks;