'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Define the type for form data
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  terms: boolean; // Ensure `terms` is of type `boolean`
};

// Define the validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
  terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"), // Ensure terms is required
});

const ContactForm = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
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

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 w-full">
      <div className="flex space-x-8 text-white">
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
          Accept terms and conditions
        </label>
        </div>
       
        {errors.terms && <span className="text-error">{errors.terms.message}</span>}
      </div>

      <Button
        type="submit"
        className="w-1/2 text-white rounded-none py-6"
      >
        Book your seat now
      </Button>
    </form>
  );
};

export default ContactForm;
