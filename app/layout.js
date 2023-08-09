import Navbar from '@components/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import localFont from '@next/font/local'

const Conthrax = localFont({
  src :[
    {
      path:'../public/assets/conthrax-cdnfonts/conthrax-sb.ttf',
      weight:'400'
    },
    {
      path:'../public/assets/conthrax-cdnfonts/conthrax-sb.ttf',
      weight:'700'
    }
  ],
  variable : '--font-Conthrax'
})

const Neue = localFont({
  src : '../public/assets/neue-machina-free-for-personal-use/Neue Machina - Free for Personal Use/NeueMachina-Regular.otf',
  variable : '--font-neue'
    
})
  const Grotesque = localFont({
    src : [
      {
        path : "../public/assets/Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Regular.ttf",
        weight : '400'
      },
      {
        path : "../public/assets/Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Bold.ttf",
        weight : '700'
      },
      {
        path : "../public/assets/Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Medium.ttf",
        weight : '500'
      }
    ]
    ,
    variable : '--font-grotesque'
  })
const ClashDisplay = localFont({
  src :[
    {
      path: '../public/assets/Clash_DIsplay/ClashDisplay-Regular.otf',
      weight:'400'
    },
    {
      path: '../public/assets/Clash_DIsplay/ClashDisplay-Bold.otf',
      weight:'700'
    },{
      path: '../public/assets/Clash_DIsplay/ClashDisplay-Medium.otf',
      weight:'500'
    },
    {
      path: '../public/assets/Clash_DIsplay/ClashDisplay-Semibold.otf',
      weight:'600'
    }

  ],
  variable : '--font-clash-display'
})



export const metadata = {
  title: 'B-Wallet',
  description: 'By Bankless DAO',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${Conthrax.variable} ${Neue.variable} ${ClashDisplay.variable} ${Grotesque.variable}` } lang="en">
      <body className="">
        {/* <Navbar/> */}
        {children}</body>
    </html>
  )
}
