import TransactionList from "./TransactionList";

const Transactions = () => {
  return (
    <section className="bg-background-black p-4">
      <h2 className="mb-4 border-b border-gray-800 pb-4 text-lg font-bold text-gray-300">
        Transaction History
      </h2>

      <TransactionList />
    </section>
  );
};

export default Transactions;
