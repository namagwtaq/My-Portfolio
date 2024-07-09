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
            title="Arduino Uno"
            imageSrc="background.jpg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            temporibus at nesciunt totam ad, sequi enim necessitatibus nemo
            tenetur! Id ullam optio ut delectus eligendi possimus! Quod quidem
            ut animi."
          />
          <ProjectCard
            title="System Registration"
            imageSrc="background.jpg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            temporibus at nesciunt totam ad, sequi enim necessitatibus nemo
            tenetur! Id ullam optio ut delectus eligendi possimus! Quod quidem
            ut animi."
          />
          <ProjectCard
            title="System Registration"
            imageSrc="background.jpg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            temporibus at nesciunt totam ad, sequi enim necessitatibus nemo
            tenetur! Id ullam optio ut delectus eligendi possimus! Quod quidem
            ut animi."
          />
          <ProjectCard
            title="System Registration"
            imageSrc="background.jpg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            temporibus at nesciunt totam ad, sequi enim necessitatibus nemo
            tenetur! Id ullam optio ut delectus eligendi possimus! Quod quidem
            ut animi."
          />
          <ProjectCard
            title="System Registration"
            imageSrc="background.jpg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            temporibus at nesciunt totam ad, sequi enim necessitatibus nemo
            tenetur! Id ullam optio ut delectus eligendi possimus! Quod quidem
            ut animi."
          />
          {/* <div className="card-project relative h-64 w-full">
              <Image
                src="/background.jpg"
                width={500}
                height={500}
                alt="project"
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-t from-black to-transparent">
                <button
                  onClick={buttonHoverProject}
                  className="mb-4 text-center text-white"
                >
                  Arduino Uno
                </button>
              </div>
              {hoverProject && (
                <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-lg bg-black bg-opacity-80 p-5">
                  <p className="text-justify text-sm text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fuga temporibus at nesciunt totam ad, sequi enim
                    necessitatibus nemo tenetur! Id ullam optio ut delectus
                    eligendi possimus! Quod quidem ut animi.
                  </p>
                </div>
              )}
            </div> */}
          {/* <div className="card-services rounded-lg border-2 border-[#e85f5b] p-4">
              <svg
                className="my-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#e85f5b"
                version="1.1"
                viewBox="0 0 511.999 511.999"
                xmlSpace="preserve"
              >
                <path d="M475.889 480.777l-43.018-86.036h23.279c9.211 0 16.679-7.468 16.679-16.679s-7.468-16.679-16.679-16.679h-39.957l-83.598-167.197a82.9 82.9 0 006.801-32.954c0-27.225-13.117-51.441-33.358-66.671V50.038C306.037 22.447 283.59 0 256 0c-27.591 0-50.038 22.447-50.038 50.038v44.523c-20.242 15.23-33.358 39.446-33.358 66.671 0 11.7 2.433 22.839 6.801 32.954L95.807 361.382H55.849c-9.211 0-16.679 7.468-16.679 16.679s7.468 16.679 16.679 16.679h23.279L36.11 480.777c-4.12 8.238-.779 18.258 7.459 22.377 41.229 20.617 91.281 3.936 111.897-37.299l35.557-71.113h48.297v16.679c0 9.211 7.468 16.679 16.679 16.679s16.679-7.468 16.679-16.679v-16.679h48.297l35.557 71.113c20.541 41.081 70.497 57.999 111.897 37.299 8.24-4.119 11.58-14.139 7.46-22.377zM239.321 50.038c0-9.197 7.482-16.679 16.679-16.679s16.679 7.482 16.679 16.679v29.477c-5.391-1.099-10.968-1.678-16.679-1.678s-11.288.579-16.679 1.678V50.038zM256 111.195c27.591 0 50.038 22.447 50.038 50.038 0 26.48-20.68 48.208-46.735 49.916a16.452 16.452 0 00-6.605 0c-26.056-1.708-46.735-23.436-46.735-49.916-.001-27.592 22.446-50.038 50.037-50.038zM125.63 450.936c-9.947 19.897-30.972 29.816-50.957 27.306l41.751-83.502h37.305l-28.099 56.196zm44.777-89.554h-37.305l68.507-137.012c8.422 7.265 18.296 12.885 29.135 16.338l-60.337 120.674zm102.272 0v-16.679c0-9.211-7.468-16.679-16.679-16.679-9.211 0-16.679 7.468-16.679 16.679v16.679h-31.618L256 264.789l48.297 96.594h-31.618zm68.914 0l-60.338-120.674c10.84-3.453 20.713-9.073 29.135-16.339l68.506 137.013h-37.303zm44.777 89.554l-28.098-56.195h37.304l41.751 83.502c-19.956 2.507-40.996-7.384-50.957-27.307z"></path>
              </svg>
              <h3 className="mt-6 text-xl font-medium text-white">
                Creative Design
              </h3>
              <p className="mt-2 text-justify text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ipsa, placeat, alias quibusdam minus officia accusamus magni,
              </p>
            </div> */}
        </div>
      </div>
    </section>
  );
}
