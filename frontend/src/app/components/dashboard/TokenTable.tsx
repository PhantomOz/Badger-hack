'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import FactoryContract from '@inkathon/contracts/typed-contracts/contracts/factory_contract'
import TokenContract from '@inkathon/contracts/typed-contracts/contracts/my_psp'
import { AccountId } from '@inkathon/contracts/typed-contracts/types-arguments/factory_contract'
import {
  contractQuery,
  decodeOutput,
  useInkathon,
  useRegisteredContract,
  useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'
import toast from 'react-hot-toast'

export function TokenTable() {
  const { api, activeAccount, activeSigner } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.Factory)
  const { typedContract } = useRegisteredTypedContract(ContractIds.Factory, FactoryContract)
  const [tokenIds, setTokenIds] = useState<any>()
  const tokenAddress = useRegisteredTypedContract(ContractIds.Psp22, TokenContract)
  const token = useRegisteredContract(ContractIds.Psp22)
  const [tokenMetadata, setTokenMetadata] = useState<any[]>([])

  const fetchOwnerTokenIds = async () => {
    if (!contract || !typedContract || !api) return

    try {
      const result = await contractQuery(api, '', contract, 'get_owner_token_ids', {}, [
        activeAccount?.address,
      ])
      const { output, isError, decodedOutput } = decodeOutput(
        result,
        contract,
        'get_owner_token_ids',
      )
      if (isError) throw new Error(decodedOutput)

      // Alternatively: Fetch it with typed contract instance
      const typedResult = await typedContract.query.getOwnerTokenIds(activeAccount?.address || '')
      console.log('Result from typed contract: ', typedResult)
      setTokenIds(typedResult?.value.ok)
      getAllContractDetails(typedResult?.value.ok)
      console.log(tokenIds)
    } catch (e) {
      console.error(e)
      toast.error('Error while fetching token ids. Try again…')
    }
  }

  const fetchTokenById = async (tokenId: any): Promise<AccountId | undefined | null> => {
    if (!contract || !typedContract || !api) {
      return
    }
    try {
      const result = await contractQuery(api, '', contract, 'get_token_by_id', {}, [tokenId])
      const { output, isError, decodedOutput } = decodeOutput(result, contract, 'get_token_by_id')
      if (isError) throw new Error(decodedOutput)
      // Alternatively: Fetch it with typed contract instance
      const typedResult = await typedContract.query.getTokenById(tokenId)
      console.log('Result from fetchTokenById contract: ', typedResult)
      return typedResult.value.ok
    } catch (e) {
      console.error(e)
      toast.error('Error while fetchingTokenById. Try again…')
    }
  }

  const getAllContractDetails = async (tokenIdArray: any): Promise<AccountId[]> => {
    const accountIds: AccountId[] = []
    for (let index = 0; index < tokenIdArray?.length; index++) {
      const accountId = (await fetchTokenById(tokenIdArray[index])) as AccountId
      accountIds.push(accountId)
    }
    return accountIds
  }

  const getContractMetadata = async () => {
    const addresses = await getAllContractDetails([0, 1])
    console.log(addresses)
    const metadatas = []
    for (const address of addresses) {
      console.log(address)
      console.log(token.contract)
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
      console.log(resultName, resultSymbol, resultSupply, resultDecimal)
      metadatas.push({
        name: resultName?.value.ok,
        symbol: resultSymbol?.value.ok,
        address,
        totalSupply: resultSupply?.value.ok,
      })
    }
    setTokenMetadata(metadatas)
    console.log(metadatas)
  }

  useEffect(() => {
    if (contract && typedContract && api) {
      fetchOwnerTokenIds()
      console.log(tokenIds)
      getContractMetadata()
    }
  }, [typedContract, contract, typedContract, api])

  const router = useRouter()
  return (
    <div className="relative overflow-x-auto rounded">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th scope="col" className="px-6 py-3 ">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Total Supply
            </th>
          </tr>
        </thead>
        <tbody>
          {tokenMetadata?.map((data, index) => (
            <tr key={index} className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="cursor-pointer whitespace-nowrap px-6 py-4 font-medium text-blue-600 "
                onClick={() => {
                  router.push(`/dashboard/contracts/${data?.address}`)
                }}
              >
                {data?.name}
              </th>
              <td className="px-6 py-4">{data?.symbol}</td>
              <td className="px-6 py-4">
                {String(data?.address).substring(0, 8)}...
                {String(data?.address).substring(
                  String(data?.address).length - 9,
                  String(data?.address).length - 1,
                )}
              </td>
              <td className="px-6 py-4">{data?.totalSupply?.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
