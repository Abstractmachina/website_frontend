import { Footer } from '@/types/payload-types'
import Link from 'next/link'
import React, { FC } from 'react'


type FooterProps = {
    content? : Footer
}

const FooterBlock: FC<FooterProps> = ({ content }) => {

  return (
      <div className='w-screen bg-pink-100 py-4 px-6 flex justify-between bottom-0'>
          {content?.bottomNavLinks?.map(li => {
              return (
                  <Link key={li.id} href={li.link!}>{li.label}</Link>
              )
          })}
    </div>
  )
}

export default FooterBlock;