import { Project } from "@/types/payload-types";

export async function fetchProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`,
      {
        next: { tags: ["projects"] },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const json = await res.json();

    return json["docs"] as Project[];

  } catch (error) {
    console.error(error);
  }

  return null;
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects?where[slug][equals]=${slug}`,
      {
        next: { tags: ['projects'] }
      }
    );

    if (!res.ok) throw new Error(`Failed to fetch project ${slug}`);

    const json = await res.json();
    
    return json.docs[0] as Project;
  } catch (error) {
    console.error(error);   
  }

  return null;
}

export async function fetchProjectIndex(): Promise<{ slug: string, name: string }[] | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects`,
      {
        next: { tags: ["projects"] },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const json = await res.json();

    return json.docs.map((doc: any) => ({
      slug: doc.slug,
      name: doc.title,
    }));

  } catch (error) {
    console.error(error);
  }

  return null;
}
