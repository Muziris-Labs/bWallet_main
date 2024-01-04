import NFTsItem from "./NFTsItem";

const NFTsList = () => {

  const nftData=[
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },{
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    },
    {
      src:"/images/nfts/nftImg1.svg",
      nftName:"Peter Pat #4513",
      nftAuthor:"By LoduLalit"
    }
  ]

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {nftData.map((nft,i)=>(
        <NFTsItem key={i} data={nft}/>
      ))}
    </div>
  );
};

export default NFTsList;
