import Image from "next/image";
import Banner from "./components/banner/Banner";
import Container from "./components/Container";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import { projects } from "@/constants/projects";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <Container>
      <Banner />
      <br />
      <Heading title="Projects" subtitle="프로젝트 보러오세요!" center />
      <br />
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {projects.map((project, idx) => {
          return <ProjectsGrid key={idx} projects={project} />;
        })}
      </div>
    </Container>
  );
}
