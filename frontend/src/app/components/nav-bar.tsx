'use client'

import { Gluten } from 'next/font/google'
import Link from 'next/link'

// import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ConnectButton } from '@/components/web3/connect-button'

export const gluten = Gluten({ subsets: ['latin'] })

export const NavBar = (props: { isDashboard?: boolean }) => {
  const { isDashboard } = props
  return (
    <>
      <nav className="fixed top-0 z-50 w-full   bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-full px-4 sm:w-11/12 md:w-10/12">
          <div className="flex h-24 items-center justify-between">
            <Link
              href="/"
              className={`text-3xl font-semibold text-gray-100 lg:text-5xl ${gluten.className}`}
            >
              Badger
            </Link>
            <div className="hidden space-x-6 text-gray-100 lg:flex"></div>
            {/* <ConnectButton /> */}
            {isDashboard ? (
              <ConnectButton />
            ) : (
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
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
