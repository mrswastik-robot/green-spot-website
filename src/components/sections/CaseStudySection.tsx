import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CaseStudySection() {
  const studies = [
    {
      title:
        "In cities like Munich and Zurich, drivers spend an average of 17 hours per year searching for parking, contributing to traffic congestion and wasted fuel. Greenspot offers real-time access to available parking spots, reducing search time and cutting down on emissions, improving both traffic flow and air quality.",
    },
    {
      title:
        "During major events, such as concerts or sports games, nearby parking lots fill up quickly, causing chaos and frustration for attendees. Greenspot allows locals to rent out their unused parking spaces, providing additional parking options and helping event-goers secure spots in advance, easing congestion.",
    },
    {
      title:
        "In densely populated residential neighborhoods, finding parking is a daily struggle, often leading to conflicts among neighbors. Greenspot enables residents to rent out their private parking spaces, allowing neighbors to find available parking more easily and creating a win-win solution for the community.",
    },
  ];
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8 md:gap-[40px] items-center ">
        <div className="px-2 bg-primary inline-block font-medium text-h2 rounded-md">
          Case Studies
        </div>
        <p className="text-p">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-[45px] gap-[40px] mt-[80px] bg-secondary text-white p-8 md:p-[50px]">
        {studies.map((study, index) => (
          <div className="flex justify-center items-center" key={index}>
            <div>
              <p className="pb-[20px]">{study.title}</p>
              <Link href="/">
                <div className="flex gap-2 items-center">
                  <p className="text-primary">Learn more</p>
                  <div>
                    <img src="/images/arrow_rotate.png" />
                  </div>
                </div>
              </Link>
            </div>
            {index !== 2 && (
              <div className="mx-4 xl:mx-[64px] hidden md:block">
                <Separator orientation="vertical" className="h-[250px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
