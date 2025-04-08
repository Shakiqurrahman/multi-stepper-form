import { steps } from "@/utils/stepsData";
import { Inputs } from "./Form";

type TProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  trigger: (fields?: (keyof Inputs)[]) => Promise<boolean>;
};
const BottomNavigation = ({ currentStep, setCurrentStep, trigger }: TProps) => {
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNext = async () => {
    let fieldsToValidate: (keyof Inputs)[] = [];

    if (currentStep === 0) {
      fieldsToValidate = ["fullName", "email", "phoneNumber"];
    } else if (currentStep === 1) {
      fieldsToValidate = ["streetAddress", "city", "zipCode"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["username", "password", "confirmPassword"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="mt-8 pt-5">
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="rounded bg-white px-2 py-2.5 w-28 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50 flex gap-1 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="rounded bg-white px-2 py-2.5 w-28 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50 flex gap-1 items-center justify-center"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5  shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
