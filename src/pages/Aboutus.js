import React, { useEffect } from 'react'
import HeroSection from '../components/heroSection'
import { useGlobalContext } from '../contextAPI/context'

const Aboutus = () => {
  const { updateAboutus  } = useGlobalContext()
  useEffect(() => {
    updateAboutus()
  })
  return (
    <>
      <HeroSection />
    </>
  )
}

export default Aboutus
