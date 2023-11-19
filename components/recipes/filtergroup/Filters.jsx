"use client";

import { ListFilter, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckboxGroup } from "./CheckboxGroup";
import TimeInput from "./TimeInput";
import InputGroup from "./InputGroup";

function Filters({ filters, checkedItems, handleFilterApply, clearFilter }) {
  const onFilterApply = (by, data) => {
    const filterItems = filters[by].filter((item) => {
      return data.includes(item.id);
    });

    handleFilterApply({ [by]: filterItems });
  };

  return (
    <div className="my-2 md:mt-4 md:mb-1">
      <h3 className="flex items-center text-lg font-medium my-4 text-slate-800">
        <ListFilter size={18} strokeWidth={2} /> <span>Filters</span>
      </h3>
      <section>
        <div className="my-2 flex flex-wrap items-center">
          <Popover>
            <PopoverTrigger className="mb-5 mr-2">
              <span className="text-sm border p-[9px] rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in">
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
                  if (data.length) {
                    onFilterApply("cuisine", data);
                  }
                }}
                defaultItems={checkedItems.cuisine}
                clearFilter={() => clearFilter({ cuisine: [] })}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mb-5 mr-2">
              <span className="text-sm border p-[9px] rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in">
                Course
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-60 max-h-96 overflow-y-auto">
              <CheckboxGroup
                title="Select course"
                items={filters.course}
                handleFilterChange={(data) => {
                  if (data.length) {
                    onFilterApply("course", data);
                  }
                }}
                defaultItems={checkedItems.course}
                clearFilter={() => clearFilter({ course: [] })}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mb-5 mr-2">
              <span className="text-sm border p-[9px] rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in">
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
                title="Select diet"
                items={filters.diet}
                handleFilterChange={(data) => {
                  if (data.length) {
                    onFilterApply("diet", data);
                  }
                }}
                defaultItems={checkedItems.diet}
                clearFilter={() => clearFilter({ diet: [] })}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mb-5 mr-2">
              <span className="text-sm border p-[9px] rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in">
                Total Time
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-72 max-h-96 overflow-y-auto">
              <TimeInput
                filterHeading="Choose Time Duration"
                filterLabel="Time under"
                unit="mins"
                max={filters.maxTime}
                handleFilterChange={(value) =>
                  handleFilterApply({ totalTimeInMins: value })
                }
                clearFilter={() => clearFilter({ totalTimeInMins: 0 })}
                value={checkedItems.totalTimeInMins}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mb-5 mr-2">
              <span className="text-sm border p-[9px] rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in">
                Servings
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-64 max-h-96 overflow-y-auto">
              <InputGroup
                placeholder="Enter servings size"
                handleFilterChange={(value) =>
                  handleFilterApply({ servings: value })
                }
                clearFilter={() => clearFilter({ servings: 0 })}
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger className="mb-5 mr-2">
              <span className="text-sm border p-[9px] rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in">
                Calories
                <ChevronDown
                  size={20}
                  strokeWidth={1.6}
                  className="inline-block ml-px"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-64 max-h-96 overflow-y-auto">
              <InputGroup
                placeholder="Enter calorie count"
                handleFilterChange={(value) =>
                  handleFilterApply({ totalCaloriesInCal: value })
                }
                clearFilter={() => clearFilter({ totalCaloriesInCal: 0 })}
              />
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  );
}

export default Filters;
