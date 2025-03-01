import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

function Home({ setIsLoggedIn, isLoggedIn }) {
  const { fetchData } = useContext(AppContext);

  const navigate = useNavigate();
  function clickHandler() {
    // fetchData();
    if (isLoggedIn) {
      navigate("/restaurants");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="">
      <div className="absolute top-[50%] left-10">
        <h1 className="text-8xl font-bold text-zinc-200 opacity-65 mb-1 ">
          Lost in Hunger?
        </h1>
        <h1 className="font-bold text-5xl text-zinc-200 opacity-70 ">
          Let FoodFable guide you!
        </h1>
        <button
          onClick={clickHandler}
          className="bg-blue-400 px-6 py-1 rounded-full text-zinc-100 font-semibold  mt-10 hover:bg-blue-300 cursor-pointer"
        >
          Explore Restaurants
        </button>
      </div>
    </div>
  );
}

export default Home;
