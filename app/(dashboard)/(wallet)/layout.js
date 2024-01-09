import Tokens from '@/components/layout/dashboard/home/tokens/Tokens'
import Portfolio from '@/components/portfolio/Portfolio'
import React from 'react'

function layout({children}) {
  return (
    <div className='flex flex-row w-[100%]'>
        <div className='flex flex-col w-[70%]'>
          <Portfolio />
          <Tokens />
        </div>
        {children}
    </div>
  )
}

export default layout