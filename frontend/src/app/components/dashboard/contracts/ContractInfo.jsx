import { HiOutlineDuplicate } from 'react-icons/hi'

export default function ContractDetails({ name, description, address }) {
  return (
    <div className="mt-20 p-4 sm:container">
      <div className="mb-6 border-b border-gray-700 pb-6">
        <div className="mb-3 flex items-center">
          <h1 className="mr-2 text-2xl font-bold">{name}</h1>
          <button className="mr-2 rounded border px-2 py-1 font-sans text-sm font-semibold  text-white no-underline focus:outline-none">
            Aleph Zero-Testnet
          </button>
        </div>
        <p className="mb-3 text-gray-300">{description}</p>
        <div className="mr-2 w-fit cursor-pointer rounded border px-2 py-1 font-sans text-xs  font-semibold text-white no-underline focus:outline-none">
          <span className="flex items-center gap-1 text-xs">
            <HiOutlineDuplicate /> {String(address).substring(0, 8)}...
            {String(address).substring(String(address).length - 9, String(address).length - 1)}
          </span>
        </div>
      </div>
    </div>
  )
}
