

export default function ArchLayout({ params, children }:
	{
		params: { slug?: string[] },
		children: React.ReactNode,
	}) {
	// const index = await getProjectIndex();

	// =================		DOM			=======================

	return (
		<main className="fixed flex min-h-full min-w-full top-0 left-0 justify-between">
			{children}
		</main>
	);
}