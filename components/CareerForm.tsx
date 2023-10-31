"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler} from "react-hook-form";
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

     
    //const onSubmit = handleSubmit((data) =>{
      const  onSubmit: SubmitHandler<ConfigFormCareer> = (data) =>{
        alert(
        `Full Name:${data.fullName},
         Email:${data.email},
         Phone:${data.phone},
         Message:${data.message || ""},
            ${
                data.isAgree
                ? "Consent to the processing of personal data."
                : "Not consenting to the processing of personal data."
            }`)
      reset()
    };

  return (
    <>
    <form action="#" onSubmit={handleSubmit(onSubmit)} className="w-full">
       <div className="text-primary flex flex-col gap-y-4 tablet:flex-row tablet:gap-x-5 desktop:gap-x-6 "> 
            <div className="flex flex-col gap-y-4 desktop:gap-y-[26px]">
                <div className="flex flex-col">
                    <label className="label">Full name</label>
                    <input className="input" placeholder="John Smith"
                    {...register("fullName", {
                        required: "Incorrect name",
                        minLength: { value: 7, message: "Min length is 7" },
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Enter only words",
                        },
                      })} />
                    <div className="flex justify-end">
                        {errors?.fullName && (
                          <><Image src={Close} alt="Close" width={18} height={18} />
                            <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">{errors?.fullName?.message}</p>
                          </>)}
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
                        {errors?.email && (
                          <><Image src={Close} alt="Close" width={18} height={18} />
                            <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">{errors?.email?.message}</p>
                          </>)}
                      </div>
                </div>
                <div>
                    <label className="label" htmlFor="position"> Position </label>
                    <input className="input" id="position" type="text" placeholder="Movie maker" {...register("position")}/>
                </div>
                <div>
                    <label className="label" htmlFor="phone">Phone</label>
                    <input className="input" id="phone" type="tell" placeholder="+ 38 (097) 12 34 567"
                    {...register("phone", {
                        required: "Incorrect phone",
                        pattern: { value: /^\+380\d{9}$/, message: "Invalid phone" },
                      })}/>
                      <div className="flex justify-end">
                            {errors?.phone && (
                           <><Image src={Close} alt="Close" width={18} height={18} />
                             <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">{errors?.phone?.message}</p>
                           </>)}
                     </div>
                </div>

                <div className="block mb:[18px] tablet:hidden">
                    <label className="label" htmlFor="message"> Message </label>
                    <textarea className="textarea resize-none h-[196px] " id="message"/>
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
     

        <div className="w-full">
                <div className="hidden tablet:flex tablet:flex-col w-full">
                    <label className="label" htmlFor="message"> Message </label>
                    <textarea className="w-full textarea resize-none tablet:h-[228px] desktop:h-[268px]"  id="message" />   
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


// {...register("message", { required: "This is required" })}/>
//                     <div className="flex justify-end">
//                         {errors?.message && (
//                           <><Image src={Close} alt="Close" width={18} height={18} />
//                             <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">{errors?.message?.message}</p>
//                           </>)}
//                     </div>