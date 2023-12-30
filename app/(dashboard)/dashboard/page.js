import ActionTab from "@/components/layout/dashboard/home/actions/ActionTab";
import Transactions from "../transactions/page";
import Portfolio from "@/components/layout/dashboard/home/main/Portfolio";
import Tokens from "@/components/layout/dashboard/home/tokens/Tokens";

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

      <aside>
        <ActionTab />
        <Transactions />
      </aside>
    </article>
  );
}
