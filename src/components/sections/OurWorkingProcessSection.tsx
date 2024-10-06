"use client";

import React, { useState } from "react";
import WorkingProcessCard from "../cards/WorkingProcessCard";
import { Accordion } from "../ui/accordion";

function OurWorkingProcessSection() {
  const processes = [
    {
      label: "01",
      title: "How does Greenspot help me find a parking spot quickly?",
      description:
        "Greenspot provides real-time updates on available parking spots in your area using our app and website. Simply enter your destination, and we’ll show you the nearest free spots or rentable spaces, saving you time and hassle.",
    },
    {
      label: "02",
      title: "Can I rent out my parking space?",
      description:
        "Yes! If you have a private parking spot, you can list it on Greenspot. Set your own price and availability, and earn money by renting it out to people in need of parking in your area.",
    },
    {
      label: "03",
      title: "How do I pay for parking through Greenspot?",
      description:
        "Payments are simple and secure through our app. You can link your credit card or other payment methods and pay directly for the parking spot you book. It’s hassle-free, and you won’t need cash.",
    },
    {
      label: "04",
      title: "Is the app available in my city?",
      description:
        "Greenspot is rolling out in major cities first, and we are expanding quickly. You can check our app or website for a list of supported cities, and we’re always working on adding more locations.",
    },
    {
      label: "05",
      title: "What if someone parks in my spot without permission?",
      description:
        "As a spot owner, you have full control over your listing. If an unauthorized vehicle is occupying your space, you can report it through the app, and we’ll provide the necessary support to resolve the issue.",
    },
    {
      label: "06",
      title: "How do I know if a parking spot is safe and secure?",
      description:
        "Greenspot allows users to rate and review parking spots, so you can read feedback from other users before booking. We also encourage spot owners to provide details and images of their spaces to ensure transparency and security.",
    },
  ];

  const [value, setValue] = useState("");

  const handleAccordionChange = (value: string) => {
    setValue(value);
  };
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Some questions you may have
        </div>
        <p className="text-p">
          We are an early stage startup, and we are constantly working on improving our services and responding to your needs.
        </p>
      </div>

      <div className="mt-[80px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          onValueChange={handleAccordionChange}
        >
          {processes.map((process, index) => (
            <WorkingProcessCard {...process} currentValue={value} key={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default OurWorkingProcessSection;
