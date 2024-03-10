'use client'

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

export function NFTSelection() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="mr-8 block max-w-sm cursor-pointer rounded-lg border border-gray-600 bg-gradient-to-l from-gray-900 p-6 shadow  hover:from-slate-950 hover:to-slate-950">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            NFT
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Create and deploy your NFT collection on the Polkadot chain with ease.
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Create NFT</DialogTitle>
          <DialogDescription>
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

          <div className="flex w-full items-center justify-center">
            <label className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border">
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Deploy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function CreateNFT() {
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
          <DialogTitle>Create NFT</DialogTitle>
          <DialogDescription>
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

          <div className="flex w-full items-center justify-center">
            <label className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border">
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Deploy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
