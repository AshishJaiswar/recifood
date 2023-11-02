import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RandomFilter({ filters, handleSelect }) {
  return (
    <div className="flex flex-col justify-center items-center mb-4 sm:flex sm:flex-row sm:justify-center sm:mb-8">
      <Select onValueChange={(value) => handleSelect({ meal: value })}>
        <SelectTrigger className="w-[180px] lg:w-[200px] m-2">
          <SelectValue placeholder="Select a Meal" />
        </SelectTrigger>
        <SelectContent className="h-72 overflow-y-scroll">
          <SelectGroup>
            <SelectLabel>Meals</SelectLabel>
            <SelectItem value="random">Random</SelectItem>
            {filters.meal.map(({ course }, index) => (
              <SelectItem key={index} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleSelect({ diet: value })}>
        <SelectTrigger className="w-[180px] lg:w-[200px] m-2">
          <SelectValue placeholder="Select a Diet" />
        </SelectTrigger>
        <SelectContent className="h-72 overflow-y-scroll">
          <SelectGroup>
            <SelectLabel>Diet</SelectLabel>
            <SelectItem value="random">Random</SelectItem>
            {filters.diet.map(({ diet }, index) => (
              <SelectItem key={index} value={diet}>
                {diet}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RandomFilter;
