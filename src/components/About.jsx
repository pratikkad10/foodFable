import React from "react";

function About() {
  return (
    <div className="flex flex-col w-1/2 mx-auto gap-10 items-center bg-[#1A1A1AB3]  p-10 h-full py-20">
      <div>
        <h1 className="text-2xl font-bold text-zinc-50">
          Hey there, foodie! Welcome to FoodFable!
        </h1>
        <p className="text-wrap text-justify text-medium text-zinc-200 mt-4 leading-6.5">
          We're so glad you're here. Let's be honest—food isn't just about
          filling our stomachs; it's about the memories we make, the stories we
          share, and the joy we find in every bite. That's why we created{" "}
          <b>FoodFable</b>—a place where food lovers like you can discover,
          explore, and celebrate the incredible flavors of India.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-zinc-50">
          What's FoodFable All About?
        </h1>
        <p className="text-wrap text-justify text-medium text-zinc-200 mt-4 leading-6.5">
          Imagine this: you're craving something delicious—maybe a spicy plate
          of pani puri, a comforting bowl of butter chicken, or a
          melt-in-your-mouth rasgulla. But where do you go? That's where we come
          in. FoodFable is your go-to guide for finding the best restaurants,
          street food stalls, and hidden gems in your city. We're not just about
          listings; we're about stories. Every dish has a tale, every restaurant
          has a vibe, and every foodie has a voice. Whether you're sharing your
          favorite biryani spot or reading about someone's unforgettable vada
          pav experience, FoodFable is where food stories come to life.
        </p>
      </div>

      {/* <div>
            <h1 className="text-xl font-bold text-zinc-50">Join Our Foodie Family</h1>
            <p  className="text-wrap text-justify text-medium text-zinc-200 mt-4 leading-6.5">
                FoodFable isn't just a website—it's a community. It's where food lovers
                come together to share their experiences, recommend hidden gems, and
                celebrate the magic of Indian cuisine. Whether you're a seasoned food
                blogger or someone who just loves a good meal, there's a place for you
                here. So, what are you waiting for? Let's embark on this delicious
                journey together. Because at FoodFable, every meal tells a story—and we
                can't wait to hear yours.
            </p>
            <h2 className="text-[1rem] font-bold text-zinc-200 mt-8">Let's eat, share, and celebrate. Welcome to FoodFable!</h2>
        </div> */}

      <h2 className="text-2xl font-bold text-zinc-200 mt-26">
        Let's eat, share, and celebrate. Welcome to FoodFable!
      </h2>
    </div>
  );
}

export default About;
