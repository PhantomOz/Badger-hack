'use client'

import { Gluten } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Variants, motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'

import { Button } from '@/components/ui/button'

import heroImg from '../../../public/images/caeser.svg'
import landingBg from '../../../public/images/landing-bg.png'

export const gluten = Gluten({ subsets: ['latin'] })

export const HomeTopSection: FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '5vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
      },
    },
  }
  // animation for the text and button to slide in
  const containerVaris = {
    hidden: {
      opacity: 0,
      x: '-5vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
      },
    },
  }

  const buttonVariants: Variants = {
    hover: {
      scale: 0.97,
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }

  return (
    <>
      <section className="container mt-10">
        <Image
          src={landingBg}
          alt=""
          width={100}
          height={100}
          className="absolute left-0 right-0 -z-50 h-full w-full"
        />
        <div className="mx-auto grid max-w-screen-2xl px-4 pb-8 pt-20 lg:grid-cols-12 lg:gap-8 lg:py-16 lg:pt-28 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            {' '}
            <Fade direction="left">
              <h1 className="mb-4 max-w-3xl text-4xl font-extrabold leading-none tracking-tight text-white lg:text-5xl xl:text-6xl">
                Spin up web3 projects fast on Polkadot with
                <br />
                <span
                  className={`text-4xl font-semibold text-primary  lg:text-5xl xl:text-6xl ${gluten.className}`}
                >
                  Badger
                </span>
              </h1>
            </Fade>
            <Fade direction="left">
              {' '}
              <p className="mb-6 max-w-2xl font-mono font-light text-gray-500 md:text-xl lg:mb-8 lg:text-2xl">
                A comprehensive web3 development platform that enables users to onboard with
                wallets, create and deploy smart contracts and enhance app scalability through
                robust infrastructure.
              </p>
            </Fade>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              className="mb-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0"
            >
              {/* <Button
                className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10 bg-gray-900  px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
                variant={'outline'}
              >
                Explore
              </Button> */}
              <Fade direction="left">
                {' '}
                <Link href="/dashboard">
                  <Button
                    variant={'default'}
                    // className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10 bg-primary px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
                    className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10  px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
                    translate="no"
                  >
                    Get Started
                  </Button>
                </Link>
                {/* <Button
                  variant={'default'}
                  // className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10 bg-primary px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
                  className="h-12 min-w-[4rem] gap-2 rounded-xl border border-white/10  px-4 py-3 font-bold text-foreground lg:min-w-[8rem] lg:rounded-2xl"
                  translate="no"
                >
                  Get Started
                </Button> */}
              </Fade>
            </motion.div>
          </div>
          <div className=" lg:col-span-5 lg:mt-0 lg:flex">
            {/* <img src={hero} alt="heroimage"/> */}
            <Fade direction="right">
              <Image
                src={heroImg}
                alt=""
                width={400}
                height={400}
                className="w-[100%] md:w-[60%] lg:h-[90%] lg:w-[90%]"
              />
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}
