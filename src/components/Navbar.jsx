import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="flex justify-between w-full bg-zinc-400 p-4 fixed top-0 z-10">
      <NavLink to="/" className="font-bold text-2xl text-zinc-900">
        FoodFable
      </NavLink>
      <div className="flex justify-between gap-6 items-center">
        <NavLink className="font-semibold" to="/">
          Home
        </NavLink>
        <NavLink className="font-semibold" to="/about">
          About
        </NavLink>

        {isLoggedIn ? (
          <NavLink
            onClick={() => setIsLoggedIn(false)}
            className="bg-zinc-800 px-4 py-1 rounded-md text-zinc-50 font-semibold hover:bg-zinc-700"
            to="/logout"
          >
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink
              className="bg-zinc-800 px-4 py-1 rounded-md text-zinc-50 font-semibold hover:bg-zinc-700"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="bg-zinc-800 px-4 py-1 rounded-md text-zinc-50 font-semibold hover:bg-zinc-700"
              to="/signup"
            >
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
