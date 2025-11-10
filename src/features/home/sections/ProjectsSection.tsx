import ProjectCard from "../components/ProjectCard";

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              username={project.username}
              description={project.description}
              url={project.url}
              screenshot={`https://api.microlink.io/?url=${project.url}&screenshot=true&embed=screenshot.url`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    id: 1,
    title: "Bagus Garden",
    username: "diL-duL",
    description:
      "A beautiful garden management system with features for plant tracking, watering schedules, and growth monitoring. Built with modern web technologies.",
    url: "https://github.com/diL-duL/bagusGarden",
  },
  {
    id: 2,
    title: "Serayapus",
    username: "serayapus",
    description:
      "An innovative web application showcasing creative solutions and interactive user experiences with responsive design.",
    url: "https://serayapus.netlify.app/",
  },
  {
    id: 3,
    title: "Submission Soyuz",
    username: "farizzidirli",
    description:
      "A comprehensive project submission platform designed for the Soyuz program, featuring modern UI and seamless navigation.",
    url: "https://submission-soyuz-farizzidirli.vercel.app/",
  },
  {
    id: 4,
    title: "Submission Soyuz",
    username: "Lieff246",
    description: "A well-crafted submission project with clean code architecture and user-friendly interface design.",
    url: "https://lieff246.github.io/Submission-Soyuz/",
  },
  {
    id: 5,
    title: "Submission Soyuz",
    username: "yulii18",
    description:
      "An elegant solution for project submissions with focus on user experience and performance optimization.",
    url: "https://github.com/yulii18/submission_soyuz.git",
  },
  {
    id: 6,
    title: "Home Project",
    username: "community-member",
    description: "A creative home page design with interactive elements and modern styling approaches.",
    url: "https://inquisitive-babka-201d43.netlify.app/home",
  },
  {
    id: 7,
    title: "InfraScan",
    username: "andizazz",
    description:
      "An infrastructure scanning tool that helps monitor and analyze system resources with real-time updates.",
    url: "https://andizazz.github.io/infrascan/",
  },
  {
    id: 8,
    title: "Happy Keliling",
    username: "Raaiyaann",
    description: "A travel and tour application designed to make exploring new destinations easier and more enjoyable.",
    url: "https://happykeliling.netlify.app/",
  },
  {
    id: 9,
    title: "Travel",
    username: "Farhan1705",
    description:
      "A comprehensive travel guide application with destination recommendations and trip planning features.",
    url: "https://travelbeautifulindonesia.vercel.app/",
  },
  {
    id: 10,
    title: "Sulteng Hidden Gem",
    username: "sulteng-explorer",
    description: "Discover hidden tourist destinations in Central Sulawesi with detailed guides and beautiful imagery.",
    url: "https://sultenghiddengem.netlify.app/",
  },
  {
    id: 11,
    title: "Submission Project",
    username: "dila461",
    description:
      "A thoughtfully designed submission project demonstrating strong technical skills and attention to detail.",
    url: "https://github.com/dila461/submission.git",
  },
];
