'use client'

import { Gluten } from 'next/font/google'
import Image from 'next/image'
import { FC } from 'react'

import aleph from '../../../public/images/Aleph_zero.svg'
import polkadot from '../../../public/images/Polkadot_long.svg'
import ink from '../../../public/images/ink.svg'

export const gluten = Gluten({ subsets: ['latin'] })

export const Partners: FC = () => {
  return (
    <>
      <section className="mt-12  w-[80%] lg:w-[60%]">
        <div className="mx-auto rounded-3xl bg-gray-100/20 bg-opacity-30 px-2 py-3 backdrop-blur-lg backdrop-filter md:px-3 lg:px-6 lg:py-6">
          <div className="mx-auto flex w-10/12 flex-wrap justify-between">
            {/* <Image src={acurast} alt="" width={150} /> */}
            <Image src={ink} alt="" width={80} className="w-[50px] lg:w-[80px]" />
            <Image src={polkadot} alt="" width={100} className="w-[70px] lg:w-[100px]" />
            <Image src={aleph} alt="" width={150} className="w-[100px] lg:w-[150px]" />
          </div>
        </div>
      </section>
    </>
  )
}
