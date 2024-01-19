import Image from "next/image";

const TransactionItem = ({ index, transaction }) => {
  return (
    <li
      className={`grid grid-cols-7 overflow-hidden px-4 py-2 text-gray-300 ${
        index % 2 === 0 ? "bg-black" : "bg-background-primary"
      } hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800`}
    >
      <h4>{transaction.date}</h4>
      <section className={`flex items-center`}>
        <div className={`${
              index % 2 === 0 ? "bg-background-primary" : "bg-black"
            } p-2 rounded-lg`}>
          <Image
            src={`/images/dashboard/home/${transaction.type.toLowerCase()}.svg`}
            width={16}
            height={16}
            alt="Transaction Icon"
            
          />
        </div>
      </section>
      <h4>{transaction.currency}</h4>
      <h4  className={`text-base font-bold text-gray-300 ${
            transaction.type === "Send" ? "text-red-600" : "text-green-500"
          }`}
      >{transaction.amount}</h4>
      <h4 className="bg-text-gradient bg-clip-text text-transparent">{transaction.wallet}</h4>
      <h4>{transaction.to}</h4>
      <h4 className={`${transaction.status === "Failed" ? "text-red-600" : transaction.status==="Completed"?"text-green-500":transaction.status==="Pending"?"text-yellow-500":"text-gray-300"}`}>{transaction.status}</h4>
    </li>
  );
};

export default TransactionItem;
