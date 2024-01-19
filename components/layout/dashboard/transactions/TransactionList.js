import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      date: "2021/08/10",
      type: "Send",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      status:"Completed",
    },
    {
      id: 2,
      date: "2021/08/10",
      type: "Send",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      status:"Failed",
    },
    {
      id: 3,
      date: "2021/08/10",
      type: "Receive",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      status:"Completed",
    },
    {
      id: 4,
      date: "2021/08/10",
      type: "Receive",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      status:"Completed",
    },
    {
      id: 5,
      date: "2021/08/10",
      type: "Send",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      status:"Pending",
    },
    {
      id: 6,
      date: "2021/08/10",
      type: "Send",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      status:"Completed",
    },
  ];

  return (
    <ul>
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={transaction.id}
          index={index}
          transaction={transaction}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
