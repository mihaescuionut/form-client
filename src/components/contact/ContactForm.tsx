'use client';

import React from "react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "../ui/input";
import {Textarea} from "../ui/textarea";
import {useForm, SubmitHandler} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import {Loader2} from "lucide-react";
import {FormData} from "@/lib/types";
import Link from "next/link";


const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

const ContactForm = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            terms: false,
        },
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const res = await axios.post('http://localhost:3005', data);
            if (res.status === 201) {
                reset();
                toast.success('Form submitted successfully');
            } else toast.error('Something went wrong. Try again later!');

        } catch (e) {
            toast.error('Something went wrong. Try again later!');
            return;
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-full">
            <div
                className="flex flex-col space-y-10 md:flex-row md:space-x-4 md:space-y-0 md:justify-center md:items-center text-white">
                <div className="flex flex-col space-y-2 w-full">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className="bg-input p-6 rounded-none"
                    />
                    {errors.name && <span className="text-error">{errors.name.message}</span>}
                </div>

                <div className="flex flex-col space-y-2 w-full">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-input p-6 rounded-none"
                    />
                    {errors.email && <span className="text-error">{errors.email.message}</span>}
                </div>
            </div>

            <div className="flex flex-col space-y-2 text-white">
                <Label htmlFor="subject">What kind of subject are you looking for?</Label>
                <Input
                    {...register("subject")}
                    id="subject"
                    type="text"
                    placeholder="Select a subject"
                    className="bg-input p-6 rounded-none"
                />
                {errors.subject && <span className="text-error">{errors.subject.message}</span>}
            </div>

            <div className="flex flex-col space-y-2 text-white">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    {...register("message")}
                    id="message"
                    placeholder="Your Message"
                    rows={4}
                    className="bg-input rounded-none"
                />
                {errors.message && <span className="text-error">{errors.message.message}</span>}
            </div>

            <div className="flex flex-col justify-start space-x-2">
                <div className="flex space-x-2 items-center">
                    <input
                        type="checkbox"
                        {...register("terms")}
                        id="terms"
                    />
                    <label htmlFor="terms" className="text-white">
                        You agree to our friendly <Link href="/" className="underline">privacy policy</Link>
                    </label>
                </div>

                {errors.terms && <span className="text-error">{errors.terms.message}</span>}
            </div>

            {isSubmitting ?
                (
                    <Button disabled className="w-1/2 text-white rounded-none py-6">
                        <Loader2 className="animate-spin"/>
                        Please wait
                    </Button>

                ) : (
                    <Button
                        type="submit"
                        className="w-1/2 text-white rounded-none py-6"
                    >
                        Book your seat now
                    </Button>
                )
            }

        </form>
    );
};

export default ContactForm;
