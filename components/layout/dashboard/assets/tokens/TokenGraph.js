import TokenGraphChart from "./TokenGraphChart";
import TokenGraphHeader from "./TokenGraphHeader";

const TokenGraph = ({ name, tokenName, tokenData, isLoading }) => {
  return (
    <section className="flex-1 space-y-14 rounded-xl bg-background-black px-7 py-5 font-grotesque">
      <TokenGraphHeader
        name={name}
        tokenName={tokenName}
        tokenData={tokenData}
      />

      <TokenGraphChart isLoading={isLoading} tokenData={tokenData} />
    </section>
  );
};

export default TokenGraph;
