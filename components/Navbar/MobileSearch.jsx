"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import SearchForm from "./SearchForm";

function MobileSearch() {
  return (
    <Popover>
      <PopoverTrigger>
        <Search size={30} strokeWidth={1} color="#393E41" />
      </PopoverTrigger>
      <PopoverContent>
        <SearchForm />
      </PopoverContent>
    </Popover>
  );
}

export default MobileSearch;
