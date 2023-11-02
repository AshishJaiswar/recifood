"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useRef, useState } from "react";

function TimeInput({ filterHeading, filterLabel, unit }) {
  const [time, setTime] = useState(0);
  const ref = useRef(null);

  return (
    <>
      <h4 className="text-base font-medium mb-4">{filterHeading}</h4>
      <p className="mb-4">
        {filterLabel}
        <span className="text-primary font-medium"> {time} </span>
        {unit}
      </p>
      <Slider
        defaultValue={[0]}
        max={900}
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
