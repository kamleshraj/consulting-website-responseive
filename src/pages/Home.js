import React,{useEffect} from 'react'
import { useGlobalContext } from '../contextAPI/context';
import HeroSection from './../components/heroSection';
import Contactus from './Contactus';
import Services from './Services';

const Home=()=> {
  const { updateHome } = useGlobalContext()
  useEffect(() => updateHome(), [])
  // useMemo(()=>updateHome(),[])
  return (
    <>
      <HeroSection />
      <Services />
      <Contactus/>
    </>
  )
}

export default Home
