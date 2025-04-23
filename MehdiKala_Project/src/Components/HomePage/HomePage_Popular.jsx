import { GiGoldBar } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCcAmazonPay } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";

export default function HomePage_Popular() {
  return (
    <div className="text-center mb-4">
      <h2 className="font-bold mb-2">پرطرفدارها</h2>
      <div className="flex">
        <div className="flex flex-col cursor-pointer">
          <div className="text-4xl text-yellow-500 w-15 h-15 rounded-full bg-gray-900 flex items-center justify-center p-1 m-2">
            <GiGoldBar />
          </div>
          <p className="text-sm">طلا</p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="text-4xl text-white w-15 h-15 rounded-full bg-gray-700 flex items-center justify-center p-1 m-2">
            <GiGoldBar />
          </div>
          <p className="text-sm">نقره</p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="text-4xl text-red-600 w-15 h-15 rounded-full bg-gray-400 flex items-center justify-center p-1 m-2">
            <TbTruckDelivery />
          </div>
          <p className="text-sm">ارسال</p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="text-4xl text-blue-700 w-15 h-15 rounded-full bg-gray-300 flex items-center justify-center p-1 m-2">
            <FaCcAmazonPay />
          </div>
          <p className="text-sm">پرداخت</p>
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="text-4xl text-green-800 w-15 h-15 rounded-full bg-gray-100 flex items-center justify-center p-1 m-2">
            <CiDollar />
          </div>
          <p className="text-sm">اقساطی</p>
        </div>
      </div>
    </div>
  );
}
