"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import FilterAction from "./FilterAction";
import { useRef } from "react";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

const FormSchema = z.object({
  count: z.number().int(),
});

function InputGroup({ placeholder, handleFilterChange, clearFilter }) {
  const count = useRef(null);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      count: 0,
    },
  });

  function onSubmit() {
    handleFilterChange(Number(count.current.value));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className="mb-6">
              <Input
                className="border p-2 mb-4 rounded-xl border-slate-300 hover:border-slate-500 hover:bg-slate-100 transition-all duration-100 ease-in"
                type="number"
                placeholder={placeholder}
                ref={count}
                required
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

export default InputGroup;
