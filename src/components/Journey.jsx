import React from "react";

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#24253c] px-8 py-20 lg:px-32 lg:py-40 xl:px-60"
    >
      <div className="">
        <div className="">
          <p className="text-[#e85f5b]">Education</p>
          <h2 className="text-4xl font-semibold text-white">My Journey</h2>
          <div className="h-1 w-20 bg-[#e85f5b]"></div>
        </div>
      </div>
      <div className="mt-10">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-[#e85f5b]"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              2007 - 2014
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Madrasah Ibtidaiyah Yahya
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              1st place in the sub-district level futsal competition + Score 10
              (Perfect) in the National Exam, Science (IPA) subject
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-[#e85f5b]"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              2014 - 2017
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Madrasah Tsanawiyah Zakaria
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              OSIS MTs Zakaria + Futsal Club
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-[#e85f5b]"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              2017 - 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Madrasah Aliyah Zakaria
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              PSPKA Green Pioneer, Division of Basic Education and Training +
              3rd place in the Bandung City Integrated Geography Madrasah
              Science Competition
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-[#e85f5b]"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
              2020 - current
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Gunadarma University
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Faculty of Industrial Technology, Departmen of Informatic
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
