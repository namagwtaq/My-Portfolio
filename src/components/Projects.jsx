import React from "react";
import ProjectCard from "./projectHover";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#1e2131] px-8 py-20 lg:px-32 lg:py-40 xl:px-60"
    >
      <div className="">
        <div className="">
          <p className="text-[#e85f5b]">Experience</p>
          <h2 className="text-4xl font-semibold text-white">My Projects</h2>
          <div className="h-1 w-20 bg-[#e85f5b]"></div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Running LED with PCB"
            imageSrc="Etching PCB.JPG"
            description="This projects makes PCBs into a predetermined electrical circuit. as a member I assisted teh chairman in completing the project such as the etching process on the PCB"
          />
          <ProjectCard
            title="Automatic Fan with Fuzzy Logic"
            imageSrc="Automatic fan.jpg"
            description="This project is made by using Arduino and the control is based on fuzzy logic. As a member I assisted the chairman in completing the project"
          />
          <ProjectCard
            title="System Registration"
            imageSrc="PLC-outseal.jpg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            temporibus at nesciunt totam ad, sequi enim necessitatibus nemo
            tenetur! Id ullam optio ut delectus eligendi possimus! Quod quidem
            ut animi."
          />
          <ProjectCard
            title="System Registration"
            imageSrc="ESP-32 sensor kelembaban.jpg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            temporibus at nesciunt totam ad, sequi enim necessitatibus nemo
            tenetur! Id ullam optio ut delectus eligendi possimus! Quod quidem
            ut animi."
          />
        </div>
      </div>
    </section>
  );
}
