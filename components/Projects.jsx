import Image from "next/image";
import Link from "next/link";
import React from "react";
import medical from "../public/assets/projects/medical.png";
import unifiedChat from "../public/assets/projects/unifiedChat.png";
import codebook from "../public/assets/projects/codebook.png";
import blooming from "../public/assets/projects/blooming.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl font-bold tracking-widest uppercase text-[#008080]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Medical"
            backgroundImg={medical}
            projectUrl="/medical"
            tech="React JS"
          />
          <ProjectItem
            title="Unified Chat"
            backgroundImg={unifiedChat}
            projectUrl="/unified-chat"
            tech="React JS"
          />
          <ProjectItem
            title="CodeBook"
            backgroundImg={codebook}
            projectUrl="/codebook"
            tech="React JS"
          />
          <ProjectItem
            title="Blooming"
            backgroundImg={blooming}
            projectUrl="/blooming"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
