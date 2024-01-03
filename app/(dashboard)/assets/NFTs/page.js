import NFTsList from "@/components/layout/dashboard/assets/NFTs/NFTsList";
import NFTsSelected from "@/components/layout/dashboard/assets/NFTs/NFTsSelected";

export const metadata = {
  title: "B-Wallet | NFTs",
  description: "By Bankless DAO",
};

export default function NFTs() {
  return (
    <section className="flex flex-row justify-around w-[100%] ">
      <div className="w-[65%] ">
        <NFTsList />
      </div>
      <div className="w-[30%]">
        <NFTsSelected />
      </div>
    </section>
  );
}
