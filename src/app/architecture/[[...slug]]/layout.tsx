import NavbarLeft from "@/components/NavbarLeft";
import Link from "next/link";


async function fetchProjectIndex() {
	const pages = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/pages').then((res) => res.json())
	
	return pages.docs.map((doc:any) => ({
		slug: doc.slug,
		name: doc.name,
	}));
  }

async function ArchLayout({ params, children }:
	{
		params: { slug?: string[] },
		children: React.ReactNode,
	}) {
	const items = await fetchProjectIndex();

	// =================		DOM			=======================

	return (
		<main className="fixed flex flex-row w-[100%] h-[100%] top-0 left-0 justify-between overflow-hidden">
			<NavbarLeft items={ items } />
			{children}
		</main>
	);
}

export default ArchLayout;