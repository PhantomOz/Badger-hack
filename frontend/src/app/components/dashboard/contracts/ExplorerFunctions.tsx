'use client'

import { useState } from 'react'

import { HiOutlineDuplicate } from 'react-icons/hi'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const ExplorerFunctions = ({
  from,
  to,
  spender,
  value,
  owner,
  who,
  view,
  viewValue,
}: {
  from?: boolean
  to?: boolean
  spender?: boolean
  value?: boolean
  owner?: boolean
  who?: boolean
  view?: string
  viewValue?: string
}) => {
  const [tab, setTab] = useState(0)
  const [currentFunction, setCurrentFunction] = useState('')

  return (
    <>
      <div className="mt-5">
        {owner ? (
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right text-lg capitalize text-gray-100">
              owner
            </Label>
            <Input id="description" value="" placeholder="address" className="mt-2" />
          </div>
        ) : (
          ''
        )}

        {from ? (
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right text-lg capitalize text-gray-100">
              from
            </Label>
            <Input id="" value="" placeholder="address" className="mt-2" />
          </div>
        ) : (
          ''
        )}

        {to ? (
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right text-lg capitalize text-gray-100">
              to
            </Label>
            <Input id="description" value="" placeholder="address" className="mt-2" />
          </div>
        ) : (
          ''
        )}

        {spender ? (
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right text-lg capitalize text-gray-100">
              spender
            </Label>
            <Input id="description" value="" placeholder="address" className="mt-2" />
          </div>
        ) : (
          ''
        )}

        {value ? (
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right text-lg capitalize text-gray-100">
              value
            </Label>
            <Input id="description" value="" placeholder="uint256" className="mt-2" />
          </div>
        ) : (
          ''
        )}

        {who ? (
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right text-lg capitalize text-gray-100">
              who
            </Label>
            <Input id="description" value="" placeholder="address" className="mt-2" />
          </div>
        ) : (
          ''
        )}

        {view ? (
          <div className="mb-5 items-center gap-4">
            <Label htmlFor="description" className="text-right text-lg capitalize text-gray-100">
              {view}
            </Label>
            <div className=" mt-2 flex w-full max-w-sm cursor-pointer items-center justify-between rounded border border-gray-600 p-3 shadow">
              <span>{viewValue}</span>
              <HiOutlineDuplicate />
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
