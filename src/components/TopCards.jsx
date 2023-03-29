import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$7,753</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <div className="flex justify-center items-center border rounded-lg bg-green-200 text-green-700 text-lg p-2">
          +18%
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$1,247,453</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <div className="flex justify-center items-center border rounded-lg bg-green-200 text-green-700 text-lg p-2">
          +13%
        </div>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">14,453</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <div className="flex justify-center items-center border rounded-lg bg-green-200 text-green-700 text-lg p-2">
          +11%
        </div>
      </div>
    </div>
  );
};

export default TopCards;
