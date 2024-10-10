"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainButton from "../common/MainButton";

import Head from "next/head";
import { useEffect } from "react";

function ContactUsSection() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-accent flex justify-between w-full rounded-[45px] relative overflow-x-hidden">
      <Head>
        {/* Optionally add the script here as well */}
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>

      <div className="py-[60px] px-8 md:px-[100px] xl:pr-[500px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
          <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
            Contact Us
          </div>
          <p className="text-p">
            Connect with Us: Let's Discuss Your Ideas and Collaborate
          </p>
        </div>

        {/* <div className="mt-[40px]">

          <div className="mt-[25px]">
            <p className="pb-[5px]">Name</p>
            <Input type="text" placeholder="Name" />
          </div>

          <div className="mt-[25px]">
            <p className="pb-[5px]">Email*</p>
            <Input type="email" placeholder="Email" />
          </div>

          <div className="mt-[25px]">
            <p className="pb-[5px]">Message*</p>
            <Textarea placeholder="Message" />
          </div>
        </div> */}
        <iframe data-tally-src="https://tally.so/embed/3NJPbO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="484" title="Contact us"></iframe>

        {/* <div className="mt-[40px]">
          <MainButton
            text="Send Message"
            classes="bg-secondary text-white text-[18px] w-full md:w-full hover:text-black"
          />
        </div> */}
      </div>
      <div className="hidden xl:block absolute top-0 right-[-20rem]">
        <img src="/images/contact_illustration.png" alt="illustration"  />
      </div>
    </section>
  );
}

export default ContactUsSection;
