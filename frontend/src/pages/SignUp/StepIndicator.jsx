import React from 'react';
import { CheckCircle } from 'lucide-react';

const StepIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Interests' },
    { number: 3, title: 'Verification' },
    { number: 4, title: 'Voice Password' }
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 ${
                  step.number < currentStep
                    ? 'bg-green-500 text-white'
                    : step.number === currentStep
                    ? 'bg-purple-600 text-white ring-4 ring-purple-200'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step.number < currentStep ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  step.number <= currentStep ? 'text-purple-600' : 'text-gray-400'
                }`}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-12 md:w-24 mx-2 mt-[-20px] rounded-full transition-all duration-300 ${
                  step.number < currentStep ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;