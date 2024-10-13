import React from "react";
import TeamCard from "../cards/TeamCard";
import MainButton from "../common/MainButton";

function TeamSection() {
  const teams = [
    {
      name: "Mr. Ankit Thakur",
      position: "CEO and Founder",
      experience:
        "As the Founder, Project Manager, and Lead at Green Spot, my mission is to leverage technology to create smarter, greener cities and contribute to a more sustainable future. I am deeply committed to developing innovative solutions that reduce traffic congestion and minimize carbon emissions, driving positive change in urban environments.",
      image: "/images/t_11.png",
      linkedin: "https://www.linkedin.com/in/ankit-thakur-co/"
    },
    {
      name: "Mr. Anand",
      position: "Product Manager",
      experience:
        "Over 2 years of experience in software development, embedded systems, machine learning algorithms, and project management.",
      image: "/images/t_22.png",
      linkedin: "www.linkedin.com/"
    },
    {
      name: "Mr. Swastik",
      position: "App and Web Developer",
      experience:
        "2+ years of experience in developing web and mobile applications for various industries, including e-commerce, healthcare, and education. I am working on the development of the Greenspot app, which the end user can use to find and book parking spots.",
      image: "/images/t_33.png",
      linkedin: "https://www.linkedin.com/in/swastik-patel-9b1254232/"
    },
    {
      name: "Esha Anees",
      position: "UI & UX Designer",
      experience: "With 5+ year of UI/UX design experience, I create user-centered digital products, enhacing usability for web and mobile.",
      image: "/images/t_44.png",
      linkedin: "https://www.linkedin.com/in/esha-anees/"
    }
  ];
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Team
        </div>
        <p className="text-p">
          Meet our small but talented team of experts who are passionate about
          creating innovative solutions to make our world a better place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[80px]">
        {teams.map((team, index) => (
          <TeamCard {...team} key={index} />
        ))}
      </div>

      {/* <div className="mt-[40px] flex justify-end">
        <MainButton
          text="See all team"
          classes="bg-secondary text-white text-[18px] w-full md:w-[231px] hover:text-black"
        />
      </div> */}
    </section>
  );
}

export default TeamSection;
