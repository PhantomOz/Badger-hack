'use client'

import { useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import TokenContract from '@inkathon/contracts/typed-contracts/contracts/my_psp'
import { AccountId } from '@inkathon/contracts/typed-contracts/types-arguments/factory_contract'
import { useInkathon, useRegisteredTypedContract } from '@scio-labs/use-inkathon'

import ContractDetails from '@/app/components/dashboard/contracts/ContractInfo'
import { ContractOverview } from '@/app/components/dashboard/contracts/ContractOverview'
import { Explorer } from '@/app/components/dashboard/contracts/Explorer'
import { NavBar } from '@/app/components/nav-bar'

// import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';

const SingleContract = ({ params }: { params: { id: string } }) => {
  const [tab, setTab] = useState(0)
  const { api, activeAccount, activeSigner } = useInkathon()
  const tokenAddress = useRegisteredTypedContract(ContractIds.Psp22, TokenContract)
  const [tokenMedata, setTokenMetadata] = useState<any>({})

  useEffect(() => {
    console.log(params)
    const getContractMetadata = async (address: string) => {
      if (api && tokenAddress.typedContract) {
        console.log(address)
        if (!api) return
        const resultName = await tokenAddress.typedContract
          ?.withAddress(`${address}`)
          .query.tokenName()
        const resultSymbol = await tokenAddress.typedContract
          ?.withAddress(`${address}`)
          .query.tokenSymbol()
        const resultDecimal = await tokenAddress.typedContract
          ?.withAddress(`${address}`)
          .query.tokenDecimals()
        const resultSupply = await tokenAddress.typedContract
          ?.withAddress(`${address}`)
          .query.totalSupply()
        const resultUserBalance = await tokenAddress.typedContract
          ?.withAddress(`${address}`)
          .query.balanceOf(activeAccount?.address as AccountId)
        console.log(resultName, resultSymbol, resultSupply, resultDecimal, resultUserBalance)
        setTokenMetadata({
          name: resultName?.value.ok,
          symbol: resultSymbol?.value.ok,
          supply: resultSupply?.value.ok,
          decimal: resultDecimal?.value.ok,
          address,
          userBalance: resultUserBalance?.value.ok,
        })
        console.log({
          name: resultName?.value.ok,
          symbol: resultSymbol?.value.ok,
          supply: resultSupply?.value.ok,
          decimal: resultDecimal?.value.ok,
          address: address,
          bal: resultUserBalance?.value.ok,
        })
      }
    }
    getContractMetadata(params.id)
  }, [api, tokenAddress.typedContract])

  return (
    <>
      <NavBar isDashboard={true} />
      <div className="relative mt-24">
        <nav className=" fixed left-0 right-0 mx-auto mb-4 w-full border bg-background">
          <div className="container px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <div className="flex">
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold no-underline  focus:outline-none ${tab === 0 ? 'bg-white text-gray-900' : 'text-white'}`}
                    onClick={() => {
                      setTab(0)
                    }}
                  >
                    Overview
                  </button>
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  no-underline  focus:outline-none ${tab === 1 ? 'bg-white text-gray-900 ' : 'text-white'}`}
                    // className="mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  text-white  no-underline hover:text-white focus:outline-none active:shadow-none"
                    onClick={() => {
                      setTab(1)
                    }}
                  >
                    Events
                  </button>
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold no-underline  focus:outline-none ${tab === 2 ? 'bg-white text-gray-900' : 'text-white'}`}
                    // className="mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  text-white  no-underline hover:text-white focus:outline-none active:shadow-none"
                    onClick={() => {
                      setTab(2)
                    }}
                  >
                    Permissions
                  </button>
                  <button
                    className={`mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold no-underline  focus:outline-none ${tab === 3 ? 'bg-white text-gray-900' : 'text-white'}`}
                    // className="mr-2 rounded border px-4 py-2 font-sans text-sm font-semibold  text-white  no-underline hover:text-white focus:outline-none active:shadow-none"
                    onClick={() => {
                      setTab(3)
                    }}
                  >
                    Explorer
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ms-3 flex items-center">
                  <div>
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      {/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <ContractDetails
          name={tokenMedata?.name}
          description={tokenMedata?.description}
          address={tokenMedata?.address}
        />

        <div className="p-4 sm:container sm:mx-auto">
          <div>
            {tab == 0 ? (
              <ContractOverview
                supply={tokenMedata?.supply?.toString()}
                symbol={tokenMedata?.symbol}
                decimal={Number(tokenMedata?.decimal)}
                userBalance={Number(tokenMedata?.userBalance)}
              />
            ) : (
              ''
            )}
            {tab == 1 ? (
              <div className="mt-2">
                <div className="flex justify-between">
                  <h2 className="mb-4 text-2xl font-bold">Events</h2>
                  <p>View all</p>
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
                        <th
                          scope="row"
                          className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium"
                        >
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
            ) : (
              ''
            )}
            {tab == 2 ? (
              <div className="mt-2">
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
                        <td
                          scope="col"
                          className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium"
                        >
                          0xe2ac869...02254E
                        </td>
                        <td scope="col" className="px-6 py-4">
                          <div className="flex">
                            <div className="mr-2 w-fit rounded border border-gray-500 px-2 py-1 font-sans text-xs font-semibold  text-gray-400 no-underline focus:outline-none">
                              Member
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
            ) : (
              ''
            )}
            {tab == 3 ? <Explorer /> : ''}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleContract
