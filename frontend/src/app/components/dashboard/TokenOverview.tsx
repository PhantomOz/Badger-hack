import { CreateToken } from './CreateToken'
import { TokenTable } from './TokenTable'

export function TokenOverview() {
  return (
    <div className="mt-20">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Token Contracts
          </h3>
          <small>
            The list of token instances that you have deployed with badger across the Polkadot
            network.
          </small>
        </div>

        <CreateToken />
      </div>
      <TokenTable />
    </div>
  )
}
