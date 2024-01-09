import TokenItem from "./TokenItem";

const tokenData = [
  {
    imgSrc: "./images/portfolio/base.svg",
    name: "Base",
    price: "$1.4",
    quantity: "1834",
    value: "$26,084"
  },
  {
    imgSrc: "./images/portfolio/dai.svg",
    name: "Dai",
    price: "$1",
    quantity: "2001",
    value: "$2684"
  }, {
    imgSrc: "./images/portfolio/usdc.svg",
    name: "USDC",
    price: "$0.99",
    quantity: "6000",
    value: "$6000"
  },
  {
    imgSrc: "./images/portfolio/eth.svg",
    name: "ETH",
    price: "$1660",
    quantity: "4000",
    value: "$8300"
  },
  {
    imgSrc: "./images/portfolio/cult.svg",
    name: "CULT",
    price: "$0.011",
    quantity: "273654",
    value: "$300"
  }, {
    imgSrc: "./images/portfolio/uni.svg",
    name: "UNI",
    price: "$4.92",
    quantity: "780",
    value: "$9837"
  }
]

const TokenList = () => {
  return (
    <div className="bg-background-black p-4 rounded-xl">
       <h1 className="text-xl my-2">
        Tokens
      </h1>
      <div className="grid grid-cols-5 items-center border-t-2 border-[#444] text-[#444] p-3 ">
        <div>
          Token
        </div>
        <div>
          Price
        </div>
        <div>
          Quantity
        </div>
        <div className="text-center">
          Value
        </div>
        <div className="flex justify-center">
          Action
        </div>
      </div>
      {tokenData.map((data, i) => (
        <TokenItem key={i} props={data} index={i}/>
      ))}

    </div>
  )

    ;
};

export default TokenList;
