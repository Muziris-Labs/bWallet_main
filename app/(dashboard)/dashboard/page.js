import ActionTab from "@/components/layout/dashboard/home/actions/ActionTab";
import Transactions from "../transactions/page";
import Portfolio from "@/components/layout/dashboard/home/main/Portfolio";
import Tokens from "@/components/layout/dashboard/home/tokens/Tokens";

export default function Dashboard() {
  return (
    <article className="flex gap-5">
      <section>
        <Portfolio />
        <Tokens />
      </section>

      <aside>
        <ActionTab />
        <Transactions />
      </aside>
    </article>
  );
}
