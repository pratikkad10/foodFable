import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ setIsLoggedIn, isLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log("Signup details", formData);
    navigate("/restaurants");
    setIsLoggedIn(true);
  }

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="flex flex-col w-1/2 mx-auto text-zinc-50  items-center p-10 pt-28">
      <div className="p-4 my-2">
        <h1 className="text-2xl font-semibold">Welcome to FoodFable!</h1>
        <p className="text-xl italic font-extralight">
          Khud ke sheher ke best restaurants dhoondein.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <label>
          <p className="font-semibold mt-2">Name</p>
          <input
            onChange={changeHandler}
            className="border-2 border-zinc-100 p-1 rounded-md w-full mt-1 "
            type="name"
            name="name"
            id="name"
            placeholder="Enter name"
            required
          />
        </label>
        <label>
          <p className="font-semibold mt-2">E-mail Id</p>
          <input
            onChange={changeHandler}
            className="border-2 border-zinc-100 p-1 rounded-md w-full mt-1 "
            type="email"
            name="email"
            id="email"
            placeholder="Email ID"
            required
          />
        </label>
        <label>
          <p className="font-semibold mt-2">Password</p>
          <input
            onChange={changeHandler}
            className="border-2 border-zinc-100 p-1 rounded-md w-full mt-1"
            type="Password"
            name="password"
            id="Password"
            placeholder="Password"
            required
          />
        </label>
        <label>
          <p className="font-semibold mt-2">Confirm password</p>
          <input
            onChange={changeHandler}
            className="border-2 border-zinc-100 p-1 rounded-md w-full mt-1"
            type="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </label>

        <button className="px-6 py-2 bg-zinc-900 rounded-md text-zinc-50 font-semibold my-4 cursor-pointer hover:bg-zinc-800">
          Signup
        </button>
        <div className="link text-blue-500 underline font-semibold text-sm italic">
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
