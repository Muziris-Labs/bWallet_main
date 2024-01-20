import DeployWallet from "../step/DeployWallet";
import SetupAccount from "../step/SetupAccount";
import TwoFactorAuth from "../step/TwoFactorAuth";

const StepperMain = ({ activeStep }) => {
  return (
    <section className="mt-32">
      {activeStep === 0 ? (
        <SetupAccount />
      ) : activeStep === 1 ? (
        <TwoFactorAuth />
      ) : (
        <DeployWallet />
      )}
    </section>
  );
};

export default StepperMain;
