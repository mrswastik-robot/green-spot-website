import React from "react";
import MainButton from "../common/MainButton";

function LetMakeThingsHappenSection() {
  return (
    <section className="bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-h3Mobile md:text-h3 font-medium">
          Let&apos;s make this Earth a better place
        </p>

        <p className="my-[26px]">
          Contact us today to learn more about how our team can help to make a difference.
        </p>

        <MainButton
            text="Get your free trial"
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
      <div className="absolute -top-8 right-8 hidden md:block">
        <img
          src="/images/eco_logo2.png"
          alt="proposal illustration"
        />
      </div>
    </section>
  );
}

export default LetMakeThingsHappenSection;
