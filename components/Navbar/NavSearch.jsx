"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

function NavSearch() {
  return (
    <>
      {/* Search Input Desktop */}
      <div className="hidden w-full max-w-sm items-center space-x-2 lg:flex">
        <Input id="search-input" type="text" placeholder="Search recipe" />
        <Button
          id="search-btn"
          variant="outline"
          type="submit"
          className="bg-slate-900 text-slate-50"
        >
          Search
        </Button>
      </div>
      {/* Search Input Mobile */}
      <div className="lg:hidden">
        <Button id="search-btn-icon" variant="ghost" size="icon">
          <Search size={30} strokeWidth={1} color="#393E41" />
        </Button>
      </div>
    </>
  );
}

export default NavSearch;
