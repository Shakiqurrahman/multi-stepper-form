"use client";

import { FormDataSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import BottomNavigation from "./BottomNavigation";
import FormPreviewModal from "./FormPreviewModal";
import StepperNavigation from "./StepperNavigation";

export type Inputs = z.infer<typeof FormDataSchema>;

const Form = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register,
    // handleSubmit,
    // reset,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  return (
    <div className="mt-16">
      {/* steps */}
      <StepperNavigation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        trigger={trigger}
      />
      {/* Form */}
      <form className="mt-12 py-12">
        {currentStep === 0 && (
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-neutral-300">
              Provide your personal details.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName")}
                    autoComplete="fullName"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.fullName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 text-gray-900  dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.email?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-200"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phoneNumber"
                    type="number"
                    {...register("phoneNumber")}
                    autoComplete="phoneNumber"
                    className="block w-full rounded-md border-0 py-2 text-gray-900  dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.phoneNumber?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Address
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600  dark:text-neutral-400">
              Address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-200"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="street"
                    {...register("streetAddress")}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-2 text-gray-900  dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.streetAddress?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.streetAddress.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-200"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.city?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  ZIP Code
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="zip"
                    {...register("zipCode")}
                    autoComplete="zip-code"
                    className="block w-full rounded-md border-0 py-2 text-gray-900  dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.zipCode?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900  dark:text-white">
              Account Setup
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600  dark:text-neutral-400">
              Enter your account details to get started.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="street"
                  className="block text-sm font-medium leading-6 text-gray-900  dark:text-gray-200"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="username"
                    {...register("username")}
                    autoComplete="username"
                    className="block w-full rounded-md border-0 py-2 text-gray-900  dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.username?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password")}
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.password?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    {...register("confirmPassword")}
                    autoComplete="confirmPassword"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 dark:text-gray-100 shadow-sm ring-1 outline-none duration-300 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-4"
                  />
                  {errors.confirmPassword?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full mt-4">
              <input
                type="checkbox"
                name="showPassword"
                id="showPassword"
                className="size-4"
                onChange={() => setShowPassword(!showPassword)}
                checked={showPassword}
              />
              <label
                htmlFor="showPassword"
                className="select-none cursor-pointer text-sm"
              >
                Show Password
              </label>
            </div>
          </>
        )}
      </form>

      {currentStep === 3 && (
        <FormPreviewModal
          formData={getValues()}
          setCurrentStep={setCurrentStep}
        />
      )}

      {/* Navigation */}
      <BottomNavigation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        trigger={trigger}
      />
    </div>
  );
};

export default Form;
