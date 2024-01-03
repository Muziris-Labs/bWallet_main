import BanklessSelect from "@/components/ui/BanklessSelect";
import ActionTabs from "./actionTab/ActionTab";

const Actions = () => {
  return (
    <section className="rounded-lg bg-background-black p-4">
      <ActionTabs />
      <BanklessSelect options={["Option 1", "Option 2", "Option 3"]} />
    </section>
  );
};

export default Actions;
