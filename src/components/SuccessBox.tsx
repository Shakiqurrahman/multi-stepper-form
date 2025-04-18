"use client";
import { useRouter } from "next/navigation";

const SuccessBox = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f0ff3] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-black dark:border p-6 py-10 sm:py-16 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Form Submission Success!
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-200 mb-2">
          Thank you for submitting your form.
        </p>

        <div className="mt-2 text-center">
          <button
            onClick={handleGoBack}
            className="px-4 py-2 text-blue-400 underline"
          >
            Go Back to Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessBox;
