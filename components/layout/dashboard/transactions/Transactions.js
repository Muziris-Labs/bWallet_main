import TransactionList from "./TransactionList";
import TransactionFilter from "./TransactionFilter";
import TransactionHeading from "./TransactionHeading";

const Transactions = () => {
  return (
    <div className="rounded-xl">
      {/* Isko Rehne do. Last main jab time rahega tab karna. */}
      {/* <TransactionFilter /> */}

      <TransactionHeading />
      <TransactionList />
    </div>
  );
};

export default Transactions;
