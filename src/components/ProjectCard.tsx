import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

const ProjectCard = ({ title, description, tags, href }: ProjectCardProps) => {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Reveal>
      <Wrapper
        {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
        className="group block"
      >
        <Card className="transition-transform duration-300 hover:-translate-y-1 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{title}</span>
              {href && <ArrowUpRight className="opacity-60 group-hover:opacity-100 transition-opacity" />}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md bg-accent/10">
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Wrapper>
    </Reveal>
  );
};

export default ProjectCard;
