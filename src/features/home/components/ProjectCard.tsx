import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  username: string;
  description: string;
  url: string;
  screenshot: string;
}

export default function ProjectCard({ title, username, description, url, screenshot }: ProjectCardProps) {
  const isGithubUrl = url.includes("github.com");
  const blurDataUrl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAANElEQVQIW2OUt0z9z4AHMKo4FsIVVGX5g5V62Osz2IU3gdmM6ZXLwQpO3HgMFrDQkEUxDwAwhAwbQ/DQoQAAAABJRU5ErkJggg==";

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="bg-muted relative aspect-video overflow-hidden">
        <Image
          src={screenshot}
          alt={`${title} Screenshot`}
          placeholder="blur"
          blurDataURL={blurDataUrl}
          width={500}
          height={350}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <CardTitle className="truncate text-lg font-bold">{title}</CardTitle>
            <CardDescription className="mt-1 flex items-center gap-1">
              <Github className="h-3 w-3" />
              <span className="truncate">@{username}</span>
            </CardDescription>
          </div>
          <Badge variant={isGithubUrl ? "secondary" : "default"} className="shrink-0">
            {isGithubUrl ? "Repo" : "Live"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{description}</p>

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-pt-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <span>View Project</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
