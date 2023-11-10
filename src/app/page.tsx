import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          AI-NOTES
        </span>
      </div>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
