import NewContactsModal from "@/components/modal/NewContactsModal";

export const metadata = {
  title: "Bankless | Contacts",
  description: "By Bankless DAO",
};

export default function ContactsLayout({ children }) {
  return (
    <>
      <NewContactsModal />
      {children}
    </>
  );
}
