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
    email: z.email("Make sure you're using a valid email format (a@b.co)"),
    username: z
        .string()
        .min(2, "Username length must be at least 2 characters")
        .regex(/^[A-Za-z0-9-_]+$/),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain at least one special character",
        ),
});

export default function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);

        try {
            const response = await fetch("register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok)
                {
                    console.log('Resonse from completed registration of user: ' + response);
                    throw new Error(`Response Status: ${response.status}`);
                }
            
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-md flex justify-center align-middle">
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FieldSet>
                    <FieldLegend>Register User</FieldLegend>
                    <FieldDescription>Sign up for an account!</FieldDescription>
                    <FieldGroup>
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>E-mail Address</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="text"
                                        placeholder="Email"
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
                        <Controller
                            name="username"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="username">
                                        Username to be displayed for multiworld
                                        signups
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="text"
                                        placeholder="User Name"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    )}
                                    <FieldDescription>
                                        Choose a unique username joining the
                                        multiworld.
                                    </FieldDescription>
                                </Field>
                            )}
                        />
                        <FieldSeparator />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="password"
                                        placeholder="Password"
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
