"use client";

import AIChatButton from "@/components/AIChatButton";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Plus } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const { theme } = useTheme();

  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center gap-1">
            <span className="font-bold">AI-NOTES</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ThemeToggleButton />
            <Button onClick={() => setShowAddEditNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <AIChatButton />
          </div>
        </div>
      </div>
      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
