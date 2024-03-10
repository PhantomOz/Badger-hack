'use client'

import { useState } from 'react'

import { NFTSelection } from './CreateNFT'
import { TokenSelection } from './CreateToken'
import { NFTOverview } from './NFTOverview'
import { TokenOverview } from './TokenOverview'

export function OverviewComponent() {
  const [contractCreated, setContractCreated] = useState(false)

  return (
    <div className="mt-14 rounded-lg  border-dashed border-gray-200 p-8  dark:border-gray-700">
      {/* <ConnectButton /> */}
      {!contractCreated ? (
        <div>
          <h2 className="text-center text-2xl font-bold lg:text-3xl">
            You have not created any projects
          </h2>

          <p className="mt-2 text-center text-lg leading-7">
            Pick from one one of our available options
          </p>

          <div className="mt-12 flex flex-wrap justify-center">
            <TokenSelection />
            <NFTSelection />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold lg:text-3xl">Overview</h2>

          <div className="mt-8 flex justify-center">
            <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gray-800 p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Contracts Deployed
              </h5>
              <p className="text-lg font-normal text-gray-100">2</p>
            </div>
            <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gray-800 p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Tokens Deployed</h5>
              <p className="text-lg font-normal text-gray-100">1</p>
            </div>
            <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gray-800 p-6 shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">NFTs Deployed</h5>
              <p className="text-lg font-normal text-gray-100">1</p>
            </div>
          </div>

          <TokenOverview />

          <NFTOverview />
        </div>
      )}
    </div>
  )
}
