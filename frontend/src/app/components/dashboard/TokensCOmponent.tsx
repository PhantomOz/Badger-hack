import { TokenOverview } from './TokenOverview'

export function TokensComponent() {
  return (
    <div className="mt-14 rounded-lg  border-dashed border-gray-200 p-4 dark:border-gray-700">
      <div className="mb-4">
        <TokenOverview />
      </div>
    </div>
  )
}
