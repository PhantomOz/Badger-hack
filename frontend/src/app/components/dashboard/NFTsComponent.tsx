import { NFTOverview } from './NFTOverview'

export function NFTsComponent() {
  return (
    <div className="mt-14 rounded-lg p-4 dark:border-gray-700">
      <div className="mb-4">
        <NFTOverview />
      </div>
    </div>
  )
}
