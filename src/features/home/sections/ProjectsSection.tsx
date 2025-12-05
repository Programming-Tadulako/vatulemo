import ProjectsList from "@/features/home/components/ProjectsList";

export default function ProjectSections() {
  return (
    <section id="projects" className="scroll-mt-28 md:scroll-mt-32">
      <div className="container space-y-8 px-8">
        <div className="space-y-2">
          <h2 className="text-pt-primary text-3xl font-bold lg:text-center lg:text-4xl">Project Showcase</h2>
          <p className="text-sm text-neutral-700 md:text-base lg:text-center">
            Intip karya keren dari para member, bukti nyata belajar sambil ngoding bareng
          </p>
        </div>

        <ProjectsList />
      </div>
    </section>
  );
}
