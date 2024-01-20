import { Stepper } from "@material-tailwind/react";

import StepperItem from "./StepperItem";

const StepperList = ({
  activeStep,
  setActiveStep,
  setIsFirstStep,
  setIsLastStep,
}) => {
  return (
    <Stepper
      lineClassName="bg-gray-700"
      activeLineClassName="bg-white"
      activeStep={activeStep}
      isLastStep={(value) => setIsLastStep(value)}
      isFirstStep={(value) => setIsFirstStep(value)}
    >
      <StepperItem
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepNo={0}
        stepDes={"Add Passkey"}
      />

      <StepperItem
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepNo={1}
        stepDes={"Assign Domain"}
      />

      {/* <StepperItem
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepNo={2}
        stepDes={"ABC"}
      /> */}
    </Stepper>
  );
};
export default StepperList;
