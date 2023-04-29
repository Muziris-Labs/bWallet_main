function Portfolio() {
  const data = [
    {
      Symbol: "Bank",
      amount: 45.62,
    },
    {
      Symbol: "Eth",
      amount: 0.002,
    },
    {
      Symbol: "Matic",
      amount: 20.0,
    },
  ];
  return (
    <>
      <h1 className="text-white text-4xl my-8">Your Portfolio</h1>
      <div
        className="h-[44%] w-[100%] relative grid grid-cols-2 overflow-auto scrollFunc rounded-3xl"
        style={{
          gridRowGap: "20%",
          gridColumnGap: "6%",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[100%] h-[120%] gradientBalance rounded-3xl"
          >
            <div className="flex flex-col ml-[10%]">
              <h1 className="font-[ClearSans] text-white text-[1.5vw] mt-[5%]">
                {item.Symbol}
              </h1>
              <h1 className=" text-white font-extrabold text-[2.5vw] -mt-[2%]">
                {item.amount}
              </h1>
              <a
                href="#"
                className="font-[ClearSans] text-[#71c76e] text-[1vw] mt-[5%]"
              >
                Buy {item.Symbol}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Portfolio;
