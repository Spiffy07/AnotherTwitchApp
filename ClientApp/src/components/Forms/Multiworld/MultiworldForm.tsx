"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  session: z.string().nonempty("Choose a valid multiworld session"),
  additionalComments: z
    .string()
    .min(2, "Comments must be at least 2 characters long"),
  username: z.string().min(2, "Username must be at least 2 characters long"),
});

export default function MultiworldForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      session: "0",
      username: "",
      additionalComments: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="w-full max-w-md flex justify-center align-middle">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldLegend>Multiworld Signup</FieldLegend>
          <FieldDescription>
            Fill in the form below to join my multiworld sessions!
          </FieldDescription>
          <FieldGroup>
            <Controller
              name="session"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Multiworld Session</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger aria-invalid={fieldState.invalid}>
                      <SelectValue placeholder="Choose Session" />
                    </SelectTrigger>
                    <SelectContent {...field}>
                      <SelectItem value="0">Choose a Session</SelectItem>
                      <SelectItem value="12-13-25">
                        December 13th, 2025 (7:00pm CST)
                      </SelectItem>
                      <SelectItem value="12-27-25">
                        December 27th, 2025 (7:00pm CST)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <FieldDescription>
                    Select Which Multiworld session you would like to
                    participate in.
                  </FieldDescription>
                </Field>
              )}
            />
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder="Your Username Here"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <FieldDescription>
                    Choose a unique username joining the multiworld.
                  </FieldDescription>
                </Field>
              )}
            />
            <FieldSeparator />
            <Controller
              name="additionalComments"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Comments</FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    placeholder="Add any additional comments"
                    className="resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <br />
        <Button variant="outline">Submit</Button>
        <FieldDescription>
          This doesn't work yet, it only refreshes the page...
        </FieldDescription>
      </form>
    </div>
  );
}
