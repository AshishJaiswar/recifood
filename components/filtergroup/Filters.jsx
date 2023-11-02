"use client";

import { ListFilter, ChevronDown, XCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckboxGroup } from "./CheckboxGroup";
import TimeInput from "./TimeInput";

function Filters() {
  const cuisines = [
    {
      id: "indian",
      label: "Indian",
    },
    {
      id: "european",
      label: "European",
    },
    {
      id: "rajasthani",
      label: "Rajasthani",
    },
    {
      id: "jharkhand",
      label: "Jharkhand",
    },
    {
      id: "lucknowi",
      label: "Lucknowi",
    },
  ];
  const meals = [
    {
      id: "snacks",
      label: "Snacks",
    },
    {
      id: "lunch",
      label: "Lunch",
    },
    {
      id: "dinner",
      label: "dinner",
    },
  ];
  const diets = [
    {
      id: "veg",
      label: "Vegetarian",
    },
    {
      id: "non-veg",
      label: "Non Vegetarian",
    },
    {
      id: "high-protein",
      label: "Hign Protein",
    },
  ];
  return (
    <div className="my-2 md:my-6">
      <h3 className="flex items-center text-lg font-medium my-1 text-slate-800">
        <ListFilter size={18} strokeWidth={2} /> <span>Filters</span>
      </h3>
      <section>
        <div className="my-2">
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mr-2">
                Cuisines
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-56 max-h-96 overflow-y-auto">
              <CheckboxGroup title="Select Cuisines" items={cuisines} />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mt-2 mr-2">
                Meal
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-56 max-h-96 overflow-y-auto">
              <CheckboxGroup title="Select Meal" items={meals} />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mt-2 mr-2">
                Diet
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-56 max-h-96 overflow-y-auto">
              <CheckboxGroup title="Select Diet Type" items={diets} />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mt-2 mr-2">
                Prep Time
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-64 max-h-96 overflow-y-auto">
              <TimeInput
                filterHeading="Choose Time Duration"
                filterLabel="Prep time"
                unit="min"
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mt-2 mr-2">
                Cooking Time
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-64 max-h-96 overflow-y-auto">
              <TimeInput
                filterHeading="Choose Time Duration"
                filterLabel="Cooking time"
                unit="min"
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mt-2 mr-2">
                Servings
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-64 max-h-96 overflow-y-auto">
              <TimeInput
                filterHeading="Total Servings"
                filterLabel="Servings upto"
                unit=""
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="mb-2">
          {/* This button will be displayed if user selected any filter */}
          <Button
            type="reset"
            variant="secondary"
            className="rounded-xl"
            size="sm"
          >
            <XCircle size={20} strokeWidth={1.6} className="mr-1" />
            Clear All
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Filters;
