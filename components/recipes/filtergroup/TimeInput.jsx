"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Slider } from "@/components/ui/slider";
import { useRef, useState } from "react";
import FilterAction from "./FilterAction";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

const FormSchema = z.object({
  time: z.number().int(),
});

function TimeInput({
  filterHeading,
  filterLabel,
  unit,
  max,
  value,
  handleFilterChange,
  clearFilter,
}) {
  const [time, setTime] = useState(null);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      time: 0,
    },
  });
  const ref = useRef(null);

  function onSubmit(data) {
    handleFilterChange(time);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className="mb-6">
              <h4 className="text-base font-medium mb-4">{filterHeading}</h4>
              <p className="my-4">
                {filterLabel}
                <span className="text-primary font-medium mx-1">
                  {time === null ? value : time}
                </span>
                {unit}
              </p>
              <Slider
                defaultValue={[value]}
                min={10}
                max={max}
                step={10}
                ref={ref}
                onValueChange={() =>
                  setTime(
                    Number(ref.current.lastChild.children[0].ariaValueNow)
                  )
                }
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FilterAction clearFilter={clearFilter} />
      </form>
    </Form>
  );
}

export default TimeInput;
