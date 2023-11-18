"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useFormPersist from 'react-hook-form-persist';

import Close from "/public/assets/icons/close.svg";
import toast  from 'react-hot-toast';
import { ConfigFormCareer } from "@/utils/types";


const defaultStateCareer: ConfigFormCareer = {
  fullName: "",
  email: "",
  position: "",
  phone: "",
  messages: "",
  isAgree: false,
};
export const CareerForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(defaultStateCareer.isAgree);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ConfigFormCareer>({ mode: "onBlur" });

  useFormPersist('careerForm', {watch, setValue});

  const onSubmit: SubmitHandler<ConfigFormCareer> = (data) => {
    toast(
      `Full Name:${data.fullName},
         Email:${data.email},
         Phone:${data.phone},
         Messages:${data.messages || ""},
            ${
              data.isAgree
                ? "Consent to the processing of personal data."
                : "Not consenting to the processing of personal data."
            }`
    );
    reset();
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="text-primary flex flex-col gap-y-4 tablet:flex-row tablet:gap-x-5 desktop:gap-x-6 ">
          <div className="flex flex-col gap-y-4 desktop:gap-y-[26px] desktop:w-[290px]">
            <div className="flex flex-col relative">
              <label className="label" htmlFor="career-name">Full name</label>
              <input
                id="career-name"
                autoComplete="name"
                aria-label="Name"
                className="input"
                placeholder="John Smith"
                {...register("fullName", {
                  required: "This is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Enter only words",
                  },
                })}
              />
              <div className="flex justify-end absolute bottom-[-22px] right-0">
                {errors?.fullName && (
                  <div className="flex fle-row items-center">
                    <Image src={Close} alt="Close Icon" className="w-[18px] h-[18px]" />
                    <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                      {errors?.fullName?.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <label className="label" htmlFor="career-email">
                E-mail
              </label>
              <input
                id="career-email"
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
                    <Image src={Close} alt="Close Icon" className="w-[18px] h-[18px]"/>
                    <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                      {errors?.email?.message}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="label" htmlFor="position">
                Position
              </label>
              <input
                className="input"
                id="position"
                type="text"
                placeholder="Movie maker"
                {...register("position")}
              />
            </div>
            <div className="relative">
              <label className="label" htmlFor="career-phone">
                Phone
              </label>
              <input
                id="career-phone"
                autoComplete="phone"
                aria-label="Phone"
                className="input"
                type="tell"
                placeholder="+ 38 (097) 12 34 567"
                {...register("phone", {
                  required: "Incorrect phone",
                  pattern: { value: /^\+380\d{9}$/, message: "Invalid phone" },
                })}
              />
              <div className="flex justify-end absolute bottom-[-22px] right-0">
                {errors?.phone && (
                  <div className="flex fle-row items-center">
                    <Image src={Close} alt="Close Icon" className="w-[18px] h-[18px]" />
                    <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                      {errors?.phone?.message}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="block mb:[18px] tablet:hidden">
              <label className="label" htmlFor="career-message">
                Message
              </label>
              <textarea
                id="career-message"
                autoComplete="message"
                aria-label="Message"
                className="textarea resize-none h-[196px]"/>
                 {/* {...register("messages", { required: "This is required",})} */}
                {/* <div className="flex justify-end">
                    {errors?.messages && (
                      <>
                        <Image src={Close} alt="Close" width={18} height={18} />
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                          {errors?.messages?.message}
                        </p>
                      </>
                    )}
                  </div> */}
            </div>
            <div className="hidden tablet:flex tablet:flex-row tablet:gap-x-2 desktop:align-items">
              <div className="checkbox-wrapper">
                <input
                  id="career-check"
                  autoComplete="check"
                  aria-label="Check agreement checkbox"
                  type="checkbox"
                  id="isAgree"
                  {...register("isAgree")}
                  onChange={() => setIsChecked((prev) => !prev)}
                  checked={isChecked}
                  className={isChecked ? "checked" : ""}
                />
              </div>
              <label htmlFor="career-check" className="tablet:w-[192px] desktop:w-[258px] text-primary text-xs not-italic font-extralight leading-5">
                I confirm my consent to the processing of personal data.
              </label>
            </div>
          </div>

          <div className="w-full desktop:w-[292px]">
            <div className="hidden tablet:flex tablet:flex-col w-full">
              <label className="label" htmlFor="career-tabl-messages">
                Message
              </label>
              <textarea
              id="career-tabl-message"
              autoComplete="messages"
              aria-label="Messages"
                className="w-full textarea resize-none tablet:h-[228px] desktop:h-[268px]"/>
                {/* {...register("messages", { required: "This is required",})} */}
                {/* <div className="flex justify-end">
                    {errors?.messages && (
                      <>
                        <Image src={Close} alt="Close" width={18} height={18} />
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                          {errors?.messages?.message}
                        </p>
                      </>
                    )}
                  </div> */}
            </div>

            <div className="flex flex-row gap-x-2 mb:4 tablet:hidden">
              <div className="checkbox-wrapper">
                <input
                  id="career-tabl-check"
                  autoComplete="check"
                  aria-label="Check agreement checkbox"
                  type="checkbox"
                  id="isAgree"
                  {...register("isAgree")}
                  onChange={() => setIsChecked((prev) => !prev)}
                  checked={isChecked}
                  className={isChecked ? "checked" : ""}
                />
              </div>
              <label htmlFor="career-tabl-check" className=" w-full text-primary text-xs not-italic font-extralight leading-5">
                I confirm my consent to the processing of personal data.
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="active-btn text-primary cursor-pointer uppercase text-3xl font-medium leading-normal desktop:text-[32px] outline-none border-none"
                type="submit">send</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
