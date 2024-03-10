import { useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import FactoryContract from '@inkathon/contracts/typed-contracts/contracts/factory_contract'
import { AccountId } from '@inkathon/contracts/typed-contracts/types-arguments/factory_contract'
import {
  useInkathon,
  useRegisteredContract,
  useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'
import toast from 'react-hot-toast'

const useGetAllTokens = () => {
  const { api, activeAccount, activeSigner } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.Factory)
  const { typedContract } = useRegisteredTypedContract(ContractIds.Factory, FactoryContract)
  const [tokenIds, setTokenIds] = useState<any>()
  const [accountIds, setAccountIds] = useState<any>()

  const fetchOwnerTokenIds = async () => {
    if (!contract || !typedContract || !api) return

    try {
      const typedResult = await typedContract.query.getOwnerTokenIds(activeAccount?.address || '')
      console.log('Result from typed contract: ', typedResult)
      setTokenIds(typedResult?.value.ok)
      getAllContractDetails(typedResult?.value.ok)
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
      const typedResult = await typedContract.query.getTokenById(tokenId)
      console.log('Result from fetchTokenById contract: ', typedResult)
      return typedResult.value.ok
    } catch (e) {
      console.error(e)
      toast.error('Error while fetchingTokenById. Try again…')
    }
  }

  const getAllContractDetails = async (tokenIdArray: any) => {
    const allAccountIds = []
    for (let index = 0; index < tokenIdArray.length; index++) {
      const accountId = await fetchTokenById(tokenIdArray[index])
      if (accountId) {
        allAccountIds.push(accountId)
      }
    }
    setAccountIds(allAccountIds)
  }

  useEffect(() => {
    fetchOwnerTokenIds()
  }, [contract, api, typedContract])

  return accountIds
}

export default useGetAllTokens
