"use client";

import { ShowMore } from "@/components/ui/show-more";
import { PROJECTS } from "@/features/home/constants";
import ProjectCard from "@/features/home/components/ProjectCard";

export default function ProjectsList() {
  return (
    <ShowMore
      items={PROJECTS}
      initialCount={6}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      renderItem={(project) => (
        <ProjectCard
          title={project.title}
          username={project.username}
          description={`Created by ${project.username} as part of Programming Tadulako's learning journey. This project demonstrates the practical application of web development skills and modern technologies learned through our community program.`}
          url={project.url}
          screenshot={`https://api.microlink.io/?url=${project.url}&screenshot=true&embed=screenshot.url`}
        />
      )}
    />
  );
}
