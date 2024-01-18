const TransactionItem = ({ index, transaction }) => {
  return (
    <li
      className={`flex justify-between overflow-hidden px-4 py-2 text-gray-300 ${
        index % 2 === 0 ? "bg-black" : "bg-background-primary"
      } hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800`}
    >
      Transaction Item
    </li>
  );
};

export default TransactionItem;
