import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { Nosifer } from "next/font/google";

const nosifer = Nosifer({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin", "latin-ext"],
});

export default function Hero() {
  return (
    <section className="h-screen bg-home-background bg-cover bg-center">
      <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-80">
        <div className="">
          {/* <div className="mx-auto h-40 w-40 rounded-full bg-slate-300"></div> */}
          <Image
            src="/profile.jpg"
            width={200}
            height={200}
            alt="photo-profile"
            className="mx-auto h-40 w-40 rounded-full border-2 border-white object-cover p-2"
          />
          <div className="mt-4 text-center">
            <h1
              className="text-3xl font-bold text-white lg:text-5xl"
              style={nosifer.style}
            >
              <span className="text-[#e85f5b]">Mahdy</span> Mubasyir
            </h1>
            <p className="mt-3 text-base text-white lg:text-xl">
              Fullstack Developer
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
