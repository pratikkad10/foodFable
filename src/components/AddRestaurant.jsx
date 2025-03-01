import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function AddRestaurant() {
  const navigate = useNavigate();
  function backClickHandler() {
    navigate(-1);
  }

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    status: "",
    image: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("form sumbit details", formData);
    navigate("/restaurants");
  }

  return (
    <div className="mt-24 w-1/2 mx-auto text-zinc-50 bg-[#1A1A1AB3] p-6 rounded-md">
      <div
        onClick={backClickHandler}
        className="h-10 w-10 bg-[#1A1A1ACC] hover:bg-zinc-900 rounded-full flex justify-center items-center"
      >
        <IoMdArrowRoundBack size={22} />
      </div>
      <h1 className="my-4 text-2xl font-bold ">Add new restaurant</h1>
      <form onSubmit={formSubmitHandler} action="">
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">
            Name of Restaurant
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="Name of Restaurant"
            id="name"
            name="name"
          />

          <label className="font-semibold" htmlFor="address">
            Address
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="Enter address"
            id="address"
            name="address"
          />

          <label className="font-semibold" htmlFor="city">
            City
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="Enter city"
            id="city"
            name="city"
          />

          <label className="font-semibold" htmlFor="status">
            Currest status
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="open / closed"
            id="status"
            name="status"
          />

          <label className="font-semibold" htmlFor="image-url">
            URL
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="link"
            placeholder="Enter image URL"
            id="image-url"
            name="image"
          />

          <button className=" py-2 font-semibold text-sm bg-blue-400 hover:bg-blue-300 rounded-md mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurant;
