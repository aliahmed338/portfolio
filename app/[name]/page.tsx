import { PROJECT_DETAILS } from "@/data/data";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/projectDetails/ProjectDetails";

// Define the type for params
type Props = {
  params: Promise<{ name: string }>;
};

const Page = async ({ params }: Props) => {
  const { name } = await params;
  const project = PROJECT_DETAILS.find((p) => p.name === name);

  if (!project || !project.images[0]) {
    notFound();
  }

  return <ProjectDetails project={project} />;
};

export default Page;
