import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container py-10">
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </>
  );
}
