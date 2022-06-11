import React from 'react'

function Header({page}) {
  let text = page
  const head =()=>{
    if(page===1)
    {
      text="Type"
      return <h1 className='text-2xl font-semibold px-12 text-white'>{text} {page}/4</h1>
    }
    else if(page===2)
    {
      text="General"
      return <h1 className='text-2xl font-semibold px-12 text-white'>{text} {page}/4</h1>
    }
    else if(page===3)
    {
      text="Team"
      return <h1 className='text-2xl font-semibold px-12 text-white'>{text} {page}/4</h1>
    }
    else if(page===4)
    {
      return <h1 className='text-2xl font-semibold px-12 text-white'>Table</h1>
    }
  }
  return (
    <div>
       <div className='w-full bg-blue-600 shadow-lg h-16 flex items-center'>
            {head()}
        </div>
    </div>
  )
}

export default Header