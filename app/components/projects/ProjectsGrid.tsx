"use client";

import { Project } from "@/app/types/project";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProjectsProps = {
  projects: Project;
};

const ProjectsGrid: React.FC<ProjectsProps> = ({ projects }) => {
  const router = useRouter();
  return (
    <Link
      href={`${projects?.link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="col-span-1 cursor-pointer group"
    >
      <div className="aspect-square w-full relative overflow-hidden rounded-xl">
        <Image
          alt="Projects"
          src={projects.image}
          className="object-cover h-full w-full group-hover:scale-110 transition"
          fill
        />
      </div>
      <div className="font-semibold text-lg">{projects.title}</div>
      <div className="font-light text-neutral-500">{projects.description}</div>
      <div className="flex flex-row items-center gap-1">
        {/* {projects.library?.map((project, idx) => (
          <div key={idx} className="font-semibold">
            {project}
          </div>
        ))} */}
        {projects.stack?.map((project, idx) => (
          <div key={idx} className="text-sm font-bold">
            {project}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default ProjectsGrid;
