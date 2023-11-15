"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Close from "../public/assets/icons/close.svg";
import toast  from 'react-hot-toast';

type ConfigFormContacts = {
  fullName: string;
  email: string;
  message: string;
};
const defaultStateContacts: ConfigFormContacts = {
  fullName: "",
  email: "",
  message: "",
};

export default function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConfigFormContacts>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<ConfigFormContacts> = (data) => {
    alert(`
    Full Name:${data.fullName},
    Email:${data.email},
    Message:${data.message || ""}`);
    reset();
  };
  return (
    <section id="/contacts" className="bg-Contacts bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto container-main">
        <h2 className="mainTitle mb-9 tablet:mb-10 desktop:mb-[71px]">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="flex flex-col gap-y-3 tablet:gap-y-[64px] desktop:flex-row desktop:gap-x-[231px]">
          <address className=" flex flex-col desktop:gap-y-[120px] laptop:flex-row laptop:gap-x-[90px] laptop:items-top">
            <div className="flex flex-col  desktop:pl-[107px]">
              <div className="flex flex-row items-top gap-x-5 mb-6 maxMobile:justify-end desktop:justify-end desktop:mb-[64px]">
                <ul className="laptop:w-[221px] laptop:text-right">
                  <li className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg">
                    <a href="tel:+380981234567">+38 (098) 12 34 567</a>
                  </li>
                  <li className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg">
                    <a href="tel:+380731234567">+38 (073) 12 34 567</a>
                  </li>
                </ul>
                <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">
                  Phone number
                </p>
              </div>

              <div className="flex flex-row items-center gap-x-5 maxMobile:mb-6 maxMobile:justify-center desktop:justify-end">
                <a
                  className="active-link laptop:w-[221px] laptop:text-right text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
                  href="mailto:support@carptravel.com"
                >
                  support@carptravel.com
                </a>
                <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">
                  E-mail
                </p>
              </div>
            </div>

            <div className="flex flex-row items-top gap-x-5 maxMobile:justify-end maxMobile:mr-5 desktop:text-right desktop:flex-row-reverse">
              <p className="text-xs not-italic font-extralight leading-5 desktop:leading-6">
                Follow us
              </p>
              <ul>
                <li>
                  <a
                    className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
                    href="https://www.facebook.com/"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
                    href="https://www.instagram.com/"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
                    href="https://www.youtube.com/"
                  >
                    youtube
                  </a>
                </li>
                <li>
                  <a
                    className="active-link text-sm not-italic font-normal leading-6 tablet:text-base desktop:text-lg"
                    href="https://www.tiktok.com/"
                  >
                    tiktok
                  </a>
                </li>
              </ul>
            </div>
          </address>
          <form
            action="#"
            onSubmit={handleSubmit(onSubmit)}
            className="tablet:flex-1 desktop:w-[607px]"
          >
            <div className="mb-4 desktop:mb-6 w-full flex flex-col gap-y-6 tablet:gap-x-5 desktop:gap-y-[40px]  tablet:flex-row  desktop:flex-col">
              <div className="desktop:w-full flex flex-col gap-y-[25px] tablet:gap-y-7 desktop:flex-row desktop:gap-x-5">
                <div className="flex flex-col tablet:w-[221px] desktop:w-full">
                  <label className="label">Full name</label>
                  <input
                    className="input"
                    placeholder="John Smith"
                    {...register("fullName", {
                      required: "Incorrect name",
                      minLength: { value: 7, message: "Min length is 7" },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Enter only words",
                      },
                    })}
                  />
                  <div className="flex justify-end">
                    {errors?.fullName && (
                      <>
                        <Image src={Close} alt="Close" width={18} height={18} />
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                          {errors?.fullName?.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <div className=" flex flex-col tablet:w-[221px] desktop:w-full">
                  <label className="label">E-mail</label>
                  <input
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
                  <div className="flex justify-end">
                    {errors?.email && (
                      <>
                        <Image src={Close} alt="Close" width={18} height={18} />
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                          {errors?.email?.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <label className="label">Message</label>
                <textarea className="textarea h-[193px] tablet:h-[221px] desktop:h-[174px] resize-none" 
                {...register("message", { required: "This is required",})}
                />
                <div className="flex justify-end">
                    {errors?.message && (
                      <>
                        <Image src={Close} alt="Close" width={18} height={18} />
                        <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                          {errors?.message?.message}
                        </p>
                      </>
                    )}
                  </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button 
                className="active-btn text-primary uppercase text-3xl font-medium leading-normal desktop:text-[32px] outline-none border-none"
                type="submit">send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
