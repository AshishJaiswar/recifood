"use client";

import { ListFilter, ChevronDown, XCircle } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
          <HoverCard>
            <HoverCardTrigger>
              <Button
                className="rounded-xl mt-2 mr-2"
                variant="outline"
                size="sm"
              >
                Cuisines <ChevronDown size={20} strokeWidth={1.6} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-56 max-h-96 overflow-y-auto">
              <CheckboxGroup title="Select Cuisines" items={cuisines} />
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Button
                className="rounded-xl mt-2 mr-2"
                variant="outline"
                size="sm"
              >
                Meal <ChevronDown size={20} strokeWidth={1.6} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-56 max-h-96 overflow-y-auto">
              <CheckboxGroup title="Select Meal" items={meals} />
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Button
                className="rounded-xl mt-2 mr-2"
                variant="outline"
                size="sm"
              >
                Diet <ChevronDown size={20} strokeWidth={1.6} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-56 max-h-96 overflow-y-auto">
              <CheckboxGroup title="Select Diet Type" items={diets} />
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Button
                className="rounded-xl mt-2 mr-2"
                variant="outline"
                size="sm"
              >
                Prep Time <ChevronDown size={20} strokeWidth={1.6} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 max-h-96 overflow-y-auto">
              <TimeInput
                filterHeading="Choose Time Duration"
                filterLabel="Prep time"
                unit="min"
              />
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Button
                className="rounded-xl mt-2 mr-2"
                variant="outline"
                size="sm"
              >
                Cooking Time <ChevronDown size={20} strokeWidth={1.6} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 max-h-96 overflow-y-auto">
              <TimeInput
                filterHeading="Choose Time Duration"
                filterLabel="Cooking time"
                unit="min"
              />
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <Button
                className="rounded-xl mt-2 mr-2"
                variant="outline"
                size="sm"
              >
                Servings <ChevronDown size={20} strokeWidth={1.6} />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64 max-h-96 overflow-y-auto">
              <TimeInput
                filterHeading="Total Servings"
                filterLabel="Servings upto"
                unit=""
              />
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="my-2">
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
