import React from 'react'
import PortfolioGraph from './PortfolioGraph'
import PortfolioAssets from './PortfolioAssets'


export default function Portfolio() {
  return (
    <div className='w-[70%] bg-background-black p-4 rounded-xl'>
        <PortfolioGraph />
        <PortfolioAssets />
    </div>
  )
}
