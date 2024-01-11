import {
  CreateWalletBtn,
  HardwareWalletBtn,
} from "@/components/ui/buttons/ClientButtons";

const HeaderBtn = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <CreateWalletBtn isDefault={true} />
      <HardwareWalletBtn />
    </div>
  );
};

export default HeaderBtn;
