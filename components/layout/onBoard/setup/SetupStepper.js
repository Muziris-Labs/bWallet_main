"use client";

import { useState } from "react";

import StepperBtn from "./stepper/StepperBtn";
import StepperList from "./stepper/StepperList";
import StepperMain from "./stepper/StepperMain";

const SetupStepper = ({ onStepChange }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleStepChange = (updater) => {
    const newStep = updater;
    setActiveStep(newStep);
    onStepChange(newStep);
  };

  return (
    <div className="w-full px-24 py-4">
      <StepperList
        activeStep={activeStep}
        setActiveStep={()=>handleStepChange(activeStep)}
        setIsFirstStep={setIsFirstStep}
        setIsLastStep={setIsLastStep}
      />

      <StepperMain activeStep={activeStep} />

      <h1></h1>

      <StepperBtn
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        setActiveStep={handleStepChange}
      />
    </div>
  );
};

export default SetupStepper;
