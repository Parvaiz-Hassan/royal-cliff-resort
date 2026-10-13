import ExperiencesClient from "./ExperiencesClient";
import { getExperiences } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function ExperiencesPage() {
  const experiences = await getExperiences();
  return <ExperiencesClient experiences={experiences} />;
}
