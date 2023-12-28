import Sidebar from "@/components/sidebar/Sidebar";
import PageHeader from "@/components/pageHeader/PageHeader";

export const metadata = {
  title: "B-Wallet",
  description: "By Bankless DAO",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex gap-5">
      <Sidebar />

      <main className="w-full space-y-5 pr-5">
        <PageHeader />
        {children}
      </main>
    </div>
  );
}
