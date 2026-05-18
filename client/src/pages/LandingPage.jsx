import CallToActions from '@/components/langing/CallToActions'
import Feature from '@/components/langing/Feature'
import Footer from '@/components/langing/Footer'
import Hero from '@/components/langing/Hero'
import LaunchOffer from '@/components/langing/LaunchOffer'
import Pricing from '@/components/langing/Pricing'
import Testimonials from '@/components/langing/Testimonials'
import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const LandingPage = () => {
  return (
    <>
    <LaunchOffer/>
    <Hero/>
    <Feature/>
    <Testimonials/>
    <CallToActions/>
        <Pricing/>
    <Footer/>

    </>
  )
}

export default LandingPage
  {/* <img src="src\assets\logo.svg" alt="" /> */}