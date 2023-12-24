import Sidebar from "@/components/sidebar/Sidebar";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "B-Wallet",
  description: "By Bankless DAO",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex gap-5">
      <Sidebar />

      <main className="space-y-5">
        <PageHeader />
        {children}
      </main>
    </div>
  );
}
