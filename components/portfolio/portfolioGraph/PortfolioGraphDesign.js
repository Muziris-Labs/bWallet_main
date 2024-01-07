import React from 'react'
import PortfolioGraphHeading from './PortfolioGraphHeading'
import PortfolioGraphChart from './PortfolioGraphChart'

function PortfolioGraphDesign() {
  return (
    <div className='flex flex-row'>
        <PortfolioGraphHeading amount={"$40,143.12"} percentage={3}/>

        <PortfolioGraphChart />
    </div>
  )
}

export default PortfolioGraphDesign