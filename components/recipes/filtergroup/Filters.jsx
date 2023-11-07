"use client";

import { ListFilter, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckboxGroup } from "./CheckboxGroup";
import TimeInput from "./TimeInput";
import { Input } from "@/components/ui/input";
import FilterAction from "./FilterAction";

function Filters({ filters, checkedItems, handleFilterApply, clearFilter }) {
  const onFilterApply = (data, by) => {
    const filterItems = filters[by].filter((item) => {
      return data.includes(item.id);
    });

    handleFilterApply({ [by]: filterItems });
  };

  return (
    <div className="my-2 md:mt-4 md:mb-1">
      <h3 className="flex items-center text-lg font-medium my-1 text-slate-800">
        <ListFilter size={18} strokeWidth={2} /> <span>Filters</span>
      </h3>
      <section>
        <div className="my-2">
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mr-2">
                Cuisine
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-60 max-h-96 overflow-y-auto">
              <CheckboxGroup
                title="Select cuisine"
                items={filters.cuisine}
                handleFilterChange={(data) => {
                  onFilterApply(data, "cuisine");
                }}
                defaultItems={checkedItems.cuisine}
                clearFilter={() => clearFilter("cuisine")}
              />
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
            <PopoverContent className="w-60 max-h-96 overflow-y-auto">
              <CheckboxGroup
                title="Select Meal"
                items={filters.course}
                handleFilterChange={(data) => {
                  onFilterApply(data, "course");
                }}
                defaultItems={checkedItems.course}
                clearFilter={() => clearFilter("course")}
              />
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
            <PopoverContent className="w-60 max-h-96 overflow-y-auto">
              <CheckboxGroup
                title="Select Diet Type"
                items={filters.diet}
                handleFilterChange={(data) => {
                  onFilterApply(data, "diet");
                }}
                defaultItems={checkedItems.diet}
                clearFilter={() => clearFilter("diet")}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mt-2 mr-2">
                Total Time
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
                filterLabel="Time"
                unit="mins"
                max={filters.maxTime}
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
              <Input
                className="mb-6"
                type="number"
                placeholder="Enter serving size"
              />
              <FilterAction />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mt-2 mb-4">
              <span className="border p-2 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in mt-2 mr-2">
                Calories
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-64 max-h-96 overflow-y-auto">
              <Input
                className="mb-6"
                type="number"
                placeholder="Enter calories"
              />
              <FilterAction />
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  );
}

export default Filters;
