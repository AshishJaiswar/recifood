"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useRef, useState } from "react";

function TimeInput({ filterLabel }) {
  const [time, setTime] = useState(0);
  const ref = useRef(null);

  return (
    <>
      <h4 className="text-base font-medium mb-4">Choose Time Duration</h4>
      {/* <Input type="number" placeholder="Enter time in minute" /> */}
      <p className="mb-4">
        {filterLabel} time within{" "}
        <span className="text-primary font-medium">{time}</span> min
      </p>
      <Slider
        defaultValue={[0]}
        max={100}
        step={5}
        ref={ref}
        onValueChange={() =>
          setTime(ref.current.lastChild.children[0].ariaValueNow)
        }
      />
      <div className="flex justify-between mt-8">
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
