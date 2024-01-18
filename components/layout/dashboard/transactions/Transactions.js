import TransactionList from "./TransactionList";
import TransactionFilter from "./TransactionFilter";
import TransactionHeading from "./TransactionHeading";

const Transactions = () => {
  return (
    <>
      {/* Isko Rehne do. Last main jab time rahega tab karna. */}
      {/* <TransactionFilter /> */}

      <TransactionHeading />
      <TransactionList />
    </>
  );
};

export default Transactions;
