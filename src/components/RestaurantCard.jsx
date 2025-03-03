import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

function RestaurantCard() {
  const [rating, setRating] = useState(1);

  const [formData, setFormData] = useState({
      rating:rating, review : "", postId:'0211222'  //something
    });
  
    useEffect(() => {
      setFormData((prevData) => ({
        ...prevData,
        rating: rating,
      }));
    }, [rating]);


    function submitHandler(event) {
      event.preventDefault();
      console.log("review form ", formData);
  
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

        <form onSubmit={submitHandler} action="">
          <label
            className="text-zinc-300 text-sm font-semibold"
            htmlFor="review"
          >
            Rate & Review
          </label>

          <div className="stars flex gap-3 p-1">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  onClick={() =>
                    setRating(rating === starValue ? 0 : starValue)
                  }
                >
                  {rating >= starValue ? (
                    <FaStar color="gold" />
                  ) : (
                    <FaRegStar />
                  )}
                </span>
              );
            })}
          </div>

          <textarea
            onChange={changeHandler}
            className="border  rounded-md p-[0.054rem]"
            name="review"
            placeholder="Type here..."
            id="review"
            rows={2}
            cols={20}
          ></textarea>
          <button className="bg-blue-400  rounded-lg text-zinc-50  text-sm px-2 font-semibold  hover:bg-blue-300 cursor-pointer">
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantCard;
