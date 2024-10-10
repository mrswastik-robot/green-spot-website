import React from "react";

function LogoGroupSection() {
  return (
    <section>
      {/* <div className="hidden md:block w-full">
        <img
          src="/images/logo_group_desktop.png"
          alt="logo group"
          className="w-full object-cover saturate-0"
        />
      </div>
      <div className="block md:hidden w-full">
        <img
          src="/images/logo_group_mobile.png"
          alt="logo group"
          className="w-full object-cover saturate-0"
        />
      </div> */}
      <div className="">
        <p className=" text-center font-semibold text-sm">Powered by:</p>
      </div>
      <div className="w-full flex flex-col md:flex-row mx-auto items-center justify-center gap-[12rem]">
        <img
          src="/images/coe_logo.png"
          alt="logo group"
          className="object-cover  w-[200px]"
        />
        <img
          src="/images/enactus_germany_logo.svg"
          alt="logo group"
          className=" object-cover w-[200px]"
        />
        <img
          src="/images/enactus_ingolstadt_logo.png"
          alt="logo group"
          className=" object-cover w-[220px]"
        />
      </div>
    </section>
  );
}

export default LogoGroupSection;
