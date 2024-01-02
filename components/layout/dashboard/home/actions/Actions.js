import BanklessInput from "@/components/ui/BanklessInput";
import ActionTabs from "./actionTab/ActionTab";

const Actions = () => {
  return (
    <section className="rounded-lg bg-background-black p-4">
      <ActionTabs />
      <BanklessInput />
    </section>
  );
};

export default Actions;
