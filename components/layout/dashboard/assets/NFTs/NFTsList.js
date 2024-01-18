"use client"
import { useDispatch,useSelector } from "react-redux";
import NFTsItem from "./NFTsItem";
import { setActiveNft } from "@/redux/slice/nftsSlice";

const NFTsList = () => {

  const dispatch = useDispatch();
  const activeNft = useSelector((state) => state.nfts.activeNft);
  

  const nftData = [
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg2.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 2",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 1",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 3",
    },
    {
      src: "/images/nfts/nftImg1.svg",
      nftName: "Peter Pat #4513",
      nftAuthor: "By LoduLalit",
      description: "Description 2",
    },
  ];

  const setNftDetails = (nft) => {
    console.log(activeNft,"Hello",nft)
    dispatch(
      setActiveNft(
        {
          nftImageSrc: nft.src,
          nftName: nft.nftName,
          nftAuthor: nft.nftAuthor,
          nftDescription: nft.description,
          nftContractAdd: "Random",
          nftTokenId: "Random",
          nftTokenStd: "$0.00",
          nftChain: "0.00%",
        }
      ),
    );
  };
  return (
    <div className="grid w-full grid-cols-3 gap-4">
      {nftData.map((nft, i) => {
        return (
          <div key={i} onClick={()=>setNftDetails(nft)}>
            <NFTsItem key={i} data={nft} />
          </div>
        );
      })}
    </div>
  );
};

export default NFTsList;
