import Image from "next/image";

const TokenItem = ({props,index}) => {
  const conditionalClass = index % 2 === 0 ? "bg-primary-black" : "bg-background-primary";

  return (
    <div className={`grid grid-cols-5 items-center my-2 ${conditionalClass} p-3 rounded-lg`}>
      <div  className="flex flex-row">
        <Image 
          src={props.imgSrc}
          width={24}
          height={24}
          alt={"Token Logo"}
          className="mr-3"
        />
        <h2>{props.name}</h2>
      </div>

      <div>
        {props.price}
      </div>

      <div>
        {props.quantity}
      </div>

      <div className="text-center">
        {props.value}
      </div>

      <div className="flex justify-center">
        <Image 
          src="./images/action.svg"
          width={34}
          height={34}
          alt={"Action Logo"}
        />
      </div>
    </div>
  );
};

export default TokenItem;
