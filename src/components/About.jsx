import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center bg-[#1e2131] px-8 py-20 lg:px-52 lg:py-40"
    >
      <div className="flex flex-col justify-center gap-x-6 gap-y-6 lg:flex-row">
        <div className="w-full lg:w-1/2">
          {/* <div className="h-full w-full bg-slate-300"></div> */}
          <Image
            src="/me.jpg"
            width={800}
            height={800}
            alt="photo"
            className="mx-auto object-cover md:h-1/2 md:w-1/2 lg:h-full lg:w-full"
          />
        </div>
        <div className="flex w-full items-center justify-center gap-y-6 lg:w-1/2">
          <div className="flex flex-col gap-y-6">
            <div className="">
              <p className="text-[#e85f5b]">Discover</p>
              <h2 className="text-4xl font-semibold text-white">About Me</h2>
              <div className="h-1 w-20 bg-[#e85f5b]"></div>
            </div>
            <p className="text-justify indent-8 text-white">
            Undergradute student of Universitas Pembangunan Nasional &#34;veteran&#34; jakarta who is full of enthusiasm and ready to brng positive energy to profesional world. I love learning new things to develop my soft-skills and hard skills.
            </p>
            <div className="mt-10 flex justify-between">
              <button className="my-auto w-fit bg-[#e85f5b] px-4 py-2 text-white hover:bg-[#c8534f]">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
