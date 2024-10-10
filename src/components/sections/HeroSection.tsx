"use client";

import React, { useEffect } from "react";
import MainButton from "../common/MainButton";
import Head from "next/head";

function HeroSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-between w-full">
      <Head>
        {/* Optionally add the script here as well */}
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <div className="md:w-[50%]">
        <p className="text-h1Mobile md:text-h1 text-black font-bold leading-tight">
          Say Goodbye <br /> to circling ... <br />
          Hello to <span className=" text-[#87cc39e1]">Green</span>spot
        </p>
        <div className="block md:hidden my-[35px]">
          <img
            src="/images/cars.svg"
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
        <MainButton
            text="Join in the waitlist"
            tallyAttributes={{
              "data-tally-open": "wQJ48Y",
              "data-tally-layout": "modal",
              "data-tally-width": "478",
              "data-tally-emoji-text": "👋",
              "data-tally-emoji-animation": "wave",
              "data-tally-auto-close": "0",
            }}
            classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
          />
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src="/images/cars.svg"
          width={750}
          height={750}
          alt="microphone illustration"
        />
      </div>
    </section>
  );
}

export default HeroSection;
