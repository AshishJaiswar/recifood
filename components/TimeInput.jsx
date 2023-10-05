import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function TimeInput() {
  return (
    <>
      <h4 className="text-base font-medium mb-4">Time Duration</h4>
      <Input type="number" placeholder="Enter time in minute" />
      <div className="flex justify-between mt-5">
        <Button variant="outline" className="px-6">
          Clear
        </Button>
        <Button type="submit" className="px-6">
          Apply
        </Button>
      </div>
    </>
  );
}

export default TimeInput;
