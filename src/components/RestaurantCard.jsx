import React from "react";

function RestaurantCard() {
  return (
    <div className="bg-[#1A1A1AB3]  shadow-md hover:shadow-zinc-500   rounded-2xl overflow-hidden w-50 flex flex-col flex-wrap text-wrap">
      <img
        className="w-full h-30 "
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="p-2">
        <h1 className=" text-zinc-100 font-semibold">The Gourmet Spo</h1>
        <p className="text-zinc-300 text-sm ">123 Culinary Lane</p>
        <p className="text-zinc-300 text-sm ">pune</p>
        <p className="text-zinc-300 text-sm ">Open</p>
        <p className="text-zinc-300 text-sm ">4.5</p>
        <button className="bg-blue-400  rounded-lg text-zinc-50  text-sm px-2 mb-1 mt-2  hover:bg-blue-300 cursor-pointer">
          Reviews
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;
