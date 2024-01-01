import { ListItem } from "@material-tailwind/react";

import Image from "next/legacy/image";

const TransactionItem = ({ transaction, index }) => {
  return (
    <ListItem
      className={`flex justify-between text-gray-300 ${
        index % 2 === 0 ? "bg-black" : "bg-background-primary"
      } hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800`}
    >
      <div className="flex gap-2">
        <div
          className={`prevent-select flex items-center justify-center rounded-lg p-3 ${
            index % 2 !== 0 ? "bg-black" : "bg-background-primary"
          } hover:bg-gray-900`}
        >
          <Image
            src={`/images/dashboard/home/${transaction.type.toLowerCase()}.svg`}
            width={16}
            height={16}
            alt="Transaction Icon"
          />
        </div>

        <div className="prevent-select">
          <p className="text-base font-medium text-gray-300">
            {transaction.type}
          </p>
          <p className="text-xs text-gray-400">{transaction.date}</p>
        </div>
      </div>

      <div className="text-right">
        <p
          className={`text-base font-bold text-gray-300 ${
            transaction.type === "Send" ? "text-red-600" : "text-green-500"
          }`}
        >
          {transaction.amount}

          <span className="prevent-select">{" " + transaction.currency}</span>
        </p>
        <p className="text-xs font-medium text-gray-400">
          <span className="prevent-select">$</span>312
        </p>
      </div>
    </ListItem>
  );
};

export default TransactionItem;
