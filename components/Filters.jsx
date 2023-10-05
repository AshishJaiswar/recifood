import { ListFilter, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckboxGroup } from "./CheckboxGroup";
import TimeInput from "./TimeInput";

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

function Filters() {
  return (
    <div className="my-2 md:my-6">
      <h3 className="flex items-center text-lg font-medium p-1 text-slate-800">
        <ListFilter size={18} strokeWidth={2} />{" "}
        <span className="ml-1">Filters</span>
      </h3>
      <div className="p-1">
        <Popover>
          <PopoverTrigger className="mr-2 mt-2">
            <Button className="rounded-xl" variant="outline" size="sm">
              Cuisines <ChevronDown size={20} strokeWidth={1.6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 max-h-96 overflow-y-auto">
            <CheckboxGroup title="Select Cuisines" items={cuisines} />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="mr-2 mt-2">
            <Button className="rounded-xl" variant="outline" size="sm">
              Meal <ChevronDown size={20} strokeWidth={1.6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 max-h-96 overflow-y-auto">
            <CheckboxGroup title="Select Meal" items={meals} />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="mr-2 mt-2">
            <Button className="rounded-xl" variant="outline" size="sm">
              Diet <ChevronDown size={20} strokeWidth={1.6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 max-h-96 overflow-y-auto">
            <CheckboxGroup title="Select Diet Type" items={diets} />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="mr-2 mt-2">
            <Button className="rounded-xl" variant="outline" size="sm">
              Prep Time <ChevronDown size={20} strokeWidth={1.6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 max-h-96 overflow-y-auto">
            <TimeInput />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger className="mt-2">
            <Button className="rounded-xl" variant="outline" size="sm">
              Cooking Time <ChevronDown size={20} strokeWidth={1.6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 max-h-96 overflow-y-auto">
            <TimeInput />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default Filters;
