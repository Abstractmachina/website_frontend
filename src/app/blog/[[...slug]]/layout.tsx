import Footer from "@/components/blocks/globals/Footer";
import HeaderBlock from "@/components/blocks/globals/Header";
import NavbarLeft from "@/components/NavbarLeft";
import { fetchGlobals } from "@/utils/serverActions";

async function fetchBlogIndex() {
  const pages = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/blogPosts",
    {next:{tags:['blogPosts']}}
    ).then((res) => res.json());
    

  return pages.docs.map((doc: any) => ({
    slug: doc.slug,
    name: doc.title,
  }));
}

async function BlogLayout({
  params,
  children,
}: {
  params: { slug?: string[] };
  children: React.ReactNode;
}) {
  const items = await fetchBlogIndex();
    const { header, footer } = await fetchGlobals();
    
    console.log(items);

  // =================		DOM			=======================

  return (
    <main className="fixed flex flex-col w-[100%] h-screen top-0 left-0">
      <HeaderBlock content={header} />
      <div className="flex flex-col overflow-y-auto h-full">
        <div className="flex flex-row h-full">
          <NavbarLeft baseUrl="blog" items={items} />
          {children}
        </div>
        <Footer content={footer} />
      </div>
    </main>
  );
}

export default BlogLayout;
