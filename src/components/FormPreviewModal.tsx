"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Inputs } from "./Form";

type TProps = {
  formData: Inputs;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormPreviewModal = ({ formData, setCurrentStep }: TProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleSubmit = () => {
    toast.success("Form submitted successfully!");
    console.log("🚀formData:", formData);
    router.push("/success");
  };

  // Close the modal when clicking outside of the modal
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) =>
      modalRef.current &&
      !modalRef.current.contains(e.target as Node) &&
      setCurrentStep(2);

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setCurrentStep]);
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[600px]  rounded-lg overflow-hidden">
        <div
          ref={modalRef}
          className="w-full max-h-[95vh] overflow-y-auto bg-white px-4"
        >
          <h1 className="text-center text-xl font-semibold sticky top-0 bg-white py-5">
            Please Confirm Your Information
          </h1>
          <div className="w-full space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <div className="rounded-md border px-3 py-2 text-sm bg-gray-50 text-gray-800">
                  {key.includes("password") || key === "confirmPassword"
                    ? "••••••"
                    : value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 sticky bottom-0 bg-white pb-5">
            <button
              className="block w-full px-4 py-2.5 bg-gray-500 mt-4 rounded-lg text-white uppercase font-semibold"
              type="button"
              onClick={() => setCurrentStep(0)}
            >
              Edit
            </button>
            <button
              className="block w-full px-4 py-2.5 bg-blue-400 mt-4 rounded-lg text-white uppercase font-semibold"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPreviewModal;
