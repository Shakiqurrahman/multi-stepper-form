import { steps } from "@/utils/stepsData";
import { Inputs } from "./Form";

type TProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  trigger: (fields?: (keyof Inputs)[]) => Promise<boolean>;
};
const StepperNavigation = ({
  currentStep,
  setCurrentStep,
  trigger,
}: TProps) => {
  const handleClickStepper = async (v: number) => {
    let fieldsToValidate: (keyof Inputs)[] = [];

    if (v === 0) {
      fieldsToValidate = [];
    } else if (v === 1) {
      fieldsToValidate = ["fullName", "email", "phoneNumber"];
    } else if (v === 2) {
      fieldsToValidate = ["streetAddress", "city", "zipCode"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep(v);
    }
  };
  return (
    <nav>
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step, index) => (
          <li key={step.name} className="md:flex-1">
            {currentStep > index ? (
              <div
                onClick={() => handleClickStepper(index)}
                className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 cursor-pointer"
              >
                <span className="text-sm font-medium text-sky-600 transition-colors ">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : currentStep === index ? (
              <div
                onClick={() => handleClickStepper(index)}
                className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 cursor-pointer"
              >
                <span className="text-sm font-medium text-sky-600">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : (
              <div
                onClick={() => handleClickStepper(index)}
                className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-500  dark:text-gray-400 transition-colors">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepperNavigation;
