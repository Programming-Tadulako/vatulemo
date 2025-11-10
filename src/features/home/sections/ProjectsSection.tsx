import { StaggerContainer, StaggerItem } from "@/components/animations/stagger";
import { PROJECTS } from "@/features/home/constants";
import ProjectCard from "@/features/home/components/ProjectCard";

export default function ProjectSections() {
  return (
    <section id="projects" className="scroll-mt-28 md:scroll-mt-32">
      <div className="container space-y-8 px-8">
        <div className="space-y-2">
          <h2 className="text-pt-primary text-3xl font-bold lg:text-center lg:text-4xl">Project Showcase</h2>
          <p className="text-sm text-neutral-700 md:text-base lg:text-center">
            Showcasing amazing projects built by our talented community members. Each project represents creativity,
            dedication, and technical excellence.
          </p>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          useInView={true}
          staggerChildren={0.1}
          delayChildren={0.4}
        >
          {PROJECTS.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                title={project.title}
                username={project.username}
                description={`Created by ${project.username} as part of Programming Tadulako's learning journey. This project demonstrates the practical application of web development skills and modern technologies learned through our community program.`}
                url={project.url}
                screenshot={`https://api.microlink.io/?url=${project.url}&screenshot=true&embed=screenshot.url`}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
