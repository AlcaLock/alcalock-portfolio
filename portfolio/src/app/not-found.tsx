import Link from "next/link";


export default function RootNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b0f] text-[#edeff3]">
      <Link href="/" className="text-[#3ed6b5]">
        404 — Back to home
      </Link>
    </main>
  );
}