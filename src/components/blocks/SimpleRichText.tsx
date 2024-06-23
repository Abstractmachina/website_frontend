import RichTextParser from '@/utils/RichTextParser'
import React from 'react'

function SimpleRichText({body} : {body:any}) {
  return (
      <div className='w-full'>
          <RichTextParser content = {body}/>
    </div>
  )
}

export default SimpleRichText