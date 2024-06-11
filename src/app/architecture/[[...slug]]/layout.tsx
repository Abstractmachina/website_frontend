import Footer from "@/components/blocks/globals/Footer";
import HeaderBlock from "@/components/blocks/globals/Header";
import NavbarLeft from "@/components/NavbarLeft";
import { fetchGlobals } from "@/utils/serverActions";
import Link from "next/link";

async function fetchProjectIndex() {
  const projects = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/projects", { next: { tags: ['projects'] } })
      .then((res) => res.json());

  return projects.docs.map((doc: any) => ({
    slug: doc.slug,
    name: doc.title,
  }));
}

async function ArchLayout({
  params,
  children,
}: {
  params: { slug?: string[] };
  children: React.ReactNode;
}) {
  const items = await fetchProjectIndex();
  const { header, footer } = await fetchGlobals();

  // =================		DOM			=======================

  return (
    <main className="fixed flex flex-col w-[100%] h-screen top-0 left-0">
      <HeaderBlock content={header} />
      <div className="flex flex-col overflow-y-auto h-full">
        <div className="flex flex-row h-full">
          <NavbarLeft baseUrl="architecture" items={items} />
          {children}
        </div>
        <Footer content={footer} />
      </div>
    </main>
  );
}

export default ArchLayout;
