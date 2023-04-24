export default function Logo(props) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{
        width: `${props.width}px`,
      }}
    >
      <h1
        className="font-[ClearSans] text-center text-white"
        style={{
          lineHeight: "1",
          fontSize: `${(props.width * 38) / 100}px`,
        }}
      >
        Wallet
      </h1>
      <div className="w-[100%] bg-red-500 h-[5px] mt-1"></div>
    </div>
  );
}
