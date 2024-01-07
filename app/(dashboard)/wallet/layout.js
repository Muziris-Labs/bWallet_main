import Portfolio from '@/components/portfolio/Portfolio'
import React from 'react'

function layout({children}) {
  return (
    <div className='flex flex-row w-[100%]'>
        <Portfolio />
        {children}
    </div>
  )
}

export default layout