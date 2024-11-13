import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare , BsBriefcase} from "react-icons/bs"

const experiences = [
  {
    company: "TD Bank Canada Group",
    role: "Senior Business Insight Analyst",
    duration: "Jan 2022 - Aug 2024",
    description:
      "At TD Bank, Abhishek drove significant value for the company, including an estimated CAD $1.7MM by identifying profitable customers within co-brand product lines scheduled for closure. He played a key role in increasing revenue from balance transfers by 10% annually through the enhancement of a legacy customer segmentation model, which improved targeting and pricing strategies. Additionally, Abhishek boosted year-over-year revenue for the Amazon card portfolio by 20%, optimizing campaign criteria to increase customer engagement and spending. His contributions also extended to mentorship, where he guided new associates on both business and technical projects, fostering skill development and domain expertise within the team.",
    image: "/td1.png", // Add image path here
  },
  {
    company: "GE Capital",
    role: "Manager – Products & Analytics",
    duration: "Jun 2017 - Jun 2020",
    description:
      "At GE Capital, Abhishek led various product development and enhancement initiatives, resulting in a 10% increase in portfolio revenue and a 2% rise in market share annually. He was instrumental in improving customer acquisition and retention strategies for a portfolio of 1.2 million accounts, refining the value proposition and enhancing customer strategy. Abhishek’s focus on efficiency led to a 30% reduction in costs and a savings of 120 man-hours annually through transformative business process improvements and policy development. Furthermore, he developed and refined Tableau dashboards and key performance indicators (KPIs), which streamlined decision-making and improved performance reporting for the team.",
    image: "/ge.jpeg", // Add image path here
  },
];

const ExpsSection = () => {
  return (
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {experiences.map((experience, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <h2 className="text-3xl font-bold mb-2">{experience.company}</h2>
                  <h3 className="text-xl font-semibold mb-1 text-teal-600">
                    {experience.role}
                  </h3>
                  <p className="text-md text-neutral-500 dark:text-neutral-400 mb-4">
                    {experience.duration}
                  </p>
                  <p className="text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                    {experience.description}
                  </p>
                </div>
                <div className="flex justify-center md:w-1/2">
                  <div className="w-[150px] h-[150px] relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={experience.image}
                      alt={`${experience.company} logo`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpsSection;
