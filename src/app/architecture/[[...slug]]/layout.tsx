import Footer from "@/components/blocks/globals/Footer";
import HeaderBlock from "@/components/blocks/globals/Header";
import NavbarLeft from "@/components/NavbarLeft";
import { fetchGlobals } from "@/utils/serverActions";
import Link from "next/link";
import TemplateArchitecture from "./template";

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

  console.log("layout arch");
  console.log(items);
  // =================		DOM			=======================

  return (
    <main className="fixed flex flex-col w-[100%] h-screen top-0 left-0">
      {/* <HeaderBlock content={header} /> */}
      <TemplateArchitecture key={params.slug?.join('/')} items={items}>
        {children}
      </TemplateArchitecture>
      {/* <div className="flex flex-col overflow-y-auto h-full">
        <div className="flex flex-row">
          <NavbarLeft baseUrl="architecture" items={items} />
          {children}
        </div>
        <Footer content={footer} />
      </div> */}
    </main>
  );
}

export default LayoutArchitecture;
