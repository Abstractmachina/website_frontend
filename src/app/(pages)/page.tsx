import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href='/architecture'>Architecture</Link>
      <Link href='/programming'>Software Development</Link>
      <Link href={process.env.NEXT_PUBLIC_BACKEND_URL || "/"}>Personal</Link>
    </main>
  );
}
