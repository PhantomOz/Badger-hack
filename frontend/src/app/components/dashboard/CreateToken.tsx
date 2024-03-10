'use client'

import { useEffect, useState } from 'react'

import { ContractIds } from '@/deployments/deployments'
import FactoryContract from '@inkathon/contracts/typed-contracts/contracts/factory_contract'
import {
  contractQuery,
  decodeOutput,
  useInkathon,
  useRegisteredContract,
  useRegisteredTypedContract,
} from '@scio-labs/use-inkathon'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PSP22Hash } from '@/config/constants'
import { contractTxWithToast } from '@/utils/contract-tx-with-toast'

export function TokenSelection() {
  const { api, activeAccount, activeSigner } = useInkathon()
  const { contract, address: contractAddress } = useRegisteredContract(ContractIds.Factory)
  const { typedContract } = useRegisteredTypedContract(ContractIds.Factory, FactoryContract)
  const [tokenIds, setTokenIds] = useState<any>()

  const [inputValues, setInputValues] = useState({
    name: '',
    symbol: '',
    decimal: 0,
    supply: 0,
    description: '',
  })

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setInputValues({ ...inputValues, [name]: value })
  }

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

      console.log(tokenIds)
    } catch (e) {
      console.error(e)
      toast.error('Error while fetching token ids. Try again…')
    } finally {
      fetchTokenById()
      // setFetchIsLoading(false)
    }
  }

  const fetchTokenById = async () => {
    if (!contract || !typedContract || !api) return

    try {
      const result = await contractQuery(api, '', contract, 'get_token_by_id', {}, [
        tokenIds?.length - 1,
      ])
      const { output, isError, decodedOutput } = decodeOutput(result, contract, 'get_token_by_id')
      if (isError) throw new Error(decodedOutput)

      // Alternatively: Fetch it with typed contract instance
      const typedResult = await typedContract.query.getTokenById(tokenIds?.length - 1)
      console.log('Result from fetchTokenById contract: ', typedResult)
    } catch (e) {
      console.error(e)
      toast.error('Error while fetchingTokenById. Try again…')
    } finally {
      // setFetchIsLoading(false)
    }
  }

  useEffect(() => {
    fetchOwnerTokenIds()
    console.log(tokenIds)
  }, [typedContract])

  const createToken = async ({
    supply,
    name,
    symbol,
    decimal,
    description,
  }: {
    supply: number
    name: string
    symbol: string
    decimal: number
    description: string
  }) => {
    if (!activeAccount || !contract || !activeSigner || !api) {
      toast.error('Wallet not connected. Try again…')
      return
    }

    try {
      const tokenCreate = await contractTxWithToast(
        api,
        activeAccount.address,
        contract,
        'create_token',
        {},
        [supply, name, symbol, description, decimal, PSP22Hash],
      )

      console.log(tokenCreate.result)
      console.log(contractAddress)

      // reset()
      // console.log(supply, name, symbol, decimal)
    } catch (e) {
      console.error(e)
    } finally {
      fetchOwnerTokenIds()
    }
  }

  if (!api) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gradient-to-l from-gray-900 p-6 shadow  hover:from-slate-950 hover:to-slate-950">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Token
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Deploy utility tokens on the Polkadot chain with ease.
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create Token</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you are done. */}
            Parameters the contract specifies to be passed in during deployment.
          </DialogDescription>
        </DialogHeader>
        <div className=" py-4">
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="name" className=" text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              // value={inputValues.name}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="symbol" className="text-right">
              Symbol
            </Label>
            <Input
              id="symbol"
              name="symbol"
              // value={inputValues.symbol}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="symbol" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-5 items-center gap-4">
            <Label htmlFor="symbol" className="text-right">
              Supply
            </Label>
            <Input
              id="supply"
              name="supply"
              // value={inputValues.supply}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>

          <div className="mb-5 items-center gap-4">
            <Label htmlFor="symbol" className="text-right">
              decimal
            </Label>
            <Input
              id="decimal"
              name="decimal"
              // value={inputValues.decimal}
              onChange={handleInputChange}
              className="mt-2"
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              createToken(inputValues)
            }}
          >
            Deploy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function CreateToken() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`mr-2 rounded border bg-white px-4 py-2 font-sans text-sm font-semibold  text-gray-900 no-underline focus:outline-none`}
        >
          Create
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create Token</DialogTitle>
          <DialogDescription>
            {/* Make changes to your profile here. Click save when you are done. */}
            Parameters the contract specifies to be passed in during deployment.
          </DialogDescription>
        </DialogHeader>
        <div className=" py-4">
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="name" className=" text-right">
              Name
            </Label>
            <Input id="name" value="" className="mt-2" />
          </div>
          <div className=" items-center gap-4">
            <Label htmlFor="symbol" className="text-right">
              Symbol
            </Label>
            <Input id="symbol" value="" className="mt-2" />
          </div>
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" value="" className="mt-2" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Deploy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
