import TokenDetails from "@/components/layout/dashboard/assets/tokens/TokenDetails";
import UserTokenDetails from "@/components/layout/dashboard/assets/tokens/UserTokenDetails";
import TokenList from "@/components/layout/dashboard/home/tokens/TokenList";

export default function Tokens() {
  return (
    <>
      <TokenList />

      <section className="flex gap-5">
        <TokenDetails />
        <UserTokenDetails />
      </section>
    </>
  );
}
