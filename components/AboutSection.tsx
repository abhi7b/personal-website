import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Advanced Analytics" },
  { skill: "Predictive Analytics" },
  { skill: "Project Management" },
  { skill: "PySpark" },
  { skill: "Python" },
  { skill: "Financial Analysis" },
  { skill: "Business Intelligence" },
  { skill: "SQL" },
  { skill: "JAVA" },
  { skill: "Git" },
  { skill: "JIRA" },
  { skill: "Jupyter" },
  { skill: "Agile" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Welcome!
            </h1>
            <p>
              I&#39;m Abhishek Bhatnagar, a seasoned business-tech professional specializing in {" "}
              <span className="font-bold">{"product analytics"}</span>,
              <span className="font-bold">{" strategy development"}</span>, and
              <span className="font-bold">{" AI-driven product innovation"}</span> within the Banking, Financial Services,
              and IT sectors.
            </p>
            <br />
            <p>
              Currently pursuing a Master&#39;s in Engineering with a focus on Artificial Intelligence
              for Product Innovation at Duke University, I bring over eight years of experience in leveraging data
              to craft impactful solutions and drive measurable growth.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions.
              From reading, playing sports, to traveling,
              I&#39;m always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe {" "}
              <span className="font-bold text-teal-500">
                learning never stops
              </span>{" "}
              and that&#39;s my driving force!! 🙂 
              
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
