const TransactionHeading = () => {
  return (
    <div className="rounded-ss-xl bg-gray-900 p-4 grid grid-cols-7 ">
      <h1>
        Time
      </h1>
      <h1>
        Type
      </h1>
      <h1>
        Asset
      </h1>
      <h1>
        Amount
      </h1>
      <h1>
        Destination
      </h1>
      <h1>
        TxID
      </h1>
      <h1 className="">
        Status
      </h1>
    </div>
  );
};

export default TransactionHeading;
