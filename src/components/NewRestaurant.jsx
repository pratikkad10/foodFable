import React from "react";

function NewRestaurant() {
  return (
    <div className="mt-[20%] flex  justify-center flex-col ml-10">
      <div className="">
        <p className="font-bold text-3xl text-zinc-400 opacity-95 my-2">
          Have a New Restaurant in Mind? Add It Here!
        </p>
        <button className="bg-blue-400 px-4 py-1 rounded-full hover:bg-blue-300 cursor-pointer  text-zinc-100 font-semibold ">
          Add new restaurant
        </button>
      </div>

      <div className="mt-20">
        <p className="font-bold text-3xl text-zinc-400 opacity-95 my-2">
          Remove Restaurant Details Below!
        </p>
        <button className="bg-blue-400 px-4 py-1 rounded-full hover:bg-blue-300 cursor-pointer  text-zinc-100 font-semibold ">
          Remove restaurant
        </button>
      </div>
    </div>
  );
}

export default NewRestaurant;
