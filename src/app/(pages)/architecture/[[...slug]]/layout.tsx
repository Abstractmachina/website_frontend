import Footer from "@/app/_components/_blocks/globals/Footer";
import HeaderBlock from "@/app/_components/_blocks/globals/Header";
import NavbarLeft from "@/app/_components/NavbarLeft";
import { fetchGlobals } from "@/utils/serverActions";
import Link from "next/link";
import TemplateArchitecture from "./adfasfsadfadtemplate";
import PageTransitionEffect from "@/app/_components/providers/PageTransitionEffect";
import Header from "@/app/_components/Header";
import Trackpoint from "@/app/_components/Trackpoint";

async function fetchProjectIndex() : Promise<{slug: string, name: string}[]>{
  const projects = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/projects", { next: { tags: ['projects'] } })
      .then((res) => res.json());

  return projects.docs.map((doc: any) => ({
    slug: doc.slug,
    name: doc.title,
  }));
}

async function LayoutArchitecture({
  params,
  children,
}: {
  params: { slug?: string[] };
  children: React.ReactNode;
}) {
  const items = await fetchProjectIndex();
  const { header } = await fetchGlobals();

  // =================		DOM			=======================

  return (
    <main className="fixed flex flex-row w-screen h-screen top-0 left-0">
      <Header />
      <NavbarLeft baseUrl="architecture" items={items}/>
      
      <Trackpoint />
      <PageTransitionEffect className="flex-shrink">
        {children}
      </PageTransitionEffect>
    </main>
  );
}

export default LayoutArchitecture;
