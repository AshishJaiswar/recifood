import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RandomFilter() {
  return (
    <div className="flex flex-col justify-center items-center mb-4 sm:flex sm:flex-row sm:justify-center sm:mb-8">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Meal" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Meals</SelectLabel>
            <SelectItem value="random">Random</SelectItem>
            <SelectItem value="apple">Snacks</SelectItem>
            <SelectItem value="banana">Breakfast</SelectItem>
            <SelectItem value="blueberry">Lunch</SelectItem>
            <SelectItem value="grapes">Dinner</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px] my-2 mx-5 sm:my-0">
          <SelectValue placeholder="Select a Cuisine" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cuisine</SelectLabel>
            <SelectItem value="random">Random</SelectItem>
            <SelectItem value="indian">Indian</SelectItem>
            <SelectItem value="chinese">Breakfast</SelectItem>
            <SelectItem value="thai">Thai</SelectItem>
            <SelectItem value="french">French</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Diet" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Diet</SelectLabel>
            <SelectItem value="random">Random</SelectItem>
            <SelectItem value="veg">Veg</SelectItem>
            <SelectItem value="non-veg">Non Veg</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RandomFilter;
