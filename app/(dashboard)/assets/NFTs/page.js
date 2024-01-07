import NFTsList from "@/components/layout/dashboard/assets/NFTs/NFTsList";
import NFTsSelected from "@/components/layout/dashboard/assets/NFTs/NFTsSelected";

export const metadata = {
  title: "B-Wallet | NFTs",
  description: "By Bankless DAO",
};


export default function NFTs() {
  return (
    <section className="grid grid-cols-5 gap-4 ">
      <div className="col-span-3">
        <NFTsList />
      </div>
      <div className="col-span-2 ">
        <NFTsSelected />
      </div>
    </section>
  );
}
