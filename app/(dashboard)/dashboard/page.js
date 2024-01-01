import Tokens from "@/components/layout/dashboard/home/tokens/Tokens";
import Actions from "@/components/layout/dashboard/home/actions/Actions";
import Portfolio from "@/components/layout/dashboard/home/main/Portfolio";
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
        <Actions />
        <Transactions />
      </aside>
    </article>
  );
}
