import Footer from "@/blocks/globals/Footer";
import HeaderBlock from "@/blocks/globals/Header";
import NavbarLeft from "@/components/NavbarLeft";
import { fetchGlobals } from "@/utils/serverActions";
import Link from "next/link";

async function fetchProjectIndex() {
  const pages = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/pages"
  ).then((res) => res.json());

  return pages.docs.map((doc: any) => ({
    slug: doc.slug,
    name: doc.name,
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
