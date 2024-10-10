import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <div className="md:w-[50%]">
        <p className="text-h1Mobile md:text-h1 text-black font-bold leading-tight">
          Say Goodbye <br /> to circling ... <br />
          Hello to <span className=" text-[#5FA90D]">Green</span>spot
        </p>
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/microphone_illustration.png"
            alt="microphone illustration"
          />
        </div>

        <p className="text-p text-black my-[35px]">
          Greenspot connects drivers with available parking spaces, saving time
          and reducing hassle. Find a free spot in seconds or rent out your own
          and earn effortlessly. Parking made simple – for everyone,
          everywhere..
        </p>

        <div className="flex flex-col md:flex-row gap-[20px] mt-[35px]">
          <input
            type="text"
            placeholder="Enter your email"
            className=" bg-white border-2 border-gray-900 rounded-xl py-3 px-4 block w-full mt-2 text-sm focus:border-primary"
          />
          <MainButton
            text="Join in"
            classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="/images/microphone_illustration.png"
          alt="microphone illustration"
        />
      </div>
    </section>
  );
}

export default HeroSection;
