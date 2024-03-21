import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/example1">Example 1</Link>
      <Link href="/example2">Example 2</Link>
    </main>
  );
}
