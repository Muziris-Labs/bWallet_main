import NFTsList from "@/components/layout/dashboard/assets/NFTs/NFTsList";
import NFTsSelected from "@/components/layout/dashboard/assets/NFTs/NFTsSelected";

export default function NFTs() {
  return (
    <section className="flex gap-5">
      <NFTsList />
      <NFTsSelected />
    </section>
  );
}
