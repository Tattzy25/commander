"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function Commando() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={() => setOpen(true)}
        size="default"
        variant="default"
      >
        GET Ink"D
      </Button>
      <CommandDialog onOpenChange={setOpen} open={open}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Command 1</span>
            </CommandItem>
            <CommandItem>
              <span>Command 2</span>
            </CommandItem>
            <CommandItem>
              <span>Command 3</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
