import React from "react";
import ServiceCard from "../cards/ServiceCard";

export default function ServiceSection() {
  const services = [
    {
      titleTop: "Find Perfect",
      titleBottom: "Parking spot",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_1.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Book the spot",
      titleBottom: "through the app",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_2.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Rent out your spot",
      titleBottom: "And earn",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_3.png",
      darkArrow: false,
      link: "/",
    },

    {
      titleTop: "Map Integration",
      titleBottom: "& GPS Navigation",
      bg: "bg-accent",
      titleBg: "bg-primary",
      image: "/images/s_4.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Seamless Booking",
      titleBottom: "& Payments",
      bg: "bg-primary",
      titleBg: "bg-white",
      image: "/images/s_5.png",
      darkArrow: true,
      link: "/",
    },

    {
      titleTop: "Compare parking prices",
      titleBottom: "In real time",
      bg: "bg-secondary",
      titleBg: "bg-white",
      image: "/images/s_6.png",
      darkArrow: false,
      link: "/",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Services
        </div>
        <p className="text-p">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[80px]">
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
}
