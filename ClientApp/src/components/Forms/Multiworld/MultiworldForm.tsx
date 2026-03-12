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

const formSchema = z.object({
    session: z.string().nonempty("Choose a valid multiworld session"),
    additionalComments: z.string(),
    // .min(2, "Comments must be at least 2 characters long"),
    username: z.string().min(2, "Username must be at least 2 characters long"),
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
            } else if (response.status === 401) {
                console.warn("User is not authenticated");
                throw new Error("user not authenticated");
            } else {
                console.error("unknown error");
                throw new Error("Unknown error" + (await response.json()));
            }
        } catch (error) {
            console.error("Failed to fetch security context:", error);
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

            data.username = retrievedUsername;

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
        <div className="w-full max-w-md flex justify-center align-middle">
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
                                            <SelectItem value="2-7-26">
                                                {" "}
                                                {/* TODO: variables for dates and Text */}
                                                February 7th, 2026 (7:00pm CST)
                                            </SelectItem>
                                            <SelectItem value="2-21-26">
                                                February 21st, 2026 (7:00pm CST)
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
                <Button variant="outline">Submit</Button>
            </form>
        </div>
    );
}
