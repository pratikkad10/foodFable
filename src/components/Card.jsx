import React from "react";
import { MdStarRate } from "react-icons/md";
import { PiDoorOpen } from "react-icons/pi";
import { Link } from "react-router";

function Card({ restaurant }) {
  return (
    <div className="card p-4 bg-zinc-400   rounded-md my-4">
      <p className="text-2xl font-semibold text-zinc-900 italic text-justify text-wrap">
        {restaurant.name}
      </p>
      <p className="text-sm  my-2 text-[#050505AB]">
        {restaurant.formatted_address}
      </p>
      <div className="font-semibold flex items-center my-2">
        <span>
          <PiDoorOpen style={{ color: "black", fontSize: "35px" }} />
        </span>
        {/* {restaurant.opening_hours} */}
      </div>
      <p className="font-semibold flex items-center my-2">
        <span>
          <MdStarRate style={{ color: "black", fontSize: "25px" }} />
        </span>
        Ratings {restaurant.rating}
      </p>
      <p className="font-semibold flex items-center my-2">
        Total User rating {restaurant.user_ratings_total}
      </p>

      {/* <p className="G-map integrate">photos html tag google map</p> */}
      <button className="font-semibold px-8 py-1 cursor-pointer bg-zinc-900 hover:bg-zinc-800 text-zinc-50 rounded-md">
        <a
          href={
            restaurant.photos[0].html_attributions[0].match(
              /href="([^"]*)"/
            )?.[1] || "#"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      </button>
    </div>
  );
}

export default Card;
