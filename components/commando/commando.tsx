"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CommandDialog } from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

export function Commando() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Ctrl+K (Windows) or ⌘K (Mac)
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setOpen(true);
      }

      // Close dialog on Escape
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Button
        className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2"
        onClick={() => setOpen(true)}
        size="default"
        variant="default"
      >
        GET Ink"D <Kbd>⌘K</Kbd>
      </Button>
      <CommandDialog onOpenChange={setOpen} open={open} className="h-[600px] w-[600px]" />
    </>
  );
}
