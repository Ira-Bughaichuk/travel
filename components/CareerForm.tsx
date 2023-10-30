"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Close from '../public/assets/icons/close.svg';

type ConfigFormCareer = {
    fullName: string;
    email: string;
    position: string;
    phone: string;
    message: string;
    isAgree: boolean;
}
const defaultStateCareer:ConfigFormCareer = {
    fullName: "",
    email: "",
    position: "",
    phone: "",
    message: "",
    isAgree: true,
}
export default function CareerForm() {
    const [isChecked, setIsChecked] = useState(defaultStateCareer.isAgree);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<ConfigFormCareer>({mode:'onBlur'});

      //const onSubmit: SubmitHandler<ConfigFormCareer> = ((data) =>{ 
    const onSubmit = handleSubmit((data) =>{
        console.log(data);
        alert(
        `Email:${data.email},
        Full Name:${data.fullName},
        Message:${data.message},
        Phone:${data.phone},
      ${
        data.isAgree
          ? "Consent to the processing of personal data."
          : "Not consenting to the processing of personal data."
      }`)
      reset()
      console.log(data);
      
    });

  return (
    <>
    <form action="#" onSubmit={onSubmit}>
       <div className="flex flex-col gap-y-4 tablet:flex-row tablet:gap-x-5 desktop:gap-x-6 "> 
            <div className="flex flex-col gap-y-4 desktop:gap-y-[26px]">
                <div>
                    <label className="label" htmlFor="name">Full name</label>
                    <input className="input" id="name" type="text" placeholder="John Smith"
                    {...register("fullName", {
                        required: "This is required",
                        minLength: { value: 7, message: "Min length is 7" },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Enter only words",
                        },
                      })} />
                    <div className="flex justify-end">
                        {errors.fullName?.message && (
                            <Image src={Close} alt="Close" width={18} height={18} />)}
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                            {errors.fullName?.message}
                        </p>
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="email">E-mail</label>
                    <input className="input" id="email" type="e-mail" placeholder="johnsmith@email.com"
                    {...register("email", {
                        required: "This is required",
                        pattern: {
                          value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Invalid email",
                        },
                      })}/>
                    <div className="flex justify-end">
                            {errors.email?.message && (
                            <Image src={Close} alt="Close" width={18} height={18} />)}
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                            {errors.fullName?.message}
                        </p>
                    </div>
                </div>
                <div>
                    <label className="label" htmlFor="position"> Position </label>
                    <input className="input" id="position" type="text" placeholder="Movie maker"
                    {...register("position")}/>
                </div>
                <div>
                    <label className="label" htmlFor="phone">Phone</label>
                    <input className="input" id="phone" type="tell" placeholder="+ 38 (097) 12 34 567"
                    {...register("phone", {
                        required: "This is required",
                        pattern: { value: /^\+380\d{9}$/, message: "Invalid phone" },
                      })}/>
                </div>

                <div className="block mb:[18px] tablet:hidden">
                    <label className="label" htmlFor="message"> Message </label>
                    <textarea className="textarea resize-none " rows={8} id="message"
                    {...register("message", { required: "This is required" })}/>
                    <div className=" flex">
                            {errors.message?.message && (
                            <Image src={Close} alt="Close" width={18} height={18} />)}
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                            {errors.fullName?.message}
                        </p>
                    </div>
                </div>
                <div className="hidden tablet:flex tablet:flex-row tablet:gap-x-2">
                    <div className="checkbox-wrapper">
                        <input type="checkbox" 
                        id="isAgree"
                        {...register("isAgree")}
                        onChange={() => setIsChecked((prev) => !prev)}
                        checked={isChecked}
                        className={isChecked ? "checked" : ""}/>
                    </div>
                    <label className="tablet:w-[192px] desktop:w-[258px] text-primary text-xs not-italic font-extralight leading-5">
                    I confirm my consent to the processing of personal data.
                    </label>
                </div>
            </div>
     

        <div>
                <div className="hidden tablet:block">
                    <label className="label" htmlFor="message"> Message </label>
                    <textarea className="textarea resize-none " rows={8} id="message" 
                    {...register("message", { required: "This is required" })}/>
                    <div className="flex justify-end">
                            {errors.message?.message && (
                            <Image src={Close} alt="Close" width={18} height={18} />)}
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                            {errors.fullName?.message}
                        </p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-2 mb:4 tablet:hidden">
                    <div className="checkbox-wrapper">
                        <input type="checkbox" 
                            id="isAgree"
                            {...register("isAgree")}
                            onChange={() => setIsChecked((prev) => !prev)}
                            checked={isChecked}
                            className={isChecked ? "checked" : ""}/>
                    </div>
                    <label className=" w-full text-primary text-xs not-italic font-extralight leading-5">
                    I confirm my consent to the processing of personal data.
                    </label>
                </div>
                <div className="flex justify-end">
                    <input className='text-primary cursor-pointer uppercase text-SM font-medium leading-normal desktop:text-m outline-none border-none' 
                    type="submit"
                    value="send"/>
                </div>               
        </div>

      </div>
    </form>
    </>
  );
}
