import TransferBody from "@/components/layout/dashboard/home/actions/TransferBody";

export const metadata = {
  title: "B-Wallet | Transfer",
  description: "By Bankless DAO",
};

export default function Transfer() {
  return (
    <section className="absolute left-1/2 top-1/2 mx-auto w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-900 p-4">
      <TransferBody />
    </section>
  );
}
