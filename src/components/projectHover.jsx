"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ProjectCard({ imageSrc, title, description }) {
  const [hoverProject, setHoverProject] = useState(false);

  const buttonHoverProject = () => {
    setHoverProject(!hoverProject);
  };

  const toogleClose = () => {
    setHoverProject(false);
  };

  return (
    <div className="card-project relative h-64 w-full">
      <Image
        src={`/${imageSrc}`}
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
          {title}
        </button>
      </div>
      {hoverProject && (
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-black bg-opacity-80 p-5">
          <p className="text-justify text-sm text-white">{description}</p>
          <button
            onClick={toogleClose}
            className="mt-4 text-xs text-white underline"
          >
            close
          </button>
        </div>
      )}
    </div>
  );
}
