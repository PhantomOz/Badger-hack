import { CreateNFT } from './CreateNFT'
import { NftTable } from './NftTable'

export function NFTOverview() {
  return (
    <div className="mt-20">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            NFT Contracts
          </h3>
          <small>
            The list of NFT instances that you have deployed with badger across the Polkadot
            network.
          </small>
        </div>
        <CreateNFT />
      </div>
      <NftTable />
    </div>
  )
}
