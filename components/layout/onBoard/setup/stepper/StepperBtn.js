"use client"
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const StepperBtn = ({ isFirstStep, isLastStep, setActiveStep }) => {
  const [deployClicked,setDeployClicked]=useState();
  const router=useRouter();
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const handleDeploy=()=>{
    setDeployClicked(true)
    setTimeout(() => {
      router.push("dashboard")
    }, 3000);
  }
  return (
    <div className="mt-32 flex justify-between">
      <Button onClick={(handlePrev)} disabled={isFirstStep}>
        Prev
      </Button>
      {
        isLastStep?(
          <Button onClick={()=>handleDeploy()} className="flex flex-row items-center" disabled={deployClicked}>
            {deployClicked?<ArrowPathIcon className="h-6 w-6 animate-spin text-white"/>:<div>Deploy</div>}
            {/* Deploy */}
          </Button>
        ):(
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        )
      }
      
    </div>
  );
};

export default StepperBtn;
