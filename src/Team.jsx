import React from 'react'

function Team({content,type}) {
  return (
    <div className='text-center py-8 text-sm rounded-md shadow-md text-black bg-blue-100'>{content}({type})</div>
  )
}

export default Team