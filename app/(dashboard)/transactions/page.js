import Transactions from "@/components/layout/dashboard/transactions/Transactions";

export const metadata = {
  title: "B-Wallet | Transactions",
  description: "By Bankless DAO",
};

const TransactionsPage = () => {
  return (
    <section>
      <Transactions />
    </section>
  );
};

export default TransactionsPage;
