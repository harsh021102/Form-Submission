import React from 'react'

function TableHeading({heading}) {
  return (
    <div className='text-center font-semi bold text-sm rounded-md shadow-md bg-red-500 text-white border-2 border-slate-300'>{heading}</div>
  )
}

export default TableHeading