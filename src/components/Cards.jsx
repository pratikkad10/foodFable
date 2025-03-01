import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import RestaurantCard from "./RestaurantCard";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function Cards() {
  const navigate= useNavigate();
  const { fetchData, loading, fetchedData } = useContext(AppContext);

  const [isOwner, setIsOwner] = useState(true);

  const [formData, setFormData] = useState({
    cityname: "",
  });

  async function submitHandler(event) {
    event.preventDefault();
    console.log("city name --- ", formData.cityname);
    fetchData(formData.cityname).then(() => {
      console.log("Fetched data after update:", fetchedData); // Ensure this depends on React rendering
    });

    // console.log("fetched in card", fetchedData);
  }

  useEffect(() => {
    console.log("Fetched data after update:", fetchedData);
  }, [fetchedData]);

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addRestaurantHandler() {
    navigate('/addRestaurant');
  }

  return (
    <div className="w-1/2 mx-auto pt-4  mt-16 text-zinc-50 ">
      <form onSubmit={submitHandler} className="search box mx-[7.6%] my-4">
        <label className="">
          <p className="font-bold text-xl "></p>
          <span className="flex- items-center">
            <input
              onChange={changeHandler}
              className="border-2 rounded-md px-2 py-1 w-[40%]"
              type="text"
              name="cityname"
              id="city"
              placeholder="search city"
              required
            />
            <button className="bg-zinc-900 text-sm font-semibold text-zinc-50 m-1 px-4 py-1 rounded-md hover:bg-zinc-800 cursor-pointer">
              search
            </button>
          </span>
        </label>
      </form>

      {/* <button  className='bg-blue-400 px-6 py-1 rounded-full text-zinc-100 font-semibold  my-4 hover:bg-blue-300 cursor-pointer'>Browse Restaurants</button> */}

      <p className="text-3xl font-bold mx-[7.6%]  opacity-85">
        Featured Restaurants
      </p>
      {isOwner ? (
        <button 
        onClick={addRestaurantHandler}
        className="bg-zinc-900 text-zinc-50 mt-4 px-4 py-1 mx-[7.6%] flex text-sm font-semibold items-center gap-1 rounded-md hover:bg-zinc-800 cursor-pointer">
          Add Restaurant <MdAdd size={20} />
        </button>
      ) : null}
      <div className="text-zinc-50">
        {loading ? (
          <Spinner />
        ) : fetchedData && fetchedData.length > 0 ? (
          fetchedData.map((restaurant, index) => (
            <Card key={index} restaurant={restaurant} />
          ))
        ) : (
          <div className="mt-6 flex flex-wrap gap-6 mb-4  justify-center items-center">
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
            <RestaurantCards />
          </div>
        )}
      </div>
    </div>
  );
}

function RestaurantCards() {
  return (
    <>
      <RestaurantCard />
    </>
  );
}

export default Cards;
