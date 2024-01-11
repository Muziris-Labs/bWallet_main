import AddToContactsModal from "@/components/modal/AddToContactsModal";

export const metadata = {
  title: "Bankless | Contacts",
  description: "By Bankless DAO",
};

export default function ContactsLayout({ children }) {
  return (
    <>
      <AddToContactsModal />
      {children}
    </>
  );
}
