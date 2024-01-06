"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from './ui/input';

type Props = {};

// 1. Form Schema
const formSchema = z.object({
    input: z.string().min(2).max(50),
});

const SearchInput = (props: Props) => {
    const router = useRouter();

    // 2. Defining form .
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    });

    // 3. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // ✅ This will be type-safe and validated.
        router.push(`/search/${values.input}`);
        form.reset();
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="input" render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="Search..." {...field} />
                        </FormControl>
                    </FormItem>
                )} />
            </form>
        </Form>
    )
}

export default SearchInput;