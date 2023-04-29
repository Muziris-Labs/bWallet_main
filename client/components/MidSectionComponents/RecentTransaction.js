import Transactions from "../Transactions";

function RecentTransaction() {
  return (
    <>
      <h1 className="text-white text-4xl my-8">Recent Transaction</h1>
      <div className="h-[44%] w-[100%] relative flex flex-col overflow-auto scrollFunc rounded-3xl">
        <Transactions />
        <Transactions />
        <Transactions />
      </div>
    </>
  );
}
export default RecentTransaction;
