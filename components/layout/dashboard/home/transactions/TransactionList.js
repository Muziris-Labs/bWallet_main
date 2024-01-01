"use client";

import { List } from "@material-tailwind/react";

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
      TxID: "0xIrT4...77up",
    },
    {
      id: 2,
      date: "2021/08/10",
      type: "Send",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      TxID: "0xIrT4...77up",
    },
    {
      id: 3,
      date: "2021/08/10",
      type: "Receive",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      TxID: "0xIrT4...77up",
    },
    {
      id: 4,
      date: "2021/08/10",
      type: "Receive",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      TxID: "0xIrT4...77up",
    },
    {
      id: 5,
      date: "2021/08/10",
      type: "Send",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      TxID: "0xIrT4...77up",
    },
    {
      id: 6,
      date: "2021/08/10",
      type: "Send",
      wallet: "0xFa34...5t78",
      amount: 0.01,
      currency: "ETH",
      to: "0x1234...5678",
      TxID: "0xIrT4...77up",
    },
  ];

  return (
    <List className="flex flex-col gap-2 p-0">
      {transactions.map((transaction, index) => (
        <TransactionItem
          key={transaction.id}
          index={index}
          transaction={transaction}
        />
      ))}
    </List>
  );
};

export default TransactionList;
