export function ContractOverview({
  symbol,
  supply,
  decimal,
  userBalance,
}: {
  symbol: string
  supply: string
  decimal: number
  userBalance: number
}) {
  return (
    <div className="mt-4">
      {/* <div className="mb-10 border-b border-gray-700 pb-6">
        <div className="mb-3 flex items-center">
          <h1 className="mr-2 text-2xl font-bold">JeffToken</h1>
          <button className="mr-2 rounded border px-2 py-1 font-sans text-sm font-semibold  text-white no-underline focus:outline-none">
            Aleph Zero
          </button>
        </div>
        <p className="mb-3 text-gray-300">Simple description</p>
        <div className="mr-2 w-fit cursor-pointer rounded border px-2 py-1 font-sans text-xs  font-semibold text-white no-underline focus:outline-none">
          <span className="flex items-center gap-1 text-xs">
            <HiDuplicate /> 1FRMM...hV24fg
          </span>
        </div>
      </div> */}

      <h2 className="text-2xl font-bold">Token Details</h2>

      <div className="mt-6 flex w-[70%]">
        <div className="mr-8 block w-full max-w-sm cursor-pointer rounded-lg border border-gray-600 p-5 shadow">
          <h5 className="mb-2 text-xl font-normal tracking-tight text-gray-900 dark:text-white">
            Total Supply
          </h5>
          <p className="text-xl font-normal text-gray-100">
            {supply} {symbol}
          </p>
        </div>
        <div className="mr-8 block w-full max-w-sm cursor-pointer rounded-lg border border-gray-600 p-5 shadow">
          <h5 className="mb-2 text-xl font-normal tracking-tight text-white">Owned by you</h5>
          <p className="text-xl font-normal text-gray-100">
            {userBalance} {symbol}
          </p>
        </div>
        <div className="mr-8 block w-full max-w-sm cursor-pointer rounded-lg border border-gray-600 p-5 shadow">
          <h5 className="mb-2 text-xl font-normal tracking-tight text-white">Decimals</h5>
          <p className="text-xl font-normal text-gray-100">{decimal}</p>
        </div>
      </div>
      {/* Events */}
      <div className="mt-12">
        <div className="flex justify-between">
          <h2 className="mb-4 text-2xl font-bold">Events</h2>
          <p
            className="cursor-pointer text-sm font-bold text-blue-500 underline"
            // onClick={() => {
            //   handleViewEvents
            // }}
          >
            View all
          </p>
        </div>
        <div className="relative overflow-x-auto rounded">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Transaction Hash
                </th>
                <th scope="col" className="px-6 py-3">
                  Events
                </th>
                <th scope="col" className="px-6 py-3">
                  Block Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <th scope="row" className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium">
                  JeffToken
                </th>
                <td scope="row" className="px-6 py-4">
                  Mint
                </td>
                <td scope="row" className="px-6 py-4">
                  1FRMM...hV24fg
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Permissions */}
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Permissions</h2>
        <div className="relative overflow-x-auto rounded">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Member
                </th>
                <th scope="col" className="px-6 py-3">
                  Roles
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <td scope="col" className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium">
                  0xe2ac869...02254E
                </td>
                <td scope="col" className="px-6 py-4">
                  <div className="flex">
                    <div className="mr-2 w-fit rounded border border-gray-500 px-2 py-1 font-sans text-xs font-semibold  text-gray-400 no-underline focus:outline-none">
                      Minter
                    </div>

                    <div className="mr-2 w-fit rounded border border-gray-500 px-2 py-1 font-sans text-xs font-semibold  text-gray-400 no-underline focus:outline-none">
                      Owner
                    </div>
                  </div>
                </td>
                <td scope="col" className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
