import React from "react";
import { skills } from "../pages/api/projectData";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I&apos;m constantly expanding my skill set and staying up-to-date
            with the latest technologies to ensure I can tackle new challenges
            and provide cutting-edge solutions.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill: any) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex p-4 h-full items-center bg-yellow-600">
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
