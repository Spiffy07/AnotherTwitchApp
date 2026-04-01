"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

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

const nextSessionText = "March 21st/22nd, 2026 at 7:00pm Central"; // TODO: use date/time objects
const nextSessionValue = "3-21-26";
const followingSessionText = "April 4th/5th, 2026 at 7:00pm Central";
const followingSessionValue = "4-4-26";

const formSchema = z.object({
    session: z.string().nonempty("Choose a valid multiworld session"),
    additionalComments: z.string(),
    // .min(2, "Comments must be at least 2 characters long"),
    username: z.string(),
});

export default function MultiworldForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            session: "",
            username: "",
            additionalComments: "",
        },
    });

    async function getUserInfo() {
        try {
            const response = await fetch("/api/aspidentity/getusername", {
                method: "GET",
                credentials: "include", // Essential for cookie-based auth
            });

            if (response.ok) {
                const data = await response.json();
                // Data usually contains email, isEmailConfirmed, and custom claims
                // if configured in the backend to be included in the profile.
                return data;
            } else {
                //console.error("unknown error");
                throw new Error("Unauthorized " + (await response.json()));
            }
        } catch (error) {
            console.error("Failed to fetch: ", error);
        }
    }

    async function onSubmit(data: z.infer<typeof formSchema>) {
        // toast("You submitted the following values:", {
        //     description: (
        //         <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
        //             <code>{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        //     position: "bottom-center",
        //     classNames: {
        //         content: "flex flex-col gap-2",
        //     },
        //     style: {
        //         "--border-radius": "calc(var(--radius)  + 4px)",
        //     } as React.CSSProperties,
        // });

        console.log(data);
        const retrievedUsername = await getUserInfo();

        try {
            if (!retrievedUsername) {
                throw new Error("Failed to retrieve username");
            }

            data.username = retrievedUsername.username;

            const response = await fetch("/api/playerform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error(`${await response.text()}`);

            const result = await response.json();
            console.log(result);

            toast.success("Form Submitted Successfully!", {
                description: (
                    <div className="bg-green-500 mt-2 w-[320px] overflow-x-visible rounded-md p-4">
                        Username: {data.username} Session: {data.session}
                    </div>
                ),
                position: "bottom-center",
                classNames: {
                    content: "bg-green-500 flex flex-col gap-2",
                },
                style: {
                    "--border-radius": "calc(var(--radius)  + 4px)",
                } as React.CSSProperties,
            });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong...", {
                description: <div>{String(error)}</div>,
                position: "bottom-center",
                style: {
                    "--border-radius": "calc(var(--radius) + 4px",
                } as React.CSSProperties,
            });
        }
    }

    return (
        <div className="w-full max-w-md flex justify-center align-middle items-center">
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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
                                    <FieldLabel htmlFor="session">
                                        Multiworld Session
                                    </FieldLabel>
                                    <Select
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger
                                            aria-invalid={fieldState.invalid}
                                        >
                                            <SelectValue placeholder="Choose Session" />
                                        </SelectTrigger>
                                        <SelectContent {...field}>
                                            <SelectItem
                                                value={nextSessionValue}
                                            >
                                                {" "}
                                                {nextSessionText}
                                            </SelectItem>
                                            <SelectItem
                                                value={followingSessionValue}
                                            >
                                                {followingSessionText}
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                    <FieldDescription>
                                        Select Which Multiworld session you
                                        would like to participate in.
                                    </FieldDescription>
                                </Field>
                            )}
                        />
                        {/* <Controller
                            name="username"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="username">
                                        Username
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="text"
                                        placeholder="Your Username Here"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                    <FieldDescription>
                                        Choose a unique username. Used for
                                        joining the multiworld.
                                    </FieldDescription>
                                </Field>
                            )}
                        /> */}
                        <Controller
                            name="additionalComments"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="additionalComments">
                                        Comments
                                    </FieldLabel>
                                    <Textarea
                                        {...field}
                                        id={field.name}
                                        placeholder="Add any additional comments"
                                        className="resize-none"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </FieldSet>
                <br />
                <Button onClick={form.handleSubmit(onSubmit)} variant="outline">
                    Submit
                </Button>
            </form>
        </div>
    );
}
