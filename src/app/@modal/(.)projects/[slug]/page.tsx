import { projects } from "@/data/projects";
import { CaseStudyContent } from "@/components/sections/CaseStudyContent";
import { ModalWrapper } from "@/components/layout/ModalWrapper";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectModalPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <ModalWrapper>
      <CaseStudyContent project={project} />
    </ModalWrapper>
  );
}
