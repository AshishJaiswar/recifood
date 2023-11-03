"use client";
import { Button } from "@/components/ui/button";

function FilterAction() {
  return (
    <div className="flex justify-between">
      <Button variant="outline" className="px-6">
        Clear
      </Button>
      <Button type="submit" className="px-6">
        Apply
      </Button>
    </div>
  );
}

export default FilterAction;
