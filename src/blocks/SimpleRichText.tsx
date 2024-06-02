import RichTextParser from '@/utils/RichTextParser'
import React from 'react'

function SimpleRichText({body} : {body:any}) {
  return (
      <div>
          <RichTextParser content = {body}/>
    </div>
  )
}

export default SimpleRichText