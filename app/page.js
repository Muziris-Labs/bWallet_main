
import BCard from '@components/Cards/B-Card/B-Card'
import { PriceCard } from '@components/Cards/PriceCard'
import { Waitlist } from '@components/Cards/SignInCard/Waitlist'
import { Hero } from '@components/Hero'
import Image from 'next/image'
import styles from '../styles/hero.module.css'

export default function Home() {
  

  return (<>


<div style={{
    backgroundImage:'url(/assets/Grid.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100vw',
  backgroundPositionY: '20vh',
   }} className='min-h-screen w-screen'>
  <div className={`${styles.container} ' w-screen h-screen flex items-center justify-center'`}
  >
    <Hero />
  </div>

    <div className="scale-[0.6] md:scale-100 md:mt-12 flex items-center justify-center">

<BCard/>
</div>
<div className={`${styles.scrolling_text} flex mx-auto items-center justify-center my-6 md:my-12 `}>
  {/* <marquee loop="-1" scrollamount="5"> */}
<div className='flex items-center gap-12'>

  <PriceCard/>
  <PriceCard/>
  <PriceCard/>

</div>
  {/* </marquee> */}
</div>
<div className='my-6 md:my-24 flex justify-center'>
  <Waitlist/>
</div>
<div className='text-base  w-screen bottom-0 bg-[#272727] text-center py-2 text-white font-prm md:text-xl'>

Built with love for the web3 community, by BanklessDAO Community
</div>
   </div>
   </>
  )
}
