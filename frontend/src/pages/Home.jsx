import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import LatestCollection from '../components/LatestCollection'
import Sales from '../components/Sales'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetter'
function Home() {
  return (
    <div>
     
        <Hero />
        <LatestCollection />
        <BestSeller />
        <Sales />
        <OurPolicy />
        <NewsLetterBox />
        
    </div>
  )
}

export default Home