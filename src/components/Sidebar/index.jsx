import { SlSpeedometer, SlSettings, SlWallet } from "react-icons/sl"
import { BiCoinStack } from "react-icons/bi"
import { CiBitcoin } from "react-icons/ci"
import { RiExchangeFundsFill, RiHistoryFill } from "react-icons/ri"

export default function Sidebar() {
  return (
    <div className="w-96 flex flex-col justify-between min-h-full">
      <ul className="flex flex-col gap-8 mt-16">
        <li className="flex items-center">
          <SlSpeedometer size={25} />
          <p className="ml-6">Dashboard</p>
        </li>
        <li className="flex items-center">
          <SlWallet size={25} />
          <p className="ml-6">My Wallet</p>
        </li>
        <li className="flex items-center">
          <BiCoinStack size={25} />
          <p className="ml-6">Transactions</p>
        </li>
        <li className="flex items-center">
          <CiBitcoin size={25} />
          <p className="ml-6">Crypto</p>
        </li>
        <li className="flex items-center">
          <RiExchangeFundsFill size={25} />
          <p className="ml-6">Exchange</p>
        </li>
        <li className="flex items-center">
          <SlSettings size={25} />
          <p className="ml-6">Settings</p>
        </li>
      </ul>
      <div className="flex flex-col p-6 mt-16 bg-[#14121F] rounded-3xl text-white w-[180px]">
        <RiHistoryFill size={25} />
        <h3 className="pt-1 pb-2">History available</h3>
        <p className="text-xs opacity-50 font-light">Check your weekly transaction reports</p>
      </div>
    </div>
  )
}