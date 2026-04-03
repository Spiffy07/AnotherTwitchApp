"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
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
import { toast } from "sonner";

const formSchema = z.object({
    username: z
        .string()
        .min(2, "Username length must be at least 2 characters")
        .regex(/^[A-Za-z0-9-_]+$/),
    password: z
        .string()
});

export default function LoginForm() {
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);

        try {
            const response = await fetch("/api/aspidentity/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                let errorResult = await response.json();
                toast.error(`Login Failed: ${errorResult.detail}`, {
                    position: "top-right",
                    classNames: {
                        content: "bg-green-500 flex flex-col gap-2",
                    },  
                    style: {
                        "--border-radius": "calc(var(--radius)  + 4px)",
                    } as React.CSSProperties,
                });
                throw new Error(`${await response.text()}`);
            }

            console.log(response);
            navigate("/multiworld");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-md flex justify-center align-middle">
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FieldSet>
                    <FieldLegend>User Login</FieldLegend>
                    <FieldDescription>
                        Login using your Username
                    </FieldDescription>
                    <FieldGroup>
                        <Controller
                            name="username"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Username</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        type="text"
                                        placeholder="Username"
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
                <Button variant="outline">Login</Button>
            </form>
        </div>
    );
}
