import Hero from '@/blocks/Hero';
import RecentBlogPostsBlock from '@/blocks/RecentBlogPosts';
import SimpleRichText from '@/blocks/SimpleRichText';
import TwoColumn from '@/blocks/TwoColumn';
import { blocks } from '@/blocks/blockList';
// import { Block } from 'payload/types';
import React, { FC, ReactElement } from 'react';
// import {Block} from 'payload'

// type ReusableContentBlockType = Extract<Page['layout'][0], { blockType: 'reusableContentBlock' }>

const blockComponents : { [key: string]: any } = {
  hero: Hero,
  twoColumn: TwoColumn,
  simpleRichText: SimpleRichText,
  recentBlogPosts: RecentBlogPostsBlock,
}

type RenderBlocksProps = {
  layout?: any;
}

const RenderBlocks: FC<RenderBlocksProps> = ({ layout}) => {
  
  const hasBlocks = layout && Array.isArray(layout) && layout.length > 0
  
  if (hasBlocks) {

    return (
      <div>
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