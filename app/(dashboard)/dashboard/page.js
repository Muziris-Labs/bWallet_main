import Tokens from "@/components/layout/dashboard/home/tokens/Tokens";
import Portfolio from "@/components/layout/dashboard/home/main/Portfolio";
import ActionTab from "@/components/layout/dashboard/home/actions/ActionTab";
import Transactions from "@/components/layout/dashboard/home/transactions/Transactions";

export const metadata = {
  title: "B-Wallet | Dashboard",
  description: "By Bankless DAO",
};

export default function Dashboard() {
  return (
    <article className="flex gap-5">
      <section>
        <Portfolio />
        <Tokens />
      </section>

      <aside className="w-full max-w-sm">
        <ActionTab />
        <Transactions />
      </aside>
    </article>
  );
}
