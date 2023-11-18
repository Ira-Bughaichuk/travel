"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';
import toast from "react-hot-toast";

import { ConfigFormContacts } from "@/utils/types";

import Close from "../public/assets/icons/close.svg";

const defaultStateContacts: ConfigFormContacts = {
  fullName: "",
  email: "",
  message: "",
};

export const ContactsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, 
    setValue,
    reset,
  } = useForm<ConfigFormContacts>({ mode: "onBlur" });

  useFormPersist('contactsForm', {watch, setValue});

  const onSubmit: SubmitHandler<ConfigFormContacts> = (data) => {
    toast(`
        Full Name:${data.fullName},
        Email:${data.email},
        Message:${data.message || ""}`);
    reset();
  };
  return (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      className="tablet:flex-1 desktop:w-[607px]"
    >
      <div className="mb-4 desktop:mb-6 w-full flex flex-col gap-y-6 tablet:gap-x-5 desktop:gap-y-[40px]  tablet:flex-row  desktop:flex-col">
        <div className="desktop:w-full flex flex-col gap-y-[25px] tablet:gap-y-7 desktop:flex-row desktop:gap-x-5">
          <div className="flex flex-col tablet:w-[221px] desktop:w-full relative">
            <label className="label" htmlFor="contact-name">
              Full name
            </label>
            <input
              id="contact-name"
              autoComplete="name"
              aria-label="Name"
              className="input"
              placeholder="John Smith"
              {...register("fullName", {
                required: "Incorrect name",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Enter only words",
                },
              })}
            />
            <div className="flex justify-end absolute bottom-[-22px] right-0">
              {errors?.fullName && (
                <div className="flex fle-row items-center">
                  <Image
                    src={Close}
                    alt="Close Icon"
                    className="w-[18px] h-[18px]"
                  />
                  <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                    {errors?.fullName?.message}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className=" flex flex-col tablet:w-[221px] desktop:w-full relative">
            <label className="label" htmlFor="contact-email">
              E-mail
            </label>
            <input
              id="contact-email"
              autoComplete="email"
              aria-label="Email"
              className="input"
              type="e-mail"
              placeholder="johnsmith@email.com"
              {...register("email", {
                required: "This is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email",
                },
              })}
            />
            <div className="flex justify-end absolute bottom-[-22px] right-0">
              {errors?.email && (
                <div className="flex fle-row items-center">
                  <Image
                    src={Close}
                    alt="Close Icon"
                    className="w-[18px] h-[18px]"
                  />
                  <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                    {errors?.email?.message}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col relative">
          <label className="label" htmlFor="contact-message">
            Message
          </label>
          <textarea
            id="contact-message"
            autoComplete="message"
            aria-label="Message"
            className="textarea h-[193px] tablet:h-[221px] desktop:h-[174px] resize-none"
            {...register("message", { required: "This is required" })}
          />
          <div className="flex justify-end absolute bottom-0 right-0">
            {errors?.message && (
              <div className="flex fle-row items-center">
                <Image
                  src={Close}
                  alt="Close Icon"
                  className="w-[18px] h-[18px]"
                />
                <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                  {errors?.message?.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button  className="active-btn text-primary uppercase text-3xl font-medium leading-normal desktop:text-[32px] outline-none border-none"
          type="submit" > send </button>
      </div>
    </form>
  );
};
