'use client'

import { useEffect } from 'react'

import { useInkathon } from '@scio-labs/use-inkathon'
import { toast } from 'react-hot-toast'

import { HomeAcurastSection } from './components/home-page-acurast'
import { HomeMidSection } from './components/home-page-middle-section'
import { HomeTopSection } from './components/home-page-top-section'
import { NavBar } from './components/nav-bar'
import { Partners } from './components/partners'

export default function HomePage() {
  // Display `useInkathon` error messages (optional)
  const { error } = useInkathon()
  useEffect(() => {
    if (!error) return
    toast.error(error.message)
  }, [error])

  return (
    <>
      <NavBar />
      <div className="blob  relative flex grow flex-col items-center justify-center py-10">
        {/* Title */}
        {/* <HomePageTitle /> */}
        <HomeTopSection />

        <Partners />

        <HomeMidSection />

        <HomeAcurastSection />
      </div>
    </>
  )
}
